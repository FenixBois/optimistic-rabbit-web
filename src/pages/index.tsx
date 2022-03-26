import type { NextPage } from 'next';
import { Text } from '@nextui-org/react';
import { DashboardSearchBarForm } from '../components/Dashboard';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col item-center  justify-center">
            <Text
                h1
                size={100}
                css={{
                    textGradient: '45deg, $purple500 -20%, $pink500 100%',
                }}
                weight="bold"
            >
                Cookbook hehe
            </Text>

            <DashboardSearchBarForm/>
        </div>
    );
};

export default Home;
