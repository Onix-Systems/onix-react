import React, { useEffect, useRef, useState } from "react";

import { autoScroller } from "@atlaskit/pragmatic-drag-and-drop-autoscroll";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/addon/closest-edge";
import type { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/types";
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/adapter/element";
import { monitorForFiles } from "@atlaskit/pragmatic-drag-and-drop/adapter/file";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/util/combine";

import {
  ColumnMap,
  ColumnType,
  getInitialData,
  Item,
} from "./pragmatic-drag-and-drop/docs/examples/data/people";
import Board from "./pragmatic-drag-and-drop/docs/examples/pieces/board";
import { Column } from "./pragmatic-drag-and-drop/docs/examples/pieces/column";

export default function BoardExample() {
  const [boardData, setBoardData] = useState<{
    columnMap: ColumnMap;
    orderedColumnIds: string[];
  }>(() => getInitialData());
  const boardRef = useRef<HTMLDivElement | null>(null);

  const [customAutoScrollEnabled] = useState(false);

  useEffect(() => {
    if (!boardRef.current) {
      throw new Error("Board reference is not set");
    }

    return combine(
      monitorForFiles({
        onDragStart: (args) => console.log("start:file", args.source.items),
        onDrop: (args) => console.log("drop:file", args.source.items),
      }),
      monitorForElements({
        onDragStart({ location }) {
          if (customAutoScrollEnabled) {
            autoScroller.start({ input: location.current.input });
          }
        },
        onDrag({ location }) {
          if (customAutoScrollEnabled) {
            autoScroller.updateInput({ input: location.current.input });
          }
        },
        onDrop(args) {
          if (customAutoScrollEnabled) {
            autoScroller.stop();
          }

          const { location, source } = args;
          if (!location.current.dropTargets.length) {
            return;
          }

          if (source.data.type === "column") {
            const startIndex: number = boardData.orderedColumnIds.findIndex(
              (columnId) => columnId === source.data.columnId
            );

            const target = location.current.dropTargets[0];
            const indexOfTarget: number = boardData.orderedColumnIds.findIndex(
              (id) => id === target.data.columnId
            );
            const closestEdgeOfTarget: Edge | null = extractClosestEdge(
              target.data
            );

            const updated = reorderWithEdge({
              list: boardData.orderedColumnIds,
              startIndex,
              indexOfTarget,
              closestEdgeOfTarget,
              axis: "horizontal",
            });

            console.log("reordering column", {
              startIndex,
              destinationIndex: updated.findIndex(
                (columnId) => columnId === target.data.columnId
              ),
              closestEdgeOfTarget,
            });

            setBoardData({ ...boardData, orderedColumnIds: updated });
          }

          if (source.data.type === "card") {
            const itemId = source.data.itemId;
            if (typeof itemId !== "string") {
              throw new Error("Invalid item ID");
            }

            const [, startColumnRecord] = location.initial.dropTargets;
            const sourceId = startColumnRecord.data.columnId;
            if (typeof sourceId !== "string") {
              throw new Error("Invalid source column ID");
            }

            const sourceColumn = boardData.columnMap[sourceId];
            const itemIndex = sourceColumn.items.findIndex(
              (item) => item.itemId === itemId
            );
            const item: Item = sourceColumn.items[itemIndex];

            if (location.current.dropTargets.length === 1) {
              const [destinationColumnRecord] = location.current.dropTargets;
              const destinationId = destinationColumnRecord.data.columnId;
              if (typeof destinationId !== "string") {
                throw new Error("Invalid destination column ID");
              }

              const destinationColumn = boardData.columnMap[destinationId];
              if (!destinationColumn) {
                throw new Error("Destination column not found");
              }

              if (sourceColumn === destinationColumn) {
                const updated = reorderWithEdge({
                  list: sourceColumn.items,
                  startIndex: itemIndex,
                  indexOfTarget: sourceColumn.items.length - 1,
                  closestEdgeOfTarget: null,
                  axis: "vertical",
                });
                const updatedMap = {
                  ...boardData.columnMap,
                  [sourceColumn.columnId]: {
                    ...sourceColumn,
                    items: updated,
                  },
                };
                setBoardData({ ...boardData, columnMap: updatedMap });
                console.log("moving card to end position in same column", {
                  startIndex: itemIndex,
                  destinationIndex: updated.findIndex(
                    (i) => i.itemId === itemId
                  ),
                  edge: null,
                });
                return;
              }

              const updatedMap = {
                ...boardData.columnMap,
                [sourceColumn.columnId]: {
                  ...sourceColumn,
                  items: sourceColumn.items.filter((i) => i.itemId !== itemId),
                },
                [destinationColumn.columnId]: {
                  ...destinationColumn,
                  items: [...destinationColumn.items, item],
                },
              };

              setBoardData({ ...boardData, columnMap: updatedMap });
              console.log("moving card to end position of another column", {
                startIndex: itemIndex,
                destinationIndex: updatedMap[
                  destinationColumn.columnId
                ].items.findIndex((i) => i.itemId === itemId),
                edge: null,
              });
              return;
            }

            if (location.current.dropTargets.length === 2) {
              const [destinationCardRecord, destinationColumnRecord] =
                location.current.dropTargets;
              const destinationColumnId = destinationColumnRecord.data.columnId;
              if (typeof destinationColumnId !== "string") {
                throw new Error("Invalid destination column ID");
              }

              const destinationColumn =
                boardData.columnMap[destinationColumnId];

              const indexOfTarget = destinationColumn.items.findIndex(
                (item) => item.itemId === destinationCardRecord.data.itemId
              );
              const closestEdgeOfTarget: Edge | null = extractClosestEdge(
                destinationCardRecord.data
              );

              if (sourceColumn === destinationColumn) {
                const updated = reorderWithEdge({
                  list: sourceColumn.items,
                  startIndex: itemIndex,
                  indexOfTarget,
                  closestEdgeOfTarget,
                  axis: "vertical",
                });
                const updatedSourceColumn: ColumnType = {
                  ...sourceColumn,
                  items: updated,
                };
                const updatedMap: ColumnMap = {
                  ...boardData.columnMap,
                  [sourceColumn.columnId]: updatedSourceColumn,
                };
                console.log("dropping relative to card in the same column", {
                  startIndex: itemIndex,
                  destinationIndex: updated.findIndex(
                    (i) => i.itemId === itemId
                  ),
                  closestEdgeOfTarget,
                });
                setBoardData({ ...boardData, columnMap: updatedMap });
                return;
              }

              const updatedSourceColumn: ColumnType = {
                ...sourceColumn,
                items: sourceColumn.items.filter((i) => i !== item),
              };
              const updated: Item[] = Array.from(destinationColumn.items);
              const destinationIndex =
                closestEdgeOfTarget === "bottom"
                  ? indexOfTarget + 1
                  : indexOfTarget;
              updated.splice(destinationIndex, 0, item);

              const updatedDestinationColumn: ColumnType = {
                ...destinationColumn,
                items: updated,
              };
              const updatedMap: ColumnMap = {
                ...boardData.columnMap,
                [sourceColumn.columnId]: updatedSourceColumn,
                [destinationColumn.columnId]: updatedDestinationColumn,
              };
              console.log("dropping on a card in different column", {
                sourceColumn: sourceColumn.columnId,
                destinationColumn: destinationColumn.columnId,
                startIndex: itemIndex,
                destinationIndex,
                closestEdgeOfTarget,
              });
              setBoardData({ ...boardData, columnMap: updatedMap });
            }
          }
        },
      })
    );
  }, [boardData, customAutoScrollEnabled]);

  return (
    <div>
      <Board ref={boardRef}>
        {boardData.orderedColumnIds.map((columnId) => {
          return (
            <Column column={boardData.columnMap[columnId]} key={columnId} />
          );
        })}
      </Board>
    </div>
  );
}
