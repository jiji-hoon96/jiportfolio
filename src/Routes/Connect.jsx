import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function Connect(){
    return  (
        <>
        <Nav/>
        <HomeDiv
        className="container text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
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