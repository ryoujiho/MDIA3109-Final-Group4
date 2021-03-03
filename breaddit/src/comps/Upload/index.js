import React from 'react';
import styled from 'styled-components';

const UploadButton = styled.button`
    width:314px;
    height:211px;
    border-radius:4px;
    border: 1px solid white;
    background:#D3D3D3;
    outline:none;
`;

const UploadImage = styled.div`

`;

const Upload = () => {
    return <div>
        <UploadButton>
            <UploadImage><img src="/upload.png"/></UploadImage>
        </UploadButton>
    </div>
}

Upload.defaultProps = {


}

export default Upload;