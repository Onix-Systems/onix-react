ReactDOM.render(
  <AutoSizer>
    {({height, width}) => (
      <List
        height={height}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={width}
      />
    )}
  </AutoSizer>,
  document.getElementById('example'),
);
