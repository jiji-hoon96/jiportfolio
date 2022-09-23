import Nav from "./components/Nav";
import { HomeDiv } from "./Home";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import health from "../src_assets/healthapp.png";
import coin from "../src_assets/jicoin1.png";
import jihoon1 from "../src_assets/jihoon1.png";
import weco from "../src_assets/weco.png";

const NextDiv = styled.div`
  display: flex;
  justify-items: center;
  font-size: 64px;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: "1000px";
  background-color: "yellow";
`;

const ProjectDiv = styled.div`
  width: 800px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 10px;
  height: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    scale: 1.01;
  }
`;
const ProjectDivTop = styled.div`
  width: 600px;
  height: 300px;
`;
const ProjectDivBottom = styled.div`
  margin-top: 30px;
  height: 50%;
`;
const ProjectTitle = styled.div`
  font-size: 24px;
  margin: 10px 0px;
`;
const ProjectSummary = styled.div`
  margin: 5px 0px;
`;
const ProjectPeriod = styled.div`
  margin: 5px 0px;
`;
const ProjectIcon = styled.div`
  margin: 5px 0px;
`;
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
        <ProjectBox>
          <a
            href="http://health-community.site/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ProjectDiv>
              <ProjectDivTop>
                <img alt="health" src={health} width="600px" height="300px" />
              </ProjectDivTop>
              <ProjectDivBottom>
                <ProjectTitle>Project : 헬쓰리</ProjectTitle>
                <ProjectSummary>
                  Content : 헬스에 대한 정보와 사람들과 운동 삶을 공유하는
                  커뮤니티입니다.
                </ProjectSummary>
                <ProjectPeriod>
                  Develop Period : 2022-6-22 ~ 진행중
                </ProjectPeriod>
                <ProjectIcon>
                  Develop Tool : Javascript, React, Style-Components, Nginx,
                  Axios, Java, Spring
                </ProjectIcon>
              </ProjectDivBottom>
            </ProjectDiv>
          </a>
          <ProjectDiv>
            <ProjectDivTop>
              <img alt="coin" src={coin} width="600px" height="300px" />
            </ProjectDivTop>
            <ProjectDivBottom>
              <ProjectTitle>Project : JiCoin</ProjectTitle>
              <ProjectSummary>
                Content : 가상화폐를 자세히 알아볼수 있는 사이트
              </ProjectSummary>
              <ProjectPeriod>
                Develop Period : 2022-5-4 ~ 2022-6-12
              </ProjectPeriod>
              <ProjectIcon>
                Develop Tool : React ,TypeScript, React-Query ,
                Styled-Components
              </ProjectIcon>
            </ProjectDivBottom>
          </ProjectDiv>
          <ProjectDiv>
            <ProjectDivTop>
              <img alt="jihoon1" src={jihoon1} width="600px" height="300px" />
            </ProjectDivTop>
            <ProjectDivBottom>
              <ProjectTitle>Project : JiPortFolio</ProjectTitle>
              <ProjectSummary>이지훈의 포트폴리오 사이트</ProjectSummary>
              <ProjectPeriod>Develop Period : 2022-6-22 ~ 진행중</ProjectPeriod>
              <ProjectIcon>
                Develop Tool : HTML, React, Styled-Components, Javascript
              </ProjectIcon>
            </ProjectDivBottom>
          </ProjectDiv>
          <a
            href="https://we-co-front.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ProjectDiv>
              <ProjectDivTop>
                <img alt="weco" src={weco} width="600px" height="300px" />
              </ProjectDivTop>
              <ProjectDivBottom>
                <ProjectTitle>Project : Weco</ProjectTitle>
                <ProjectSummary>
                  hola 사이트를 기능개선하는 클론사이트
                </ProjectSummary>
                <ProjectPeriod>
                  Develop Period : 2022-5-30 ~ 진행중
                </ProjectPeriod>
                <ProjectIcon>
                  Develop Tool : typescript, NextJs, Java, TailWindCss, Recoil
                </ProjectIcon>
              </ProjectDivBottom>
            </ProjectDiv>
          </a>
        </ProjectBox>
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
