import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
w-100 fixed h-100

`
const Sphere = styled('img')`
w-100 mt6 pt5 mt0-l pt3-l

`

const NavBar = styled('div')`
f7 f5-m f3-l fr pr4 pt4 pr5-m pt5-m pt5-l pr5-l
`

const NavBarMenu = styled('a')`
pl4

`

const AboutMe = styled('div')`
f7 f5-m f3-l
`

const AboutMeContainer = styled('div')`
absolute pt7 mt4 pl5 pl6-m ml6-m mt6-m pl7-l mt6-l
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

const DumplingContainerC = styled('div')`
absolute w-100 pt4 mt2 nl3
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
{/*
                <DumplingContainerC className="dumplingB">
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                </DumplingContainerC>
*/}
                <NavBar>
                        <NavBarMenu className="text-color"  href="http://bit.ly/eepnov19">+ WORK</NavBarMenu>
                        <NavBarMenu className="text-color"  href="https://www.linkedin.com/in/ernestpascual/">+ CONNECT</NavBarMenu>
                        <NavBarMenu className="text-color"  href="https://github.com/ernestpascual/">+ GITHUB</NavBarMenu>
                </NavBar>
                <AboutMeContainer>
                <AboutMe className="text-color-me">HI, I'M ERNEST. </AboutMe>
                <AboutMe className="text-color-me">I DO THINGS. </AboutMe>
                <AboutMe className="text-color-me">LIKE TECHIES AND WEBBIES. </AboutMe>
                <AboutMe className="text-color-me">I DEVELOP BLOCKCHAIN APPS SOMETIMES. </AboutMe>
                <AboutMe className="text-color-me">I LOVE BREAD AND DUMPLINGS. </AboutMe>
                </AboutMeContainer>
                <Sphere src="images/sphere.png" alt="sphere"  className="backward"/>
        </Wrapper>
);


export default Home;
