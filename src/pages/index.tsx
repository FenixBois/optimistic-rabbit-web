import type { NextPage } from 'next';
import { Switch } from '../components/UI/Switch';

const Home: NextPage = () => {
    return (
        <div>
            <h1>AHoooj</h1>
            <div>
                <Switch />
            </div>
        </div>
    );
};

export default Home;
