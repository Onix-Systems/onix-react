ReactDOM.render(
  <WindowScroller>
    {({ height, isScrolling, onChildScroll, scrollTop }) => (
      <List
        autoHeight
        height={height}
        isScrolling={isScrolling}
        onScroll={onChildScroll}
        rowCount={...}
        rowHeight={...}
        rowRenderer={...}
        scrollTop={scrollTop}
        width={...}
      />
    )}
  </WindowScroller>,
  document.getElementById('example')
);
