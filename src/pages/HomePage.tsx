// Homepage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #000; /* Black background color */
  color: #fff; /* White text color */
  margin: 0 px
`;


const Title = styled.h1`
  font-size: 3rem;
  color: #fff; /* White text color */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #fff; /* White text color */
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #fff; /* White text color */
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: crimson; /* Crimson button color */
  color: #fff; /* White text color for the button */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred; /* Darker crimson on hover */
  }
`;

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetToKnowMeClick = () => {
    // Navigate to the SocialLinksPage
    navigate('/social-links');
  };

  return (
    <Container>
      <Title>Welcome to My Personal Website</Title>
      <Subtitle>Discover, Connect, and Explore</Subtitle>
      <Description>
        Hi, I'm David and I'm passionate about programming. Explore my
        projects, socials, and more!
      </Description>
      <Button onClick={handleGetToKnowMeClick}>Connect With Me!</Button>
    </Container>
  );
};

export default Homepage;
