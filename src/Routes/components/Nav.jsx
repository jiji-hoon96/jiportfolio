import styled from "styled-components";
import { Link } from "react-router-dom";
import Toggle from "react-styled-toggle";
import { isDarkAtom } from "../../atom";
import { useSetRecoilState} from 'recoil';

const NavbarDiv = styled.div`
    width:90%;
    display: flex;
    margin: 0 auto;
    height: 100px;
`

const LogoDiv= styled.div`
    width:30%;
    height: 100px;
    display:flex;
    align-items: center;
    justify-content: center;
    
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
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    width: 25%;
    height: 60px;
`

const NavToggle = styled.div`
    
`
const SpanEach = styled.span`
    position: absolute;
    top:5%;
    left:10%;
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