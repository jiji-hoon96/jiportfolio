import Nav from "./components/Nav";
import styled from "styled-components";
import Circle from "./components/Circle";



const HomeDiv =styled.div`
    width:100%;
    display: flex;
    grid-template-columns: 1fr;
    height:100vh;
`
function Home(){
    return(
        <>
            <Nav/>
            <HomeDiv>
                <Circle/>
            </HomeDiv>
        </>
        
    )
}

export default Home;