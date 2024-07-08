function render(props) {
  return (
    <ScrollSync>
      {({
        clientHeight,
        clientWidth,
        onScroll,
        scrollHeight,
        scrollLeft,
        scrollTop,
        scrollWidth,
      }) => (
        <div className="Table">
          <div className="LeftColumn">
            <List scrollTop={scrollTop} {...props} />
          </div>
          <div className="RightColumn">
            <Grid onScroll={onScroll} {...props} />
          </div>
        </div>
      )}
    </ScrollSync>
  );
}
