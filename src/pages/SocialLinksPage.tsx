// SocialLinksPage.tsx
import React from "react";
import styled from "styled-components";
import { TwitterIcon } from "../icons/Icons";
import { LinkedinIcon } from "../icons/Icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #000; /* Black background color */
  color: #fff; /* White text color */
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff; /* White color for the title */
`;

const SocialLinksContainer = styled.div`
  margin-top: 30px;

  > svg {

  }
`;

const SocialLink = styled.a`
  font-size: 1.2rem;
  color: crimson; /* Red color for the social links */
  text-decoration: none;
  margin: 10px;
  transition: color 0.3s;

  &:hover {
    color: #fff; /* White on hover */
  }
`;

const SocialLinksPage: React.FC = () => {
  return (
    <Container>
      <Title>Connect with Me</Title>
      <SocialLinksContainer>
        <SocialLink href="https://twitter.com/shinkuwrld" target="_blank">
          <TwitterIcon />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/davidalanmcmanus/"
          target="_blank"
        >
          <LinkedinIcon />
        </SocialLink>
        {/* Add more social links as needed */}
      </SocialLinksContainer>
    </Container>
  );
};

export default SocialLinksPage;
