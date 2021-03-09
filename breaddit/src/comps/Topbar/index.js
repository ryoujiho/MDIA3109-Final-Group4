import React, {useState} from 'react';
import styled from 'styled-components';
import SideMenu from 'comps/Sidemenu';


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

const Topbar = ({pageName, back, Hamicon}) => {
    const [openMenu, setOpenMenu] = useState(false);

    return <TopBarWrapper>
            <Back back={back}><img src="/back.png"/></Back>
           <PageName>{pageName}</PageName>
            <Hamburger  Hamicon={Hamicon} onClick={()=>{
            setOpenMenu(!openMenu);
            }}>
            <img src="/Hamburger.png"/></Hamburger>
            
            <MenuWrapper openMenu={openMenu}>
                <SideMenu onClick={()=>{
            setOpenMenu(!openMenu);
        }} />
            </MenuWrapper>
    </TopBarWrapper>
}

Topbar.defaultProps = {
    pageName:"Page Name"
}

export default Topbar;