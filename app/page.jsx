"use client"
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { WiStars } from "react-icons/wi";

export default function Home() {
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Secret submitted:", secret);
  };

  return (
    <>
      <StyledHeader>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={50}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%'
          }}
        />
      </StyledHeader>

      <StyledMain>
        <ExplanatoryText>
          This is a secret wizard. Input your secret, we'll do our magic and you'll get a link to share it.
        </ExplanatoryText>
        
        <Form onSubmit={handleSubmit}>
          <StyledTextarea
            rows="6"
            placeholder="Enter your secret message here"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          
          <MagicButton type="submit">
            create magic secret
            <StyledStarsIcon />
          </MagicButton>
        </Form>
      </StyledMain>

      <StyledFooter>
        {/* Footer content goes here */}
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledMain = styled.main`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExplanatoryText = styled.p`
  color: var(--slate);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 20px;
  background: var(--egg);
  color: var(--slate);
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  box-sizing: border-box;
  
  /* Neumorphism inset effect */
  box-shadow: 
    inset 8px 8px 16px rgba(0, 0, 0, 0.1),
    inset -8px -8px 16px rgba(255, 255, 255, 0.7);
  
  &:focus {
    outline: none;
    box-shadow: 
      inset 6px 6px 12px rgba(0, 0, 0, 0.1),
      inset -6px -6px 12px rgba(255, 255, 255, 0.7);
  }
  
  &::placeholder {
    color: var(--slate-light);
    opacity: 0.6;
  }
`;

const MagicButton = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 20px;
  background: var(--egg);
  color: var(--slate);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: lowercase;
  transition: all 0.3s ease;
  
  /* Neumorphism raised effect */
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.7);
  
  &:hover {
    box-shadow: 
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7);
    transform: translateY(2px);
  }
  
  &:active {
    box-shadow: 
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7);
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledStarsIcon = styled(WiStars)`
  font-size: 2rem;
  color: var(--fire);
  animation: sparkle 1.5s ease-in-out infinite;
  
  @keyframes sparkle {
    0%, 100% {
      opacity: 0.7;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const StyledFooter = styled.footer`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
