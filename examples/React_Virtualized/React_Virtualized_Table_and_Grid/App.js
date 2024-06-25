import React, { useEffect, useState } from "react";
import { Column, Table, AutoSizer } from "react-virtualized";
import "./styles.css";
import "react-virtualized/styles.css";

function generateData() {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({ number: i, name: `number${i}` });
  }
  return data;
}

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(generateData());
  }, []);

  return (
    <div className="App">
      <h1>Table Example</h1>
      <div style={{ height: "400px", width: "90%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              gridStyle={{ outline: "none" }}
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={70}
              rowCount={rowData.length}
              rowGetter={({ index }) => rowData[index]}
            >
              <Column width={200} label="Number" dataKey="number" />
              <Column width={200} label="Name" dataKey="name" />
            </Table>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
