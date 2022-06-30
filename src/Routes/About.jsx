import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function About(){
    return (
        <>
        <Nav/>
        <HomeDiv
        className="container text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
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