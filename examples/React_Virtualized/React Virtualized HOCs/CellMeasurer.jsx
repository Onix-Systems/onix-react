return (
    <CellMeasurer
      cache={cache}
      columnIndex={columnIndex}
      key={key}
      parent={parent}
      rowIndex={rowIndex}
    >
      <div
        style={{
          ...style,
          height: 35,
          whiteSpace: 'nowrap'
        }}
      >
        {content}
      </div>
    </CellMeasurer>
  );
