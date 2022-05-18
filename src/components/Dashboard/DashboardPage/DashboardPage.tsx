import { PageTitle } from 'components/Layout';
import { RecipeList } from 'components/Recipes';

import { SearchBarForm } from '../SearchBarForm';

export const DashboardPage = () => {
    return (
        <>
            <PageTitle css={{ marginBottom: 20 }}>Cookbook</PageTitle>
            <SearchBarForm />
            <RecipeList />
        </>
    );
};
