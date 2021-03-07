import React from "react";
import styled from 'styled-components';

const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 30px;
    margin-left: 40px;
    max-width: ${props=>props.maxwidth};
    flex-direction: row;
    opacity: 0.3;
`;

const DividerLine = styled.div`
    border-bottom-width: 1px;
    border-bottom-color: #E1E1E1;
    width: 100%;
    margin-bottom: 6.5px;
    height: 5px;
`;

const MiddleText = styled.p`
    font-size: 16px;
`;

const TextContainer = styled.div`
    margin-top: 10px;
`;

const BottomText = styled.p`
    font-size: 14px;
    color: #A6A6A6;
`;

const Divider = ({ title, MaxWidth, text }) => {
    return <div>
        <DividerContainer maxwidth={MaxWidth}>
            <DividerLine></DividerLine>
            <MiddleText>{title}</MiddleText>
            <DividerLine></DividerLine>
        </DividerContainer>
        <TextContainer>
            <BottomText>{text}</BottomText>
        </TextContainer>
    </div>
}

Divider.defaultProps = {
    title: "or",
    MaxWidth: "100px",
    text: "Don't have an account? Sign Up!"
}

export default Divider;
