import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
fl w-100
`
const ExperienceWrapper = styled('div')`fl w-100 pt3`
const ExperienceWrapperLast = styled('div')`fl w-100 pb5 pt3`
const Header = styled('div')`f3 fw7 helvetica pt3 `
const Title = styled('div')`f4 fw5 helvetica fl w-50`
const Description = styled('div')`f4 fw5 helvetica fl w-40`
const Years = styled('div')`f5 fw1 helevetica pb1`
const Details = styled('div')`f5 fw3 helvetica fl w-90` 

const Resume = (props) => (
        <Wrapper>
            <Header>Certifications </Header> 
            <ExperienceWrapper>
                <Title>September 18, 2017</Title>
                <Description>US Department of Defense - Identifying and Safeguarding Personally Identifiable Information (PII) </Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>September 24, 2017</Title>
                <Description>US Center for Development of Security Excellence - Cybersecurity Awareness Certified. </Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>September 25, 2017</Title>
                <Description>Center for Development of Security Excellence - Insider Threat Awareness Certified. </Description>
            </ExperienceWrapper> 
            <ExperienceWrapperLast>
                <Title>May 2017</Title>
                <Description>SAP Business One Certified. </Description>
            </ExperienceWrapperLast> 
 
 
        </Wrapper>
);

export default Resume;
