import type { NextPage } from 'next';
import { PageTitle } from 'components/Layout';
import { SearchBarForm } from 'components/Dashboard';

const Home: NextPage = () => {
    return (
        <>
            <PageTitle css={{ marginBottom: 20 }}>Cookbook</PageTitle>
            <SearchBarForm />
        </>
    );
};

export default Home;
