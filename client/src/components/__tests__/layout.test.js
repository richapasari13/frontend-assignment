import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react';
import Layout from '../Layout/index.jsx';
import useFetchData from '../Layout/hooks/useFetchData.js';

jest.mock('../Layout/hooks/useFetchData.js')

afterEach(cleanup);

test('should render layout component', () => { 
    useFetchData.mockReturnValue({ tableData: [], isLoading: true, isError: false });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Layout />);
    });
    const layoutElement = screen.getByTestId('layout-wrapper');
    expect(layoutElement).toBeInTheDocument();   
});

test('should display loading state', () => {
    useFetchData.mockReturnValue({ tableData: [], isLoading: true, isError: false });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Layout />);
    });

    const loadingElement = screen.getAllByTestId('loading');
    loadingElement.forEach((element) => {
        expect(element).toBeInTheDocument();
    });
});

test('should display error state', () => { 
    useFetchData.mockReturnValue({ tableData: [], isLoading: false, isError: true });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Layout />);
    });

    const errorElement = screen.getByText('Failed to fetch data!');
    expect(errorElement).toBeInTheDocument();
})