import Table from './components/Table';
import './App.css';
import { TableProvider } from './hooks/useTable';
import { config } from './mocks/config';
import { mockData } from './mocks/mockData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableProvider config={config} data={mockData}>
          <Table />
        </TableProvider>
      </header>
    </div>
  );
}

export default App;
