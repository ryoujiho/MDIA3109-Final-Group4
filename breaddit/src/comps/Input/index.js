import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputCont = styled.input`
    min-height: 42px;
    min-width: 300px;
    margin-top: 4px;
    border-radius: 5px;
    ::placeholder{
        font-size: 18px;
        color: #C4C4C4} ;
    border:solid 1px #DDD9D9;
`;


const Input = ({placeholder, catchInput, type}) => {
    return <div>
        <InputBox>
            <InputCont placeholder={placeholder} onChange={catchInput} type={type}/>
        </InputBox>
    </div>
}

Input.defaultProps = {
    userphoto: "public/UserIcon.png",
    placeholder: 'Add a comment',
    type: "text"
}

export default Input;

