import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { List } from 'react-virtualized';
import './App.css'; 

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

const list = Array(rowCount).fill().map((val, idx) => {
  const randomImageId = Math.floor(Math.random() * 1000); 
  return {
    id: idx,
    name: 'John Doe',
    image: `https://picsum.photos/40/40?image=${randomImageId}`, 
    text: loremIpsum({
      count: 1,
      units: 'sentences',
      sentenceLowerBound: 4,
      sentenceUpperBound: 8
    })
  };
});

const renderRow = ({ index, key, style }) => (
  <div key={key} style={style} className="row">
    <div className="image">
      <img src={list[index].image} alt="" />
    </div>
    <div className="content">
      <div>{list[index].name}</div>
      <div>{list[index].text}</div>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <div className="list">
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={renderRow}
        rowCount={list.length}
        overscanRowCount={3}
      />
    </div>
  </div>
);

export default App;
