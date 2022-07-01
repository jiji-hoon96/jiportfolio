import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function Connect(){
    return  (
        <>
        <Nav/>
        <HomeDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 20 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -20} }  
        >
        <h1>Connect Page</h1>
        <p>
            연락해주세요!!!!!
        </p>
        </HomeDiv>
        </>
    )
}

export default Connect