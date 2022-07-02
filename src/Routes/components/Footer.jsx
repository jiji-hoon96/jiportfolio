import styled from "styled-components";

const FooterDiv = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    height:10vh;
    align-items: center;
`

function Footer(){
    return (
        <FooterDiv>
            <h1>© 2022 JIHOON LEE. All rights reserved.</h1>
        </FooterDiv>
    )
}

export default Footer;