import React from 'react';
import styled from 'tachyons-components'
import Experience from './Resume-Exp'
import Competencies from './Resume-Comp'
// import Education from './Resume-Educ'
import Competitions from './Resume-Compet'
import Certifications from './Resume-Cert'



const Wrapper = styled('div')`
pl4 pt3 fl w-100
`

const Header = styled('div')`f1 fw5 helvetica `
const HeaderDetails = styled('div')`f3 fw3 helvetica`
const Names = styled('div')`pb3`


const Resume = (props) => (
        <Wrapper>
            <Names>
                <Header> ERNEST EUGENE S. PASCUAL </Header>
                <HeaderDetails>Victoria De Manila, Taft Avenue</HeaderDetails>
                <HeaderDetails>Malate, Manila</HeaderDetails>
                <HeaderDetails>Home: +63 (02)492-3263</HeaderDetails>
                <HeaderDetails>Mobile: +63 9985379566 </HeaderDetails>
                <HeaderDetails>Email: hey@ernestpascual.com </HeaderDetails>
            </Names> 
            <Experience />
            <Competencies />
            <Competitions />
            <Certifications />
        </Wrapper>
);

export default Resume;
