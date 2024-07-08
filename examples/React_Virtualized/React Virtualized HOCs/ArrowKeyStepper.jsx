ReactDOM.render(
  <ArrowKeyStepper columnCount={columnCount} rowCount={rowCount}>
    {({onSectionRendered, scrollToColumn, scrollToRow}) => (
      <Grid
        columnCount={columnCount}
        onSectionRendered={onSectionRendered}
        rowCount={rowCount}
        scrollToColumn={scrollToColumn}
        scrollToRow={scrollToRow}
        {...otherGridProps}
      />
    )}
  </ArrowKeyStepper>,
  document.getElementById('example'),
);
