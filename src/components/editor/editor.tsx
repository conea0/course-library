'use client';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/ext-language_tools";

export const Editor = () => {
    function onChange(newValue: any) {
        console.log("change", newValue);
    }
    return (
        <AceEditor
        mode="python"
        theme="crimson_editor"
        onChange={onChange}
        enableLiveAutocompletion={true}
        name="editor"
        width="100%"
      />
    )
}
