import React from 'react';
import styled from 'styled-components';



const HeadingSmall = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #0B0B09;`

const Heading2 = (text) => {
    return <div>
        <HeadingSmall>{text}</HeadingSmall>
    </div>
}

Heading2.defaultProps = {
    text:'Heading2'

}

export default Heading2;