import React from 'react';
import styled from 'styled-components';

const UploadButton = styled.input`
    width:100%;
    height:211px;
    border-radius:4px;
    background:#92BFB1;
    outline:none;
`;

const Upload = ({filename, onChange}) => {
    return <UploadButton 
             id='file-input' 
             type="file" 
             accept="image/*" 
             filename={filename}
             onChange={onChange} />
}

Upload.defaultProps = {


}

export default Upload;