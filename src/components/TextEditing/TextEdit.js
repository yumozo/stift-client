import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

const MenuBar = ({ editor, textObj }) => {
  const [textState, setTextState] = useState(textObj);

  const componentDidMount = () => {
    // get all entities - GET
  };
  const exportText = () => {
    // get all entities - GET
    fetch("http://localhost:5006/api/records", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5006",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .then((response) => {
        // setTextState({
        //   text: 'some text'
        // })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const create = (e) => {
    // add entity - POST
    e.preventDefault();
  };
  const update = (e) => {
    // update entity - PUT
    e.preventDefault();
  };
  const remove = (e) => {
    // delete entity - DELETE
    e.preventDefault();
  };
  const handleChange = (changeObject) => {
    setTextState(changeObject);
  };
  const saveChanges = async (e) => {
    // const response = await fetch('http://localhost:5006/api/records', {
    //   method: 'PUT',
    //   body: JSON.stringify({ text }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const data = await response.json()
    // console.log(data)
  };

  if (!editor) return null;

  return (
      <div className="flex flex-row text-editor-buttons pb-4 text-sm justify-between">
        <div>
          <button onClick={() => editor.chain().focus().undo().run()}>
            <ChevronDoubleLeftIcon className="h-4 w-4" />
          </button>
          <button onClick={() => editor.chain().focus().redo().run()}>
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </button>
        </div>
        <div>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive("bg-yellow-400") ? "is-active" : ""}
          >
            duplicate
          </button>
          <button onClick={(e) => update(e)} id="save-button">
            save
          </button>
          <button onClick={() => exportText()} id="export-button">
            export
          </button>
        </div>
      </div>
  );
};

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, BubbleMenu],
    content: `
      bla-bla
    `,
  });

  return (
    <>
      <div className="border-2 border-gray-400/20 px-4 py-2 bg-white">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
};
