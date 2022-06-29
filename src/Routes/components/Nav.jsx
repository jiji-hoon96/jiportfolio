import styled from "styled-components";
import { Link } from "react-router-dom";
import Toggle from "react-styled-toggle";
import { isDarkAtom } from "../../atom";
import { useSetRecoilState} from 'recoil';

const NavbarDiv = styled.div`
    width:90%;
    position: fixed;
    display: flex;
    margin: 0 auto;
    height: 100px;
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
    width: 150px;
    height: 60px;
    cursor: pointer;
    transition: transform 250ms;
    :hover{
        transform: translateY(-7px);
    }
    @media all and (min-width:480px) and (max-width:767px) {
        width:15%;
        font-size: 12px;
        margin:0px 10px;
    } 
    @media all and (max-width:479px) {
        width:15%;
        margin:0px 10px;
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
`

const SpanOne =styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColorOne};
    animation-delay: 1.5s;
`
const SpanTwo = styled(SpanEach)`
    font-size:32px;
    animation-delay: 1s;
`
const SpanThree = styled(SpanEach)`
    background: ${(props)=>props.theme.navItemColortwo};
    animation-delay: 0.5s;
`

const SpanFour = styled(SpanEach)`
    font-size:32px;
`

function Nav(){
    const modechange = useSetRecoilState(isDarkAtom);
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
                    <Link to="/project">
                        Project
                    </Link>
                </NavItemEach>
                <NavItemEach>
                    <Link to="/about">
                        About
                    </Link>
                </NavItemEach>
                <NavItemEach>
                    <Link to="/connect">
                        Connect
                    </Link>
                </NavItemEach>
            </NavItemDiv>
            <Toggle backgroundColorChecked="#505355"  onChange={()=>{modechange((prev)=>!prev)}}/>
        </NavbarDiv>
    )
}

export default Nav;