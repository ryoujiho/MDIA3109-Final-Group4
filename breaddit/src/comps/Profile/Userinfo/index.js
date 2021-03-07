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
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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


const Userinfo = () => {
    return <div>
        <UserText>Username</UserText>
        <UserSmall>Since 22/12/25</UserSmall>
    </div>
}

Userinfo.defaultProps = {


}

export default Userinfo;