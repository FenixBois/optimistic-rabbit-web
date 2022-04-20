import type { NextPage } from 'next';
import { PageTitle } from 'components/Layout';
import { DashboardSearchBarForm } from 'components/Dashboard';

const Home: NextPage = () => {
    return (
        <div>
            <PageTitle>Cookbook</PageTitle>
            <DashboardSearchBarForm></DashboardSearchBarForm>
        </div>
    );
};

export default Home;
