import React from 'react';
import { name, title } from '../../components/data'


function Home(props) {
    return (
        <div>
            {name}<br />{title}
        </div>
    );
}

export default Home;