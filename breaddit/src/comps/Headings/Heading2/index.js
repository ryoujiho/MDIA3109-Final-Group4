import React from 'react';
import styled from 'styled-components';

const HeadingSmall = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #0B0B09;
    margin: 15px 0px;
`

const Heading2 = ({text}) => {
    return <HeadingSmall>{text}</HeadingSmall>
}

Heading2.defaultProps = {
    text:'Heading2'
}

export default Heading2;