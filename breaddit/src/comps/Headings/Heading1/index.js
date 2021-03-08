import React from 'react';
import styled from 'styled-components';


const HeadingText = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 36px;
text-align: center;

color: #0B0B09;

`

const Heading1 = ({text}) => {
    return <div>
    <HeadingText>{text}</HeadingText>
    </div>
}

Heading1.defaultProps = {
    text:'Heading1'
}

export default Heading1;