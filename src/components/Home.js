import React from 'react';
import styled from 'tachyons-components'

/*
const Wrapper = styled('div')`
fl w-100 w-100-l w-100-m h-100  fixed

`
const Sphere = styled('img')`
w-100-m w-100-l ml5-l nt1-l pt7-m
`

const NavBar = styled('div')`
mt6-l nr6-l mt6-m fr items-end w-40-l w-40-m 
`

const NavBarMenu = styled('a')`
w-10  pl4-l f3-l f4-m pl3-m 
`

const AboutMe = styled('div')`
pb1-l f3-l f4-m 
`

const AboutMeContainer = styled('div')`
absolute flex-wrap fl-25  mt7-l pt6-l ml6-l pl7-l mt7-m pt7-m ml6-m pl5-m 
`

*/


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
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                </DumplingContainerA>

                <DumplingContainerB className="dumplingA">
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
                <Dumpling >DUMPLING</Dumpling>
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
