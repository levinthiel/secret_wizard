"use client"
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { WiStars } from "react-icons/wi";

export default function Home() {
  const [secret, setSecret] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Secret submitted:", secret);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <Container $darkMode={darkMode}>
      <StyledHeader $darkMode={darkMode}>
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

      <StyledMain $darkMode={darkMode}>
        <ExplanatoryText $darkMode={darkMode}>
          This is a secret wizard. Input your secret, we'll do our magic and you'll get a link to share it.
        </ExplanatoryText>
        
        <StepsContainer>
          <StepBox $darkMode={darkMode}>
            <StepNumber>1</StepNumber>
            <StepText $darkMode={darkMode}>write</StepText>
          </StepBox>
          <StepBox $darkMode={darkMode}>
            <StepNumber>2</StepNumber>
            <StepText $darkMode={darkMode}>magic happens</StepText>
          </StepBox>
          <StepBox $darkMode={darkMode}>
            <StepNumber>3</StepNumber>
            <StepText $darkMode={darkMode}>Send the magic secret</StepText>
          </StepBox>
        </StepsContainer>
        
        <Form onSubmit={handleSubmit}>
          <StyledTextarea
            $darkMode={darkMode}
            rows="6"
            placeholder="Enter your secret message here"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          
          <MagicButton $darkMode={darkMode} type="submit">
            create magic secret
            <StyledStarsIcon />
          </MagicButton>
        </Form>
      </StyledMain>

      <StyledFooter $darkMode={darkMode}>
        <FooterContent>
          <FooterLinks>
            <FooterLink $darkMode={darkMode} href="#" target="_blank" rel="noopener noreferrer">
              about
            </FooterLink>
            <Separator $darkMode={darkMode}>•</Separator>
            <FooterLink $darkMode={darkMode} href="https://levinthiel.vercel.app/" target="_blank" rel="noopener noreferrer">
              created by Levin Thiel
            </FooterLink>
          </FooterLinks>
          <DarkModeToggle>
            <ToggleLabel $isDark={darkMode}>dark mode</ToggleLabel>
            <ToggleSwitch onClick={toggleDarkMode} $isDark={darkMode}>
              <ToggleSlider $isDark={darkMode} />
            </ToggleSwitch>
          </DarkModeToggle>
          <Copyright $darkMode={darkMode}>© 2026 Levin Thiel</Copyright>
        </FooterContent>
      </StyledFooter>
    </Container>
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
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  transition: color 0.3s ease;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StepBox = styled.div`
  flex: 1;
  padding: 20px 16px;
  border-radius: 20px;
  background: ${props => props.$darkMode ? 'var(--slate-light)' : 'var(--egg)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  transition: background 0.3s ease;
  
  /* Neumorphism raised effect */
  box-shadow: 
    ${props => props.$darkMode
      ? '6px 6px 12px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.05)'
      : '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.7)'};
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--fire);
  color: var(--egg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  
  /* Neumorphism inset effect */
  box-shadow: 
    inset 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset -2px -2px 4px rgba(255, 255, 255, 0.3);
`;

const StepText = styled.p`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  margin: 0;
  text-transform: lowercase;
  font-weight: 500;
  transition: color 0.3s ease;
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
  background: ${props => props.$darkMode ? 'var(--slate-light)' : 'var(--egg)'};
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 1rem;
  resize: vertical;
  box-sizing: border-box;
  transition: background 0.3s ease, color 0.3s ease;
  
  /* Neumorphism inset effect */
  box-shadow: 
    ${props => props.$darkMode
      ? 'inset 8px 8px 16px rgba(0, 0, 0, 0.3), inset -8px -8px 16px rgba(255, 255, 255, 0.05)'
      : 'inset 8px 8px 16px rgba(0, 0, 0, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.7)'};
  
  &:focus {
    outline: none;
    box-shadow: 
      ${props => props.$darkMode
        ? 'inset 6px 6px 12px rgba(0, 0, 0, 0.3), inset -6px -6px 12px rgba(255, 255, 255, 0.05)'
        : 'inset 6px 6px 12px rgba(0, 0, 0, 0.1), inset -6px -6px 12px rgba(255, 255, 255, 0.7)'};
  }
  
  &::placeholder {
    color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate-light)'};
    opacity: 0.6;
  }
`;

const MagicButton = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 20px;
  background: ${props => props.$darkMode ? 'var(--slate-light)' : 'var(--egg)'};
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
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
    ${props => props.$darkMode
      ? '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)'
      : '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)'};
  
  &:hover {
    box-shadow: 
      ${props => props.$darkMode
        ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.05)'
        : 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.7)'};
    transform: translateY(2px);
  }
  
  &:active {
    box-shadow: 
      ${props => props.$darkMode
        ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.05)'
        : 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.7)'};
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
  background: ${props => props.$darkMode ? 'var(--slate)' : 'transparent'};
  transition: background 0.3s ease;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Copyright = styled.p`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.8;
  transition: color 0.3s ease;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const FooterLink = styled.a`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--fire);
  }
`;

const Separator = styled.span`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  opacity: 0.5;
  transition: color 0.3s ease;
`;

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.$darkMode ? 'var(--slate)' : 'var(--egg)'};
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const DarkModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const ToggleLabel = styled.span`
  color: ${props => props.$isDark ? 'var(--egg)' : 'var(--slate)'};
  text-transform: lowercase;
  opacity: 0.8;
`;

const ToggleSwitch = styled.button`
  width: 50px;
  height: 26px;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  position: relative;
  background: ${props => props.$isDark ? 'var(--slate-light)' : 'var(--egg)'};
  transition: background 0.3s ease;
  padding: 0;
  
  /* Neumorphism effect */
  box-shadow: 
    ${props => props.$isDark 
      ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.1)'
      : '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)'};
  
  &:hover {
    opacity: 0.9;
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 3px;
  left: ${props => props.$isDark ? '27px' : '3px'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.$isDark ? 'var(--fire)' : 'var(--slate)'};
  transition: left 0.3s ease, background 0.3s ease;
  
  /* Neumorphism effect */
  box-shadow: 
    ${props => props.$isDark
      ? '2px 2px 4px rgba(0, 0, 0, 0.3)'
      : '2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.8)'};
`;
