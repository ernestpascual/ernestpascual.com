import React from 'react';
import styled from 'tachyons-components'
import NavBar from './Navbar'
import Particles from 'react-particles-js'
import ParticlesParams from '../particles.json'

const Wrapper = styled('div')`
fl w-100 

`


const Home= (props) => (
        <Wrapper>
                <NavBar/>
                <Particles params={ParticlesParams} className="particles-size" />
        </Wrapper>
);


export default Home;
