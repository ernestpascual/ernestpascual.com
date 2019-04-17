import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
fl w-100
`
const ExperienceWrapper = styled('div')`fl w-100 pt2`
const Header = styled('div')`f3 fw7 helvetica `
const Title = styled('div')`f4 fw5 helvetica fl w-50`
const Description = styled('div')`f4 fw1 helvetica fl w-50`
const Years = styled('div')`f5 fw1 helevetica pb1`
const Details = styled('div')`f5 fw1 helvetica fl w-40`

const Resume = (props) => (
        <Wrapper>
            <Header>Experience </Header> 
            <ExperienceWrapper>
                <Title>SPOTx</Title>
                <Description>Co-Founder, Lead Software Engineer</Description>
                <ExperienceWrapper>
                    <Years>Present</Years>
                    <Details>A medical solution using blockchain and AI.</Details>
                </ExperienceWrapper>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>BBDO Guerrero</Title>
                <Description>Junior Developer</Description>
                <ExperienceWrapper>
                    <Years>January 2019 - Present</Years>
                    <Details>Develop different solutions for the Agencies' campaigns using full stack web development, chatbot development, IOT Development and AI integration for brands such as Beep, SPAM, M&Ms, Fakeblok, Department of Tourism and many more.</Details>
                </ExperienceWrapper>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>BBDO Guerrero</Title>
                <Description>Digital Trainee</Description>
                <ExperienceWrapper>
                    <Years>September 2018 - December 2018</Years>
                    <Details>Assist in developing solutions for the Agencies' Brand campaigns using full stack web development, chatbot development with AI integration, IOT Device Development for brands such as Beep, SPAM, M&Ms, and Fakeblok.</Details>
                </ExperienceWrapper>
            </ExperienceWrapper> 
        </Wrapper>
);

export default Resume;
