import React from 'react';
import styled from 'styled-components';



const HeadingSmall = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;

color: #0B0B09;`

const Heading2 = () => {
    return <div>
        <HeadingSmall>Heading2</HeadingSmall>
    </div>
}

Heading2.defaultProps = {


}

export default Heading2;