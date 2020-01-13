import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AgentToolsTableBuilder,
  GetAtBaseTable,
  TableWrapperComponent
} from "jlev-react-table-wrapper";
import {generateBasicTableData} from "./tests/data-generators/data.generator";

function App() {
  let builder = new AgentToolsTableBuilder();
  let tableModel = GetAtBaseTable(generateBasicTableData(10));

  return (
    <div className="App">
        <TableWrapperComponent tableModel={tableModel} tableBuilder={builder}/>
    </div>
  );
}

export default App;
