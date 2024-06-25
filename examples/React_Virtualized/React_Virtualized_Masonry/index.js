import React from "react";
import { render } from "react-dom";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner as createMasonry,
  Masonry,
} from "react-virtualized";
import list from "./data";

const noCacheList = list.map((item) => ({
  title: item.title,
  image: item.image + (item.image ? "?noCache=" + Math.random() : ""),
}));

const keyMapper = (item, index) => item.image || index;

const columnWidth = 200;
const defaultHeight = 250;
const defaultWidth = columnWidth;

const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true,
});

const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth,
  spacer: 10,
};

const cellPositioner = createMasonry(cellPositionerConfig);

class ImageMeasurer extends React.Component {
  state = {
    sizes: {},
  };

  componentDidMount() {
    this.measureImages();
  }

  measureImages = () => {
    const sizes = {};
    let loadedImages = 0;
    const { items, onSizeCalculated } = this.props;

    items.forEach((item, index) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        sizes[index] = {
          width: img.width,
          height: img.height,
        };
        loadedImages += 1;
        if (loadedImages === items.length) {
          this.setState({ sizes }, () => {
            onSizeCalculated(sizes);
          });
        }
      };
      img.onerror = (error) => {
        console.error(
          "Cannot load image",
          img.src,
          "for item",
          item,
          "error",
          error
        );
      };
    });
  };

  render() {
    return this.props.children(this.state.sizes);
  }
}

const MasonryComponent = ({ itemsWithSizes, setRef }) => {
  const cellRenderer = ({ index, key, parent, style }) => {
    const { item, size } = itemsWithSizes[index];
    const height = columnWidth * (size.height / size.width) || defaultHeight;

    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          <div>{item.title}</div>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: height,
                width: columnWidth,
                display: "block",
              }}
            />
          )}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Masonry
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={600}
      width={800}
      keyMapper={keyMapper}
      ref={setRef}
    />
  );
};

class Index extends React.Component {
  state = { images: noCacheList, sizes: {} };

  masonryRef = null;

  shorten = () => {
    cache.clearAll();
    cellPositioner.reset(cellPositionerConfig);
    this.masonryRef.clearCellPositions();
    this.setState({ images: [...this.state.images.slice(1)] });
  };

  setMasonry = (node) => (this.masonryRef = node);

  handleSizeCalculated = (sizes) => {
    const itemsWithSizes = this.state.images.map((item, index) => ({
      item,
      size: sizes[index] || { width: defaultWidth, height: defaultHeight },
    }));
    this.setState({ itemsWithSizes });
  };

  render() {
    return (
      <div>
        <button onClick={this.shorten}>Resize</button>
        <ImageMeasurer
          items={this.state.images}
          onSizeCalculated={this.handleSizeCalculated}
        >
          {(sizes) => (
            <MasonryComponent
              setRef={this.setMasonry}
              itemsWithSizes={this.state.itemsWithSizes || []}
            />
          )}
        </ImageMeasurer>
      </div>
    );
  }
}

render(<Index />, document.getElementById("root"));
