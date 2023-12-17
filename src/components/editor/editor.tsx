'use client';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/ext-language_tools";
import React, {ChangeEvent, useState} from "react";
import { Pyscript } from "../pyscript/pyscript";
export const Editor = () => {
    const [inputCode, setInputCode] = useState('')

    function onChange(newValue: any) {
        setInputCode(newValue)
    }
    return (
        <div>
            <AceEditor
            mode="python"
            theme="crimson_editor"
            onChange={onChange}
            enableLiveAutocompletion={true}
            name="editor"
            width="100%"
          />

        <Pyscript inputCode={inputCode} />
        </div>
    )
}
