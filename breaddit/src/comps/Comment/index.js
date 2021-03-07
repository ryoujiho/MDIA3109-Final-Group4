import React from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props =>props.width ? props.width : '350px'};
    height: ${props =>props.height ? props.height : '80px'};
    background: ${props =>props.bgcolor ? props.bgcolor : '#F8F8F8'};
`;

const CommentImgBox = styled.div`
    width:100%;
    position: flex;
    margin-left: 30px;
    margin-top: 15px;
`;


const WriterPhoto = styled.div`
    width:40px;
    height:40px;
    border-radius:50px;
    position: absolute;
    margin-right: 275px;
    border:4px solid #92BFB1;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50px;
    }
`;

//   margin: 0px 0px 0px 150px;
const CommentDetailBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-right: 30px;
`;

const Username = styled.h5`
    font-size: 14px;
    margin-top: 10px;
`;

const CommentDesc = styled.p`
    font-size: 12px;
    margin-left: 20px;
`;

const CommentDate = styled.p`
    font-size: 10px;
    color: #92BFB1;
    margin-top: 30px;
    margin-left: -50px;
`;


const Comment = ({username, commentdescription, date}) => {
    return <div>
        <CommentBox>
            <CommentImgBox>
                <WriterPhoto><img src="UserIcon.png"/></WriterPhoto>
            </CommentImgBox>
            <CommentDetailBox>
                <Username>{username}</Username>
                <CommentDesc>{commentdescription}</CommentDesc>
                <CommentDate>{date}</CommentDate>
            </CommentDetailBox>
        </CommentBox>
    </div>
}


Comment.defaultProps = {
    username: "Username",
    commentdescription: "Comment",
    date: "2/15/2021 4:53 PM"

}

export default Comment;



