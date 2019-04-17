import React from 'react';
import styled from 'tachyons-components'

const Wrapper = styled('div')`
fl w-100
`
const ExperienceWrapper = styled('div')`fl w-100 pt2`
const Header = styled('div')`f3 fw7 helvetica pt3 `
const Title = styled('div')`f4 fw5 helvetica`
const Description = styled('div')`f5 fw1 helvetica fl w-90`

const Resume = (props) => (
        <Wrapper>
            <Header>Competencies</Header> 
            <ExperienceWrapper>
                <Title>Blockchain Development</Title>
                <Description>Develop smart contracts and decentralized applications using IOST and Ethereum technologies. One of the pioneer developers of IOST in the Philippines.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Full Stack Web Development</Title>
                <Description>Develop application using Javascript frameworks (React, Vue, NodeJS), Java, PHP, Python(Flask, Sanic), CSS, HTML5 as part of the course curriculum and from personal studies. </Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>AI and Machine Learning</Title>
                <Description>Developed NLP, image and music related machine learning passion projects and a prototype Filipino-English Sentiment API for social media posts using Tensorflow.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Chatbot Development</Title>
                <Description>Develop messenger chatbots projects for brands such as M&Ms (Philippines and Thailand) and Fakeblok using Chatfuel, Express back-end and Dialogflow for advanced NLP implementation. Able to integrate other AI technologies such as image/facial emotion detection, style transfer, audio recognition and processing, forecasting and prediction. </Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>UI and UX Development</Title>
                <Description>Design websites and wireframes through Adobe Photoshop and Adobe XD. Used CSS Frameworks such as Tailwind CSS, Materialize CSS, Material UI, Bootstrap, Tachyons. Apply user experience design concepts and accesibility in digital solutions.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Mobile Development</Title>
                <Description>Competent in developing mobile applications, integrating them with web applications using Android OS.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Database Management and Design</Title>
                <Description>Able to use both SQL (MySQL, SQLite, and Microsoft SQL Server) and NoSQL (Firebase Firestore and MongoDB) type databases for web and mobile applications. </Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Git</Title>
                <Description>Able to use git repositories for collaboration with other developers.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Project Management</Title>
                <Description>Frequent leader in group works at school and in developing applications for projects using agile method. Knowledgeable of Project Managment concepts and practices.</Description>
            </ExperienceWrapper> 
            <ExperienceWrapper>
                <Title>Systems Analysis and Design</Title>
                <Description>Analyze problem cases and then design and develop digital solutions to solve them.</Description>
            </ExperienceWrapper> 
           
        </Wrapper>
);

export default Resume;
