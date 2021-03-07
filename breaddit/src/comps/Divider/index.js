import React from 'react';
import styled from 'styled-components';

const CommInputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props =>props.width ? props.width : '350px'};
    height: ${props =>props.height ? props.height : '80px'};
    background: ${props =>props.bgcolor ? props.bgcolor : '#F8F8F8'};
`;

const WriterPhoto = styled.div`
    width:40px;
    height:40px;
    border-radius:50px;
    position: absolute;
    margin-right: 275px;
    border:4px solid #92BFB1;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50px;
    }
`;


const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;


const InputCont = styled.input`
    min-height: 42px;
    min-width: 250px;
    margin-top: 4px;
    margin-left: 50px;
    border-radius: 5px;
    ::placeholder{
        font-family: Roboto;
        font-size: 18px;
        color: #C4C4C4} ;
    border:solid 1px #DDD9D9;
`;


const CommInput = ({placeholder, userphoto}) => {
    return <div>
    <CommInputBox>
        <WriterPhoto><img src="UserIcon.png"/></WriterPhoto>
        <InputBox>
            <InputCont placeholder={placeholder}/>
        </InputBox>
    </CommInputBox>
    </div>
}

CommInput.defaultProps = {
    placeholder: 'Add a comment'
}

export default CommInput;

