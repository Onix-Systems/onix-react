function render() {
  return (
    <MultiGrid
      cellRenderer={cellRenderer}
      columnWidth={75}
      columnCount={50}
      fixedColumnCount={2}
      fixedRowCount={1}
      height={300}
      rowHeight={40}
      rowCount={100}
      width={width}
    />
  );
}
