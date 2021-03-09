import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80vw;
    max-width:350px;
    height: 100%;
    max-height: 30px;
    margin:30px 0px;
    opacity:0.3
`;

const DividerLine = styled.div`
    border-bottom: 1px solid #0b0b09;
    width: 100%;
    height: 5px;
`;

const MiddleText = styled.div`
    font-size: 16px;
    margin: -5px 15px;
    color: #0B0B09
`;

const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;

    a, a:visited {
        text-decoration: none;
        color: #92BFB1;
    }

`;

const BottomText = styled.p`
    font-size: 14px;
    color: #0B0B09


`;

const Divider = ({text }) => {
    return <div>
        <DividerContainer>
            <DividerLine/>
            <MiddleText>or</MiddleText>
            <DividerLine/>
        </DividerContainer>
        <TextContainer>
            <BottomText>Don't have an account? <Link to='/SignUp'><b>Sign Up!</b></Link></BottomText>
        </TextContainer>
    </div>
}

Divider.defaultProps = {
}

export default Divider;
