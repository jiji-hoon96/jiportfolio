import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function About(){
    return (
        <>
        <Nav/>
        <HomeDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 20 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -20} }  
        >
        <h1>About Page</h1>
        <p>
            난누구?
        </p>
        </HomeDiv>
        </>
    )
}

export default About