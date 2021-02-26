import React from 'react';
import styled from 'styled-components';

const SideMenuContainer = styled.div`
    width:200px;
    height:100%;
    background-color:#92BFB1;
`;

const Sidemenu = ({onClick}) => {
    return <SideMenuContainer onClick={onClick}>
        SideMenu
    </SideMenuContainer>
}

Sidemenu.defaultProps = {


}

export default Sidemenu;