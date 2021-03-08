import React from 'react';
import styled from 'styled-components';

const DescriptionBox = styled.textarea`
    width:290px;
    height:80px;
    background:#f8f8f8;
    padding: 10px 10px;
    border-radius:4px;
    border: 1px solid white;
    outline:none;
    resize:none;
`;

const Description = () => {
    return <DescriptionBox>
        
    </DescriptionBox>
}

Description.defaultProps = {


}

export default Description;