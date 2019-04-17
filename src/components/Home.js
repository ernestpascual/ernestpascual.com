import React from 'react';
import styled from 'tachyons-components'
import {Link} from "react-router-dom";

const Wrapper = styled('div')`
pl4 pt4 fl w-100
`

const Submit = styled('button')`
pill b--transparent bg-dark-purple washed-purple
`

const Home= (props) => (
        <Wrapper>
                <h1> Hello! </h1>
                <h4> This site is underconstruction. </h4>
                <Link to="/resume" ><Submit >View Resume</ Submit> </Link>
        </Wrapper>
);


export default Home;
