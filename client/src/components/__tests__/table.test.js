import { render, screen, cleanup } from '@testing-library/react';
import Table from '../Table/index.jsx';

afterEach(cleanup);

const mockData = [
    { "s.no": 1, "percentage.funded": 100, "amt.pledged": 5000 },
    { "s.no": 2, "percentage.funded": 200, "amt.pledged": 10000 },
];

test('should display table data', () => {
    render(<Table dataSource={mockData} isLoading={false} isError={false} />);

    mockData.forEach(data => {
        expect(screen.getByText(data["s.no"])).toBeInTheDocument();
        expect(screen.getByText(data["percentage.funded"])).toBeInTheDocument();
        expect(screen.getByText(data["amt.pledged"])).toBeInTheDocument();
    });
});

test('should render table headers', () => {
    render(<Table dataSource={[]} isLoading={false} isError={false} />);

    expect(screen.getByText('S.No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage funded')).toBeInTheDocument();
    expect(screen.getByText('Amount pledged')).toBeInTheDocument();
});