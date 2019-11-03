import React from 'react';
import styled from 'tachyons-components'


const Wrapper = styled('div')`
bg-black fixed h-100  w-10
`


const Menu = styled('a')`
white helvetica f7 
`

/*
const Website = styled('div')`
white helvetica f7 tracked mt6
`
*/
const Website = styled('div')`
white helvetica f7 tracked 
`


const Navbar = (props) => (
        <Wrapper >
             <Website className="rotate temp-push"  > <Menu href="/" className="no-lines"> ERNESTPASCUAL.COM </Menu> </Website>
            {/*  <MenuContainer > <Menu href="/menu" className="no-lines">  MENU </Menu> </MenuContainer>
        */}
        </Wrapper>
);


export default Navbar;
