import React from 'react';
import styled from 'styled-components';

const UploadButton = styled.input`
    width:314px;
    height:211px;
    border-radius:4px;
    background:#D3D3D3;
    outline:none;
`;

const UploadImage = styled.div`

`;

const Upload = ({filename, onChange}) => {
    return <UploadButton 
            type="file" 
            accept="image/*" 
            filename={filename} 
            onchange={onChange}
            >

        </UploadButton>
}

Upload.defaultProps = {


}

export default Upload;