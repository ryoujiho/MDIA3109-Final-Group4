import React from 'react';
import styled from 'styled-components';


const PostWrapper = styled.div`
    width:90%;
    max-width: 350px;
    height:60%;
    max-height: 400px;
    background-color:#E5E5E5;
`;

const PostImgBox = styled.div`
    width:100%;

    `;


const PostImg = styled.div`
    padding:10px;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

const PostDetailBox = styled.div`
    width:100%;
    margin: 0px 0px 15px 15px;
`;

const Username = styled.h5`
    font-size:22px;
    margin:0px;
`;

const PostDesc = styled.div`
    font-size:14px;
`;

const PostCreated = styled.div`
    font-size:11px;
    color: #0B0B09;
    opacity:0.5;
`;

const ViewComm = styled.a`
    font-size:11px;
    font-weight:bold;
    color: #92BFB1;
`;

const Post = ({img, username, postdescription, date}) => {
    return <PostWrapper>
        <PostImgBox>
            <PostImg><img src={img}/></PostImg>
        </PostImgBox>
        <PostDetailBox>
            <Username>{username}</Username>
            <PostDesc>{postdescription}</PostDesc>
            <PostCreated>{date}</PostCreated>
            <ViewComm>View all Comments</ViewComm>
        </PostDetailBox>
    </PostWrapper>
}

Post.defaultProps = {
    img: "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png",
    username: "Username",
    postdescription: "Post descriptionnnnn",
    date:"date"
}

export default Post;