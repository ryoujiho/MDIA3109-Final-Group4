import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;

// const InputLabel = styled.label`
//     font-family: Roboto;
//     font-size: 18px;
//     color: #676767;
// `;

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


const Input = ({placeholder}) => {
    return <div>
        <InputBox>
            {/* <InputLabel>{text}</InputLabel> */}
            <InputCont placeholder={placeholder}/>
        </InputBox>
    </div>
}

Input.defaultProps = {
    userphoto: "public/UserIcon.png",
    placeholder: 'Add a comment'
}

export default Input;

