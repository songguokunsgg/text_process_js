import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor'; // 确保路径正确
import { EditorState, ContentState } from 'draft-js';
import { invoke } from '@tauri-apps/api'


function App() {

  invoke("greet", {name: "world"}).then((response) => {
	console.log(response);
  })

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText("t = t.toUpperCase()"))
  );
  const [originalText, setOriginalText] = useState("Hello World!");
  const [processedText, setProcessedText] = useState("");

  useEffect(() => {
    try {
      const currentContent = editorState.getCurrentContent();
      const functionBody = "t = originalText\n" + currentContent.getPlainText() + "\nreturn t";
      const processFunction = new Function("originalText", functionBody);
      const result = processFunction(originalText);
      setProcessedText(result.toString());
    } catch (error) {
      setProcessedText(`Error: ${error.message}`);
    }
  }, [originalText, editorState]);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ flex: 0.8, display: "flex", flexDirection: "column" }}> {/* 确保编辑器部分有足够的宽度 */}
        <div style={{ marginBottom: "10px" }}>
          输入你的 JavaScript 代码
          <br></br>
          你输入的文本变量为 t
          <br></br>
          请直接操作 t 即可，不用 return 返回任何值
        </div>
        <CodeEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px" }}>
        <textarea
          placeholder="请输入你要处理的文本"
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          style={{ flex: 1, marginBottom: "10px" }}
        />
        <textarea
          value={processedText}
          readOnly
          style={{ flex: 1, background: "lightgrey" }}
        />
      </div>
    </div>
  );
}

export default App;
