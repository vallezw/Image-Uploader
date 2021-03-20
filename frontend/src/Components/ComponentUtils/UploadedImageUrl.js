import React from 'react'
import { CopyBlock, atomOneDark} from "react-code-blocks";

import './Css/UploadedImageUrl.css';

function UploadedImageUrl() {
    return (
        <div className="blockContainer">
            <CopyBlock
                text={"http://localhost:3000/upload/CZakY4b0V.jpg"}
                language={"text"}
                wrapLines
                showLineNumbers={false}
                theme={atomOneDark}
                className="block"
            />
        </div>
    )
}

export default UploadedImageUrl
