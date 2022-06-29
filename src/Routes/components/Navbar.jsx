import { useState } from "react";
import Toggle from "react-styled-toggle";
import styled from "styled-components";
import { isDarkAtom } from "../../atom";
import { useSetRecoilState} from 'recoil';
import { Link } from "react-router-dom";


const Container =styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    padding-bottom: 1rem;
`
const Nav =styled.div`
    width: 90%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 7rem;
    padding-bottom: 1rem;
`

const SpanContainer = styled.div`
    transform: translate(-50% -50%);
`
const SpanEach = styled.span`
    display: block;
    position: absolute;
    width:15px;
    height: 15px;
    border-radius: 50%;
    animation: speed 2s infinite ease-in-out;
    @keyframes speed {
    0% {
        transform: translate(0%);
        border-radius: 50%;
    }

    25% {
        transform: translate(150%) scale(0.5);
        border-radius: 0%;
    }

    50% {
        transform: translate(150%, 150%);
        border-radius: 50%;
    }

    75% {
        transform: translate(0, 150%) scale(0.5);
        border-radius: 0%;
    }
    }
`

const SpanOne =styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColorOne};
    animation-delay: 1.5s;
`
const SpanTwo = styled(SpanEach)`
    animation-delay: 1s;
`
const SpanThree = styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColortwo};
    animation-delay: 0.5s;
`

const SpanFour = styled(SpanEach)`
    
`
const NavMenuDiv =styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

const NavMenuEach = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
`


function Navbar(){
    const modechange = useSetRecoilState(isDarkAtom);
    return (
        <Container>
            <Nav>
                <SpanContainer>
                    <SpanOne/>
                    <SpanTwo>J</SpanTwo>
                    <SpanThree/>
                    <SpanFour>H</SpanFour>
                </SpanContainer>
                <NavMenuDiv>
                    <NavMenuEach>
                        <Link to="/project">
                            Project
                        </Link>
                    </NavMenuEach>
                    <NavMenuEach>
                        <Link to="/about">
                            About
                        </Link>
                    </NavMenuEach>
                    <NavMenuEach>
                        <Link to="/connect">
                            Connect
                        </Link>
                    </NavMenuEach>
                </NavMenuDiv>
                <Toggle backgroundColorChecked="#505355"  width={80} translate={45} onChange={()=>{modechange((prev)=>!prev)}}/>
            </Nav>
        </Container>
    )
}

export default Navbar;