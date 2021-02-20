import Table from './components/Table';
import Form from './components/Form';
import './App.css';
import { TableProvider } from './hooks/useTable';
import { config } from './mocks/config';
import { mockData } from './mocks/mockData';

function App() {
  return (
    <div className="App">
      <TableProvider config={config} data={mockData}>
        <Table />
        <Form />
      </TableProvider>
    </div>
  );
}

export default App;
