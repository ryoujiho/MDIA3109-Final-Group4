import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: ${props =>props.width ? props.width : '200px'};
    height: ${props =>props.height ? props.height : '45px'};
    background: ${props =>props.bgcolor ? props.bgcolor : '#F4AC45'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: ${props =>props.fontSize ? props.fontSize : '18px'};
    color:${props =>props.textColor ? props.textColor : '#FFFFFF'};
    font-family: 'Lato', sans-serif;
`;

const Button = ({onClick, text, textColor, bgcolor, width, height, fontSize}) => {
    return <ButtonContainer onClick={onClick} bgcolor = {bgcolor} height={height} width={width}>
            <ButtonText fontSize={fontSize} textColor = {textColor}>{text}</ButtonText>
        </ButtonContainer>
}

Button.defaultProps = {
    color: null,
    text: "Button"
}

export default Button;

