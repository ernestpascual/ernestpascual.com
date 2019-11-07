import React from 'react';
import styled from 'tachyons-components'
import Particles from 'react-particles-js';
import particlesconfig from './particles.json'

const Wrapper = styled('div')`
w-100 fixed h-100

`
/*
const Sphere = styled('img')`
w-100 mt6 pt5 mt0-l pt3-l

`
*/

const NavBar = styled('div')`
f7 f5-m f3-l pt5 pr5-m pt5-m pt5-l pr5-l w-100 flex
`

const NavBarMenu = styled('a')`
tc w-25

`

const AboutMe = styled('div')`
f5 f2-m f1-l
`

const AboutMeContainer = styled('div')`
absolute pt6 mt5 pl5 mt7-m ml5-l mt5-l 
`

const Dumpling = styled('div')`
w-100
`

const DumplingB = styled('div')`
w-100 strike
`

const DumplingContainerA = styled('div')`
absolute nl0
`

const DumplingContainerB = styled('div')`
absolute w-100 tr pt7 mt7 ml3
`

const Home= (props) => (
        <Wrapper className="screen-lock">
                <DumplingContainerA className="dumplingA">
                <Dumpling >DUMPLING</Dumpling>
                <DumplingB >DUMPLING</DumplingB>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                </DumplingContainerA>

                <DumplingContainerB className="dumplingA">
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <DumplingB >DUMPLING</DumplingB>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <DumplingB >DUMPLING</DumplingB>
                <DumplingB >DUMPLING</DumplingB>
                </DumplingContainerB>
                <NavBar class="navbar ">
                        <NavBarMenu className="text-color animated fadeIn delay-2s"  target="_blank" href="http://bit.ly/eepnov19">+ WORK</NavBarMenu>
                        <NavBarMenu className="text-color animated fadeIn delay-2s"  target="_blank" href="https://www.linkedin.com/in/ernestpascual/">+ CONNECT</NavBarMenu>
                        <NavBarMenu className="text-color animated fadeIn delay-2s"  target="_blank" href="https://github.com/ernestpascual/">+ GITHUB</NavBarMenu>
                        <NavBarMenu className="text-color animated fadeIn delay-2s"  target="_blank" href="https://medium.com/@ernestpascual">+ MEDIUM</NavBarMenu>
                </NavBar>
                <AboutMeContainer className="about-me ">
                <AboutMe className="text-color-me animated fadeIn slow delay-1s">HI, I'M <u>ERNEST</u>.</AboutMe>
                <AboutMe className="text-color-me animated fadeIn slow delay-1s">I DO <u>WEBSITES</u> AND</AboutMe>
                <AboutMe className="text-color-me animated fadeIn slow delay-1s">OTHER TECH STUFF. </AboutMe>
                <AboutMe className="text-color-me animated fadeIn slow delay-1s">I DEVELOP <u>BLOCKCHAIN</u> APPS.</AboutMe>
                <AboutMe className="text-color-me animated fadeIn slow delay-1s">I LOVE BREAD AND <u>DUMPLINGS</u>.</AboutMe>
                </AboutMeContainer>
                <Particles params={particlesconfig} className="dandruff animated fadeIn" />
        </Wrapper>  
);


export default Home;
