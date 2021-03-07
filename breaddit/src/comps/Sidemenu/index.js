import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const SideMenuContainer = styled.div`
    width:200px;
    height:100%;
    background-color:#92BFB1;
    a, a:visited {
        text-decoration:none;
        color:#0b0b09;
    }
`;

// User Icon, Username and Date
const UserInfoContainer = styled.div`
    display:flex;
    align-items:center;
    margin-left:10px;
`;

const UserInfoWrapper = styled.div`
    margin-left:10px;
    margin-top:50px;
`;

const UserIcon = styled.div`
    width:65px;
    height:65px;
    border-radius:100%;
    background:#C4C4C4;
    margin-top:50px;
`;
const Username = styled.div`
    color:#F8F8F8;
    font-weight:bold;
    font-size:18px;
`;

const Date = styled.div`
    color:#F4AC45;
    font-size:14px;
`;

// Nav Items (Home, MyFeed, MyList)
const NavContainer = styled.div`
    margin-top:90px;
    display:flex;
    flex-direction:column;

    img {
        margin-left:40px;
         margin-right:15px;
         margin-bottom:35px;

    }
    
    span {
        font-size:16px;
        margin-bottom:35px;
    }



`;

const Home = styled.div`
    display:flex;
    align-items:center;
`;

const MyFeed = styled.div`
    display:flex;
    align-items:center;  
`;

const MyList = styled.div`
    display:flex;
    align-items:center;
`;

const Sidemenu = ({onClick, username, date,}) => {
    return <SideMenuContainer onClick={onClick}>

        <UserInfoContainer>

            <UserIcon></UserIcon>

            <Link to="/feed">
                <UserInfoWrapper>
                    <Username>{username}</Username>
                    <Date>{date}</Date>
                </UserInfoWrapper>
            </Link>

        </UserInfoContainer>

        <NavContainer>
            <Link to='/Main'>
                <Home onClick={onClick}>
                    <img src ="homeicon.png"></img>
                    <span>Home</span>
                </Home>
            </Link>
            <Link to='/Feed'>
                <MyFeed>
                    <img src ="feedicon.png"></img>
                    <span>My Feed</span>    
                </MyFeed>
            </Link>
            <Link to='/SavedList'>
                <MyList>
                    <img src ="bookmark.png"></img>
                    <span>My List</span>
                </MyList>
            </Link>
        </NavContainer>

    </SideMenuContainer>
}

Sidemenu.defaultProps = {
    username:"Username",
    date:"placeholder date",

}

export default Sidemenu;