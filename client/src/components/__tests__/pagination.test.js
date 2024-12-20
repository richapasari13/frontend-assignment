import { render, screen, cleanup } from '@testing-library/react';
import Pagination from '../Pagination/index.jsx';

afterEach(cleanup);

const handlePageNumber = jest.fn();

test('should render pagination buttons', () => {
    render(<Pagination currPage={1} totalPages={5} handlePageNumber={handlePageNumber} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(7); // 5 page buttons + 1 previous button + 1 next button
});

test('should disable previous button on first page', () => {
    render(<Pagination currPage={0} totalPages={5} handlePageNumber={handlePageNumber} />);

    const prevButton = screen.getByLabelText('Previous Page');
    expect(prevButton).toBeDisabled();
});

test('should highlight the current page button', () => {
    render(<Pagination currPage={2} totalPages={5} handlePageNumber={handlePageNumber} />);

    const activeButton = screen.getByText('2');
    expect(activeButton).toHaveClass('active');
});
