import Editor from "@monaco-editor/react";
import { Button, Popover } from "@blueprintjs/core";

function App() {
  const onMount = (editor) => {
    editor.onDidFocusEditorText(() => {
      console.log("text focus!", {
        widgetFocus: editor.hasWidgetFocus(),
        textFocus: editor.hasTextFocus(),
      });
    });

    editor.onDidFocusEditorWidget(() => {
      console.log("widget focus!", {
        widgetFocus: editor.hasWidgetFocus(),
        textFocus: editor.hasTextFocus(),
      });
    });

    editor.onDidBlurEditorText(() => {
      console.log("text blur!", {
        widgetFocus: editor.hasWidgetFocus(),
        textFocus: editor.hasTextFocus(),
      });
    });

    editor.onDidBlurEditorWidget(() => {
      console.log("widget blur!", {
        widgetFocus: editor.hasWidgetFocus(),
        textFocus: editor.hasTextFocus(),
      });
    });
  };

  return (
    <div className="App">
      <div style={{border: "1px solid black", width: 500, height: 500}}>
        <Editor
          onMount={onMount}
          height="500px"
          width="500px"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
      <Popover position="bottom">
        <Button style={{marginTop: 20}}>Click me to open popover!</Button>
        <div>Wow, you open the popover. Now click onto the editor to see the bug!</div>
      </Popover>
    </div>
  );
}

export default App;
