import Nav from "./components/Nav";
import styled from "styled-components";
import Circle from "./components/Circle";
import {motion} from 'framer-motion';
import {FaAngleDown} from 'react-icons/fa';
import { Link } from "react-router-dom";


export const HomeDiv =styled(motion.div)`
    width:90%;
    height:100vh;
    margin: 0 auto;
    padding: 150px 20px 0px 20px;
    align-items: center;
    display: flex;
    justify-content:space-around;
    grid-template-columns: 1fr;
    @media all and (min-width:480px) and (max-width:767px) {
      flex-direction: column;
    } 
    @media all and (max-width:479px) {
      flex-direction: column;
    }
`

const HelloDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;

`

const CircleDiv=styled.div`
    padding:10px; 
    margin-bottom : 50px;
    @media all and (min-width:480px) and (max-width:767px) {
        margin: 50px;
        flex-direction: column;
        width:60%;
        height:40%;
    } 
    @media all and (max-width:479px) {
        margin: 50px 0px;
        flex-direction: column;
        width:60%;
        height:40%;
    }
`

const HelloSpan = styled.div`
    font-size:18px;

`

const IntroduceDiv = styled.div`
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 32px;
    } 
    @media all and (max-width:479px) {
        font-size: 32px;
    }

`

export const BtnDiv= styled.div`
    width:200px;
    height:50px;
    display: flex;
`

export const HelloBtn = styled.div`
    font-size : 24px;
    margin: 20px 10px 0px 0px;
    transition: transform 250ms;
    cursor: pointer;
    :hover{
        transform: translateY(-3px);
    }
`

export const Slash =styled.div`
    font-size : 24px;
    margin: 20px 10px 0px 0px;
`

const NextDiv= styled.div`
    display: flex;
    justify-items: center;
    font-size: 64px;
`

const ResumeA = styled.a`
    width:200px;
    height: 50px;
    margin-top: 20px;
`
const ResumeBtn = styled.button`
    width:200px;
    height: 50px;
    border-radius: 10px;
    
    border:none;
    font-size:16px;
    color:white;
    cursor: pointer;
    background-color: #707070;
    :hover{
        transform: scale(1.05);
        transition-duration: 1s;
        background-color: ${(props)=>props.theme.fontColor};
        color:${(props)=>props.theme.bgColor}
    }
`

function Home(){
    return(
        <>
            <Nav/>
            <HomeDiv 
                transition= { {duration: 0.5 }}
                initial= { {opacity: 0, y: 400 }}
                animate= { {opacity: 1, y: 0 }}
                exit= { {opacity: 0, y: -400} }  
            >
                <HelloDiv>
                    <IntroduceDiv>Hello, <br/> I'm Jihoon  <br/> Lee</IntroduceDiv>
                    <HelloSpan>Junior Front-End Developer </HelloSpan>
                    <BtnDiv>
                        <HelloBtn>
                            <a href="https://www.notion.so/Full-Stack-Developer-52ce9ef0ba8d4a3583ac46a5787dd888"  rel="noopener noreferrer" target="_blank">NOTION</a> 
                        </HelloBtn>
                        <Slash>
                        ｜
                        </Slash>
                        <HelloBtn>
                            <a href="https://github.com/jiji-hoon96"  rel="noopener noreferrer" target="_blank">GITHUB</a>
                        </HelloBtn>
                    </BtnDiv>
                    <ResumeA>
                        <ResumeBtn>DownLoad Resume</ResumeBtn>
                    </ResumeA>
                </HelloDiv>
                <CircleDiv>
                    <Circle/>
                </CircleDiv>
            </HomeDiv>
            <Link to="/project">
                <NextDiv>
                    <FaAngleDown/>
                </NextDiv>
            </Link>
        </>
        
    )
}

export default Home;