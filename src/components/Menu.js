import React from 'react';
import styled from 'tachyons-components'
import NavBar from './Navbar'


const Wrapper = styled('div')`
fl w-100 
`

const Menus = styled('div')`
f1 black helvetica ml7 pl7 mt7 pt5 tracked
`


const Home= (props) => (
        <Wrapper>
                <NavBar/>
                <Menus> UNDER CONSTRUCTION</Menus>
        </Wrapper>
);


export default Home;
