import React from 'react';
import styled from 'styled-components';


const HeadingText = styled.div`
    font-weight:700;
    font-size: 36px;
    text-align: center;
    color: #0B0B09;
    margin: 15px 0px;

`

const Heading1 = ({text}) => {
    return <HeadingText>{text}</HeadingText>
}

Heading1.defaultProps = {
    text:'Heading1'
}

export default Heading1;