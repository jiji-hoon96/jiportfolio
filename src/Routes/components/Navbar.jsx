import { useState } from "react";
import Toggle from "react-styled-toggle";
import styled from "styled-components";
import { isDarkAtom } from "../../atom";
import { useSetRecoilState} from 'recoil';


const Container =styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-bottom: 1rem;
`
const Nav =styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    margin: 0 auto;
    height: 7rem;
    padding-bottom: 1rem;
`

const SpanContainer = styled.div`
    transform: translate(-50% -50%);
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: #adc1ce;
    animation-delay: 1.5s;
`
const SpanTwo = styled(SpanEach)`
    animation-delay: 1s;
`
const SpanThree = styled(SpanEach)`
    background: #505355;
    animation-delay: 0.5s;
`

const SpanFour = styled(SpanEach)`
    
`
const NavMenuDiv =styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
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
                    <NavMenuEach>Project</NavMenuEach>
                    <NavMenuEach>ABOUT</NavMenuEach>
                    <NavMenuEach>CONNECT</NavMenuEach>
                    <Toggle onChange={()=>{modechange((prev)=>!prev)}}/>
                </NavMenuDiv>
            </Nav>
        </Container>
    )
}

export default Navbar;