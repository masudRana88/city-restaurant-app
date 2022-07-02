import React from 'react';
import FoodsContainer from './FoodsContainer';
import HomeContainer from './HomeContainer';

const MainContainer = () => {
    return (
        <div className=''>
            <HomeContainer/>
            <FoodsContainer/>
        </div>
    );
};

export default MainContainer;