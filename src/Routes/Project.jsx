import Nav from "./components/Nav";
import { HomeDiv } from "./Home";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

const NextDiv = styled.div`
  display: flex;
  justify-items: center;
  font-size: 64px;
`;

const ProjectDiv = styled.div`
  width: 500px;
  height: 600px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectDivTop = styled.div`
  height: 50%;
`;
const ProjectDivBottom = styled.div`
  height: 50%;
`;
const ProjectTitle = styled.div`
  font-size: 24px;
`;
const ProjectSummary = styled.div``;
const ProjectPeriod = styled.div``;
const ProjectIcon = styled.div``;
function Project() {
  return (
    <>
      <Nav />
      <HomeDiv
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -400 }}
      >
        <ProjectDiv>
          <ProjectDivTop>이미지자리</ProjectDivTop>
          <ProjectDivBottom>
            <ProjectTitle>Project : JiCoin</ProjectTitle>
            <ProjectSummary>
              가상화폐를 자세히 알아볼수 있는 사이트
            </ProjectSummary>
            <ProjectPeriod>Develop Period : 2022-5-4 ~ 2022-6-22</ProjectPeriod>
            <ProjectIcon>Develop Tool : typescript, react</ProjectIcon>
          </ProjectDivBottom>
        </ProjectDiv>
      </HomeDiv>
      <Link to="/about">
        <NextDiv>
          <FaAngleDown />
        </NextDiv>
      </Link>
    </>
  );
}

export default Project;
