import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Container} from './Container';
import {Link} from 'react-router-dom';
import {IoMoon, IoSunnySharp} from 'react-icons/io5';

const HeaderEl = styled.header`
      box-shadow: var(--shadow);
      background-color: var(--color-ui);
`

const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
`

const LogoTitle = styled(Link).attrs({to: '/'})`
      font: var(--md-font);
      color: var(--color-text);  
      
      @media (min-width: 767px) {
        font: var(--hg-font);
      } 
`

const ThemeSwitcher = styled.button`
      display: flex;
      align-items: center;
      width: 150px;
      border: none;
      background-color: transparent;
      font: var(--md-font);
      color: var(--color-text);
      text-transform: capitalize;
      cursor: pointer;
      
      & > svg {
        margin: 0 10px 0 0;
      }
      
      @media (min-width: 767px) {
        font: var(--hg-font);
      }
`

const Header = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>

                    <LogoTitle>Where in the world?</LogoTitle>

                    <ThemeSwitcher onClick={toggleTheme}>
                        {
                            theme === 'light' ?
                                <IoSunnySharp size='20px' title='Light Theme'/>
                                :
                                <IoMoon size='20px' title='Dark Theme'/>
                        }
                        {theme} Mode
                    </ThemeSwitcher>

                </Wrapper>

            </Container>
        </HeaderEl>
    );
};

export default Header;