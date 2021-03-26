import React from 'react';
import styled from 'styled-components';

const CommInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height:auto;
    max-height:80px;
    background: #F8F8F8;
    padding: 10px 0px;
`;

const WriterPhoto = styled.div`
    width:40px;
    height:40px;
    border-radius:50px;
    margin-left:10px;
    border:4px solid #92BFB1;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50px;
    }
`;

const InputCont = styled.input`
    border-radius: 4px;
    width:60%;
    padding:10px 0px;
    border: solid 1px #DDD9D9;
    ::placeholder{
        font-family: lato;
        font-size: 14px;
        color: #C4C4C4;
        padding-left:5px;
    } ;

`;

const Commbtn = styled.button`
    padding: 0;
    border: none;
    background-color: #92BFB1;
    padding:10px 5px;
    margin-right:10px;
`;



const CommInput = ({placeholder, userphoto, onChange, onClick}) => {
    return <CommInputBox>
                <WriterPhoto><img src={userphoto}/></WriterPhoto>
                <InputCont placeholder={placeholder} onChange={onChange}/>
                <Commbtn onClick={onClick}>Comment</Commbtn>
            </CommInputBox>
}

CommInput.defaultProps = {
    placeholder: 'Add a comment'
}

export default CommInput;

