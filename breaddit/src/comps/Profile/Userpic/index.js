import React from 'react';
import styled from 'styled-components';

const UserPicIcon = styled.div`
    width:111px;
    height:111px;
    border-radius:100%;
    background:#C4C4C4;
`;

const UserUnderline = styled.div`
    width:98px;
    height:0px;
    border: 2px solid #92BFB1;
`

const Userpic = () => {
    return <div>
        <UserPicIcon></UserPicIcon>
        <UserUnderline></UserUnderline>
    </div>
}

Userpic.defaultProps = {


}

export default Userpic;