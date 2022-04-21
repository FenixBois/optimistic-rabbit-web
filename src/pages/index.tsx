import type { NextPage } from 'next';
import { PageTitle } from 'components/Layout';
import { SearchBarForm } from 'components/Dashboard';

const Home: NextPage = () => {
    return (
        <div>
            <PageTitle>Cookbook</PageTitle>
            <SearchBarForm></SearchBarForm>
        </div>
    );
};

export default Home;
