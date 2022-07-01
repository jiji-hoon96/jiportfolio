import Nav from "./components/Nav"
import { HomeDiv } from "./Home"

function Project(){
    return (
        <>
        <Nav/>
        <HomeDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 20 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -20} }
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