import React from 'react';
import styled from 'styled-components';

const UserText = styled.div`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 48px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
color: #F4AC45;
`;

const UserSmall = styled.div`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #0B0B09;

`


const Userinfo = ({username,usertime}) => {
    return <div>
        <UserText>{username}</UserText>
        <UserSmall>{usertime}</UserSmall>
    </div>
}

Userinfo.defaultProps = {
    username:"Username",
    usertime:"Since 22/12/25"
}

export default Userinfo;