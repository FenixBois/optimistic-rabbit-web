import type {NextPage} from 'next';
import {PageTitle} from 'components/Layout';
import {SearchBarForm} from 'components/Dashboard';
import {PageContainerStyled} from "./index.styles";

const Home: NextPage = () => {
    return (
        <PageContainerStyled>
            <PageTitle>Cookbook</PageTitle>
            <SearchBarForm></SearchBarForm>
        </PageContainerStyled>
    );
};

export default Home;
