import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HotTable from 'react-handsontable'
import HotTable1 from 'handsontable-pro'
class App extends Component {
  render() {
    return (
      <HotTable
        data={[['some', 'test', 'asdf', 'werer', 'adsfgeg'], ['handsontable', 'data', 'afsferg', 'hrthrt', 'ryty']]}
        contextMenu={true}
        colHeaders={true}
        dropdownMenu={true}
        hiddenRows ={{
          // copyPasteEnabled: true,
          // indicators: true,
          rows: [1]
        }}
        nestedHeaders={[
          ['A', {label: 'B', colspan: 3}, 'C'],
          ['D', {label: 'E', colspan: 2}, {label: 'F', colspan: 2}],
          [{label: 'I', colspan: 2}, {label: 'J', colspan: 2}, 'M'],
          ['N', 'O', 'P', 'Q', 'R']
        ]}
      />
    );
  }
}

export default App;
