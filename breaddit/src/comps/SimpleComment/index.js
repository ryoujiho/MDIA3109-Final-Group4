import React from 'react';
import styled from 'styled-components';

const CommWrapper = styled.div`
    display:flex;

`;

const CommWriter = styled.div`
    margin-right:10px;
    font-size:12px;
    font-weight:bold;
`;

const CommText = styled.div`
    font-size:12px;
`;

const SimpleComment = ({username, comment}) => {
    return <CommWrapper>
        <CommWriter>{username}</CommWriter>
        <CommText>{comment}</CommText>
    </CommWrapper>
}

SimpleComment.defaultProps = {
    username: "Username",
    comment: " Comment Hi"
}

export default SimpleComment;