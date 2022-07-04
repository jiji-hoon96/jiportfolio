import Nav from "./components/Nav"
import { HomeDiv } from "./Home"
import { Link } from "react-router-dom"
import {FaAngleDown} from 'react-icons/fa';
import styled from "styled-components"

const NextDiv= styled.div`
    display: flex;
    justify-items: center;
    font-size: 64px;
`

function Project(){
    return (
        <>
        <Nav/>
        <HomeDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 400 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -400} }  
        >
        <h1>Project Page</h1>
        <p>
        프로젝트 페이지이이이이이이이이잉이ㅣㅇ
        </p>
        </HomeDiv>
        <Link to="/about">
            <NextDiv>
                <FaAngleDown/>
            </NextDiv>
        </Link>
        </>
    )
}

export default Project