// CodeEditor.js
import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import "./css/fonts.css"; // 确保引入了包含 @font-face 规则的 CSS 文件

function CodeEditor({ editorState, setEditorState }) {
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className='text-area-SauceCodePro' style={{
      padding: "20px",
      border: '1px solid black',
      height: "80vh",
      fontFamily: "'Sauce Code Pro', monospace", // 使用新字体
    }}>
      <Editor editorState={editorState} onChange={onEditorStateChange} />
    </div>
  );
}

export default CodeEditor;
