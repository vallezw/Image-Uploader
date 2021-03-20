import React from 'react'
import { CopyBlock, atomOneDark} from "react-code-blocks";

import './Css/UploadedImageUrl.css';

function UploadedImageUrl() {
    return (
        <div className="blockContainer">
            <CopyBlock
                text={window.location.href}
                language={"text"}
                wrapLines
                showLineNumbers={false}
                highlight="1"
                theme={atomOneDark}
                className="block"
            />
        </div>
    )
}

export default UploadedImageUrl
