import type { NextPage } from 'next';
import { PageTitle } from 'components/Layout';
import { DashboardSearchBarForm } from '../components/Dashboard';

const mockData = [
    {
        value: '1',
        title: 'Option 1',
    },
    {
        value: '2',
        title: 'Option 2',
    },
    {
        value: '3',
        title: 'Option 3',
    },
];

const Home: NextPage = () => {
    return (
        <div>
            <PageTitle>Cookbook</PageTitle>
            <DashboardSearchBarForm />
        </div>
    );
};

export default Home;
