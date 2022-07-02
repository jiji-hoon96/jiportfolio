import styled from "styled-components";
import Nav from "./components/Nav"
import { HomeDiv} from "./Home";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import Footer from "./components/Footer";

const ConnectDiv = styled.section`
    width:100%;
    height:100%;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    @media all and (min-width:480px) and (max-width:767px) {
       flex-direction: column;
    } 
    @media all and (max-width:479px) {
       flex-direction :column;
    }
`

const LeftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50%;
    height:100%; 
    @media all and (min-width:480px) and (max-width:767px) {
      margin-bottom: 20px;
    } 
    @media all and (max-width:479px) {
        margin-bottom: 20px;
    }
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width:50%;
    height:100%;
`
const NameH1 = styled.div`
    font-size:48px;
    font-weight: bold;
    margin: 20px 0px;
    opacity: 0.6;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 24px;
    } 
    @media all and (max-width:479px) {
        font-size: 24px;
    }
`
const NameH3 = styled.div`
    opacity: 0.6;
    font-size:18px;
    margin: 20px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

const ContactCommit= styled.div`
    margin:40px 0px;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media all and (min-width:480px) and (max-width:767px) {
        margin:10px 0px;
    } 
    @media all and (max-width:479px) {
        margin:10px 0px;
    }
`
const ContacktCommit1=styled.div`
    font-size:20px;
    margin: 10px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`
const ContactEmail = styled.div`
    font-size:16px;
    cursor: pointer;
    :hover{

        transform: scale(1.05);
    }
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`
const BtnDiv= styled.div`
    width:200px;
    margin:50px 0px;
    height:50px;
    display: flex;
    justify-content: flex-end;
`

const HelloBtn = styled.div`
    font-size : 24px;
    margin:20px 0px 0px 0px;
    transition: transform 250ms;
    cursor: pointer;
    :hover{
        transform: translateY(-3px);
    }
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

const Slash =styled.div`
    font-size : 24px;
    margin: 20px 10px 0px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

const DropText = styled.div`
    display: inline-block;
    width: 180px;
    text-align: left;
    height: 200px;
    margin-right: 30px;
    font-size: 48px;
    vertical-align: -2px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 20px;
        height: 100px;
    } 
    @media all and (max-width:479px) {
        font-size: 20px;
        height: 100px;
    }
`

const DropItem =styled.div`
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    position:absolute;
    font-weight:300;   
    
    :nth-child(1) {
        animation: roll 5s linear infinite 0s;
    }
    :nth-child(2) {
        animation: roll 5s linear infinite 1s;
    }
    :nth-child(3) {
        animation: roll 5s linear infinite 2s;
    }
    :nth-child(4) {
        animation: roll2 5s linear infinite 3s;
    }
@keyframes roll {
  0% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(-25deg);
  }
  3% {
    opacity:1;
    transform: rotate(0deg);
  }
  5% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
  }
  20% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
    transform: rotate(0deg);
  }
  27% {
    font-size:0px;
    opacity:0.5;
    margin-left:20px;
    margin-top:100px;
  }
  100% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(15deg);
  }
}

@keyframes roll2 {
  0% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(-25deg);
  }
  3% {
    opacity:1;
    transform: rotate(0deg);
  }
  5% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
  }
  30% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
    transform: rotate(0deg);
  }
  37% {
    font-size:0px;
    opacity:0.5;
    margin-left:20px;
    margin-top:100px;
  }
  
  100% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(15deg);
  }
}
`

const DropTitle = styled.div`
    font-size:24px;
    @media all and (min-width:480px) and (max-width:767px) {
        width:600px;
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        width:600px;
        font-size: 10px;
    }
    
`

function Connect(){ 
    const [isCopy , setIsCopy] = useState(false);
    const onCopy=()=>{
        setIsCopy(true)
    }
    return  (
        <>
        <Nav/>
        <HomeDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 20 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -20} }  
        >
        <ConnectDiv>
            <LeftDiv>
                <DropText>
                    <DropItem>책임감을 가진</DropItem>
                    <DropItem>할 일을 미루지 않는</DropItem>
                    <DropItem>소통할줄 아는</DropItem>
                    <DropItem>배움의 의지가 강한</DropItem>
                </DropText>
                <DropTitle>
                이지훈 입니다
                </DropTitle>
            </LeftDiv>
            <RightDiv>
                <NameH1>JIHOON LEE</NameH1>
                <NameH3>Front-End Develope</NameH3>
                <ContactCommit>
                    <ContacktCommit1>
                    If you need to talk to me
                    </ContacktCommit1>
                    <ContacktCommit1>
                    Please email to
                    </ContacktCommit1>
                </ContactCommit>
                <CopyToClipboard text="jihoon7705@gmail.com">
                    <ContactEmail onClick={onCopy}>
                        {isCopy ? "이메일이 복사 되었습니다" : "jihoon7705@gmail.com"}
                    </ContactEmail>
                </CopyToClipboard>
                <BtnDiv style={{justifyItems:"flex-end"}}>
                        <HelloBtn style>
                            <a href="https://www.notion.so/Full-Stack-Developer-52ce9ef0ba8d4a3583ac46a5787dd888"  rel="noopener noreferrer" target="_blank">NOTION</a> 
                        </HelloBtn>
                        <Slash>
                        ｜
                        </Slash>
                        <HelloBtn style>
                            <a href="https://github.com/jiji-hoon96"  rel="noopener noreferrer" target="_blank">GITHUB</a>
                        </HelloBtn>
                    </BtnDiv>
            </RightDiv>
        </ConnectDiv>
        </HomeDiv>
        <Footer/>
        </>
    )
}

export default Connect