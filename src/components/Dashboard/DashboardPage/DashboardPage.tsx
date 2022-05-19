import { PageTitle } from 'components/Layout';
import { RecipeList } from 'components/Recipes';

import { SearchBarForm } from '../SearchBarForm';

export const DashboardPage = () => {
    return (
        <>
            <PageTitle>Cookbook</PageTitle>
            <SearchBarForm css={{ marginBottom: 30 }} />
            <RecipeList />
        </>
    );
};
