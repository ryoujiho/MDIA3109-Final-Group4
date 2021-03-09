import React from 'react';
import styled from 'styled-components';

const CommWrapper = styled.div`
    display:flex;
    margin-bottom:8px;
`;

const CommWriter = styled.div`
    margin-right:10px;
    font-size:12px;
    font-weight:bold;
`;

const CommText = styled.div`
    font-size:12px;
`;

const SimpleComment = ({commenter_name, comment_text}) => {
    return <CommWrapper>
        <CommWriter>{commenter_name}</CommWriter>
        <CommText>{comment_text}</CommText>
    </CommWrapper>
}

SimpleComment.defaultProps = {
    commenter_name: "Username",
    comment_text: " Comment Hi"
}

export default SimpleComment;