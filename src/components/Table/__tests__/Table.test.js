import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Table from '../index'

describe('Table', () => {
    const { getByText } = render(<Table />)
    it('should render', () => {
        expect(getByText('The table header')).toBeInTheDocument()
    })
    it('should accept configuration', () => {

    })
})