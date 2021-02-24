import React from 'react';
import styled from 'styled-components';


const TopBarWrapper = styled.div`
    width:100%;
    background-color:#92BFB1; /*just to indicate for now*/
    height:60px;
    padding:20px 0px 10px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
`;


const Topbar = () => {
    return <TopBarWrapper>
            Top Bar
    </TopBarWrapper>
}

Topbar.defaultProps = {


}

export default Topbar;