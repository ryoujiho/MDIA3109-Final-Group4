import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SideMenu from 'comps/Sidemenu';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const TopBarWrapper = styled.div`
    width:100%;
    height:50px;
    padding:16px 0px 10px 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
`;

const Back = styled.div`
    width:auto;
    height:50%;
    diplay:flex;
    align-items:center;
    margin-left:20px;

    img {
        width:${props=>props.back ? "90%" : "0%"};
        height:auto;
    }

`;

const PageName = styled.div`
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    color: #0B0B09;
`;

const Hamburger = styled.div`
    width:auto;
    height:50%;
    diplay:flex;
    align-items:center;
    margin-right:20px;

    img {
        height:auto;
        width:${props=>props.Hamicon ? "90%" : "0%"};
    }

`;

const MenuWrapper = styled.div`
    position:absolute;
    z-index:99;
    right: ${props=>props.openMenu ? "0px" : "-320px"};
    top:0;
    transition:0.4s all ease-in-out;
    height:100vh;
`;

const Topbar = ({pageName, back, Hamicon, onClick}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [user, setUser] = useState("");

    const CheckToken = async () => {
        const resp = await axios.post("/api/verify");
        console.log(resp.data);
        if(resp.data !== "no token sent to server" || "Invalid Token") {
            setUser(resp.data)
        }
    }
    
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
      }

    useEffect(()=> {
        CheckToken();
    }, [])

    console.log("Current user is : ", user.username)

    return <TopBarWrapper>
            <Back back={back} onClick={goBack}><img src="/back.png"/></Back>
           <PageName>{pageName}</PageName>
            <Hamburger  Hamicon={Hamicon} onClick={()=>{
            setOpenMenu(!openMenu);
            }}>
            <img src="/Hamburger.png"/></Hamburger>
            
            <MenuWrapper openMenu={openMenu}>
                <SideMenu 
                username={user.username}
                userphoto={user.profile_photo}
                onClick={()=>{
                setOpenMenu(!openMenu);
        }} />
            </MenuWrapper>
    </TopBarWrapper>
}

Topbar.defaultProps = {
    pageName:"Page Name",
}

export default Topbar;