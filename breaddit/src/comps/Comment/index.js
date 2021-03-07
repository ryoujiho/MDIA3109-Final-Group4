import React from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
`;

const CommentImgBox = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:15%;
`;


const WriterPhoto = styled.div`
    width:40px;
    height:40px;
    border-radius:50px;
    border:4px solid #92BFB1;
    margin-left:5px;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50px;
    }
`;

const Username = styled.h5`
    font-size: 14px;
    margin 0px 10px;
    width:10%;
`;

const CommentInfoWrapper = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:20px;
`;

const CommentDesc = styled.div`
    font-size: 12px;
    margin:0px;
`;

const CommentDate = styled.div`
    font-size: 10px;
    color: #92BFB1;
    margin:5px 0px 0px 0px;
`;


const Comment = ({username, commentdescription, date, bgColor}) => {
    return <CommentBox bgColor={bgColor}>
            <CommentImgBox>
                <WriterPhoto><img src="UserIcon.png"/></WriterPhoto>
            </CommentImgBox>
            <Username>{username}</Username>
            <CommentInfoWrapper>
                <CommentDesc>{commentdescription}</CommentDesc>
                <CommentDate>{date}</CommentDate>
            </CommentInfoWrapper>
        </CommentBox>
}


Comment.defaultProps = {
    username: "Username",
    commentdescription: "Comment",
    date: "2/15/2021 4:53 PM"

}

export default Comment;



