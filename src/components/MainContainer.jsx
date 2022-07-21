import React from 'react';
import FoodsContainer from './FoodsContainer';
import FruitsContainer from './FruitsContainer';
import HomeContainer from './HomeContainer';

const MainContainer = () => {
    return (
        <div className=''>
            <HomeContainer/>
            <FruitsContainer/>
            <FoodsContainer/>
        </div>
    );
};

export default MainContainer;