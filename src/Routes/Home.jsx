import Nav from "./components/Nav";
import styled from "styled-components";
import Circle from "./components/Circle";



const HomeDiv =styled.div`
    width:80%;
    padding-top:150px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    margin-bottom: 50px;
    grid-template-columns: 1fr;
`

const HelloDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const CircleDiv=styled.div`
    width:40%;
    height:30%;
    margin: 0 auto;
    padding: 10px;
`

const HelloSpan = styled.div`
    font-size:18px;
`

const IntroduceDiv = styled.div`
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 32px;
    } 
    @media all and (max-width:479px) {
        font-size: 32px;
    }
`

const BtnDiv= styled.div`
    width:200px;
    height:50px;
    display: flex;
`

const HelloBtn = styled.div`
    font-size : 24px;
    margin: 20px 10px 0px 0px;
    transition: transform 250ms;
    cursor: pointer;
    :hover{
        transform: translateY(-7px);
    }
`

const Slash =styled.div`
    font-size : 24px;
    margin: 20px 10px 0px 0px;
`

function Home(){
    return(
        <>
            <Nav/>
            <HomeDiv>
                <HelloDiv>
                    <IntroduceDiv>Hello, <br/> I'm Jihoon Lee</IntroduceDiv>
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
                </HelloDiv>
                <CircleDiv>
                    <Circle/>
                </CircleDiv>
            </HomeDiv>
        </>
        
    )
}

export default Home;