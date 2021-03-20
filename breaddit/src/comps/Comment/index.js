import React from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: auto;
    margin-bottom:5px;
`;

const CommentImgBox = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:15%;
    margin-left:5px;
`;


const WriterPhoto = styled.div`
    width:35px;
    height:35px;
    border-radius:50px;
    border:4px solid #92BFB1;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50px;
    }
`;

const Username = styled.h5`
    font-size: 14px;
    margin 0px 3px;
    width:auto;
    display:flex;
    justify-content:flex-start
`;

const CommentInfoWrapper = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
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


const Comment = ({writerphoto, username, commentdescription, date, bgColor}) => {
    return <CommentBox bgColor={bgColor}>
            <CommentImgBox>
                <WriterPhoto><img src={writerphoto}/></WriterPhoto>
            </CommentImgBox>
            <Username>{username}</Username>
            <CommentInfoWrapper>
                <CommentDesc>{commentdescription}</CommentDesc>
                <CommentDate>{date}</CommentDate>
            </CommentInfoWrapper>
        </CommentBox>
}


Comment.defaultProps = {
    writerphoto: "UserIcon.png",
    username: "Username",
    commentdescription: "Comment",
    date: "2/15/2021 4:53 PM"

}

export default Comment;



