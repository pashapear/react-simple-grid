import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../index';
import { TableProvider } from '../../../hooks/useTable';
import { config } from '../../../mocks/config';
import { mockData } from '../../../mocks/mockData';

describe('Table', () => {
    const { getByText } = render(
        <TableProvider config={config} data={mockData}>
            <Table />
        </TableProvider>
    );

    it('should accept configuration', () => {
        expect(getByText(config.fields[0][1])).toBeInTheDocument();
    });
});