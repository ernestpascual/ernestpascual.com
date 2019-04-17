import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
fl w-100
`
const ExperienceWrapper = styled('div')`fl w-100 pt2`
const Header = styled('div')`f3 fw7 helvetica pt3 `
const Title = styled('div')`f4 fw5 helvetica fl w-50`
const Description = styled('div')`f4 fw1 helvetica fl w-50`
// const Years = styled('div')`f5 fw1 helevetica pb1`
// const Details = styled('div')`f5 fw1 helvetica fl w-40`

const ResumeEduc = (props) => (
        <Wrapper>
            <Header>Education </Header> 
            <ExperienceWrapper>
                <Title>2015-2019</Title>
                <ExperienceWrapper>
                    <Description>Bachelor of Science in Information Systems</Description>
                    <Description>Recipient of First Honors award in 1st Term, 2015</Description>
                    <Description>Recipient of Second Honors award in 2nd Term</Description>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
        </Wrapper>

);

export default ResumeEduc;
