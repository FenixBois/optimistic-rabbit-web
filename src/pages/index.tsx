import type { NextPage } from 'next';
import { Text } from '@nextui-org/react';

const Home: NextPage = () => {
    return (
        <div className="flex item-center justify-center">
            <Text
                h1
                size={100}
                css={{
                    textGradient: '45deg, $purple500 -20%, $pink500 100%',
                }}
                weight="bold"
            >
                Cookbook
            </Text>
        </div>
    );
};

export default Home;
