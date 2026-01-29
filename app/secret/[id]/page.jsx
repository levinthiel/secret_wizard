"use client"
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

export default function SecretPage() {
  const params = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const secretId = params.id || "1"; // Use placeholder ID 1 for now

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  // Placeholder secret content
  const secretContent = "This is your secret message. The actual secret will be loaded from the API later.";

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
        <SecretTitle $darkMode={darkMode}>
          here is your secret
        </SecretTitle>
        
        <SecretBox $darkMode={darkMode}>
          <SecretContent $darkMode={darkMode}>
            {secretContent}
          </SecretContent>
        </SecretBox>

        <NewSecretLink href="/" $darkMode={darkMode}>
          make a new secret
        </NewSecretLink>
      </StyledMain>

      <StyledFooter $darkMode={darkMode}>
        <FooterContent>
          <DarkModeToggle>
            <ToggleLabel $isDark={darkMode}>dark mode</ToggleLabel>
            <ToggleSwitch onClick={toggleDarkMode} $isDark={darkMode}>
              <ToggleSlider $isDark={darkMode}>
                {darkMode ? (
                  <BsFillMoonStarsFill size={14} />
                ) : (
                  <MdOutlineWbSunny size={14} />
                )}
              </ToggleSlider>
            </ToggleSwitch>
          </DarkModeToggle>
          <Copyright $darkMode={darkMode}>© 2026 Levin Thiel</Copyright>
        </FooterContent>
      </StyledFooter>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.$darkMode ? 'var(--slate)' : 'var(--egg)'};
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const StyledHeader = styled.header`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    padding: 16px;
  }
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
  
  @media (max-width: 480px) {
    padding: 16px;
    gap: 20px;
  }
`;

const SecretTitle = styled.h1`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  text-transform: lowercase;
  transition: color 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const SecretBox = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 20px;
  background: ${props => props.$darkMode ? 'var(--slate-light)' : 'var(--egg)'};
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  /* Neumorphism raised effect */
  box-shadow: 
    ${props => props.$darkMode
      ? '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)'
      : '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)'};
  
  @media (max-width: 480px) {
    padding: 24px 20px;
    min-height: 150px;
    border-radius: 16px;
  }
`;

const SecretContent = styled.p`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  word-wrap: break-word;
  white-space: pre-wrap;
  transition: color 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const NewSecretLink = styled(Link)`
  width: 100%;    
  padding: 14px 18px;
  border-radius: 20px;
  text-decoration: none;
  text-transform: lowercase;
  text-align: center;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background: ${props => props.$darkMode ? 'var(--slate-light)' : 'var(--egg)'};
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
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
  
  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.95rem;
    border-radius: 16px;
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
  
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const DarkModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 10px;
  }
`;

const ToggleLabel = styled.span`
  color: ${props => props.$isDark ? 'var(--egg)' : 'var(--slate)'};
  text-transform: lowercase;
  opacity: 0.8;
  transition: color 0.3s ease;
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--egg);
  
  /* Neumorphism effect */
  box-shadow: 
    ${props => props.$isDark
      ? '2px 2px 4px rgba(0, 0, 0, 0.3)'
      : '2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.8)'};
`;

const Copyright = styled.p`
  color: ${props => props.$darkMode ? 'var(--egg)' : 'var(--slate)'};
  font-family: var(--font-fredoka), Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.8;
  transition: color 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

