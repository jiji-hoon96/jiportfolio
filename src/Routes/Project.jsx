import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function Project(){
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
        <h1>Project Page</h1>
        <p>
        프로젝트 페이지이이이이이이이이잉이ㅣㅇ
        </p>
        </HomeDiv>
        </>
    )
}

export default Project