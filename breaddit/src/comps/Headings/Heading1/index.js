import React from 'react';
import styled from 'styled-components';


const HeadingText = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 43px;
text-align: center;

color: #0B0B09;

`

const Heading1 = () => {
    return <div>
    <HeadingText>Heading1</HeadingText>
    </div>
}

Heading1.defaultProps = {


}

export default Heading1;