import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: ${props =>props.width ? props.width : '200px'};
    height: ${props =>props.height ? props.height : '45px'};
    background: ${props =>props.bgcolor ? props.bgcolor : '#F4AC45'};
    border-radius: ${props =>props.radius ? props.radius : '5px'};
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
`;

const Button = ({onClick, disabled, text, textColor, bgcolor, width, height, radius, fontSize}) => {
    return <ButtonContainer onClick={onClick} disabled={disabled} bgcolor = {bgcolor} height={height} width={width} radius={radius}>
            <ButtonText fontSize={fontSize} textColor = {textColor}>{text}</ButtonText>
        </ButtonContainer>
}

Button.defaultProps = {
    color: null,
    disabled: true,
    text: "Button"
}

export default Button;

