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
    margin-bottom:15px;
`;

const Description = ({onChange}) => {
    return <DescriptionBox 
            type="text" 
            onChange={onChange}>
        
    </DescriptionBox>
}

Description.defaultProps = {


}

export default Description;