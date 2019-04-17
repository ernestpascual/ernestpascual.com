import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
fl w-100 
`
const ExperienceWrapper = styled('div')`fl w-100 pt2`
const Header = styled('div')`f3 fw7 helvetica pt3 `
const Title = styled('div')`f4 fw5 helvetica fl w-50`
const Description = styled('div')`f4 fw5 helvetica fl w-50`
const Details = styled('div')`f5 fw3 helvetica fl w-90` 

const Resume = (props) => (
        <Wrapper>
            <Header>Competitions and Seminars </Header> 
            <ExperienceWrapper>
                <Title>April 2019</Title>
                <Description>Decentralized Innovations Startup Hackathon 2019</Description>
                <ExperienceWrapper>  
                <Details>Won 2nd Prize and Token News Choice developing a decentralized and incentivized educational platform using IOST blockchain technology. I developed the business aspect, front-end, back-end and blockchain of the prototype application in 32 hours.</Details>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>November 2018</Title>
                <Description>Decentralized Innovations Startup Hackathon 2018</Description>
                <ExperienceWrapper>  
                <Details>Got the Rakuten Choice award for developing a decentralized and incentivized home program solution for Occupational Therapists, Physical Therapists and Speech pathologists using Ethereum blockchain technology.  I developed the business aspect, front-end, back-end and blockchain of the prototype application in 32 hours. </Details>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>July 2017</Title>
                <Description>Accenture Program to the Future </Description>
                <ExperienceWrapper>  
                <Details>Competed in the Semi-final round with our project ALVI, an app that helps monitor your mental health by analyzing your social media activity to track your mood and behavioral patterns using NLP.  I developed a Filipino-English Sentiment Analysis Algorithm through Machine Learning using Tensorflow. </Details>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>October 2017</Title>
                <Description>ISACA Manila 4th Academe Summit </Description>
                <ExperienceWrapper>  
                <Details>A seminar which deals with cybersecurity. Attendees are oriented with different topics of cybersecurity.</Details>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>February 2017</Title>
                <Description>Practicum Preparation Seminar Workshop</Description>
                <ExperienceWrapper>  
                <Details> A module designed to prepare students for professional life including how to go about their on-the-job training requirements. They are oriented regarding effective job search strategies and how one should handle himself/herself in the corporate setting. </Details>
                </ExperienceWrapper> 
            </ExperienceWrapper> 
        </Wrapper>
);

export default Resume;
