import styled from "styled-components";
import { Link } from "react-router-dom";
import NavToggle from './NavToggle';
import { Sun,Moon } from "react-feather";

const NavbarDiv = styled.div`
    width:98%;
    position: fixed;
    display: flex;
    height: 100px;
    top: 0;
    z-index: 10;
    opacity: 0.97;
    background-color: ${(props)=>props.theme.bgColor};
`

const LogoDiv= styled.div`
    width:30%;
    height: 100px;
    margin-right: 20px;
`
const NavItemDiv = styled.div`
    width:70%;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const NavItemEach =styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px 0px 0px;
    font-size:20px;
    font-weight: bold;
    width: 150px;
    height: 60px;
    cursor: pointer;
    transition: transform 250ms;
    :hover{
        transform: translateY(-3px);
    }
    @media all and (min-width:480px) and (max-width:767px) {
        width:15%;
        font-size: 12px;
        margin:0px 2%;
    } 
    @media all and (max-width:479px) {
        width:15%;
        margin:0px 2%;
        font-size: 12px;
    }
`

const SpanEach = styled.span`
    position: absolute;
    top:25%;
    left:11%;
    width:22px;
    height: 22px;
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
    @media all and (min-width:480px) and (max-width:767px) {
        width:12px;
        height: 12px;
        top:35%;
        left:11%;
    } 
    @media all and (max-width:479px) {
        width:12px;
        height: 12px;
        top:35%;
        left:11%;
    }
`

const SpanOne =styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColorOne};
    animation-delay: 1.5s;
`
const SpanTwo = styled(SpanEach)`
    font-size:32px;
    animation-delay: 1s;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:20px;
    } 
    @media all and (max-width:479px) {
        font-size:20px;
    }
`
const SpanThree = styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColortwo};
    animation-delay: 0.5s;
`

const SpanFour = styled(SpanEach)`
    font-size:32px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:20px;
    } 
    @media all and (max-width:479px) {
        font-size:20px;
    }
`

function Nav(){
    return (
        <NavbarDiv>
            <LogoDiv>
                <SpanOne/>
                <SpanTwo>J</SpanTwo>
                <SpanThree/>
                <SpanFour>H</SpanFour>
            </LogoDiv>
            <NavItemDiv>
                <NavItemEach>
                    <Link to="/">
                        HOME
                    </Link>
                </NavItemEach>
                <NavItemEach>
                    <Link to="/project">
                        PROJECT
                    </Link>
                </NavItemEach>
                <NavItemEach>
                    <Link to="/about">
                        SKILL
                    </Link>
                </NavItemEach>
                <NavItemEach>
                    <Link to="/connect">
                        CONNECT
                    </Link>
                </NavItemEach>
                <NavToggle>
                    <Sun />
                    <Moon />
			    </NavToggle>
            </NavItemDiv>
        </NavbarDiv>
    )
}

export default Nav;