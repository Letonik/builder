import React, {useEffect, useState} from 'react';
import grapesjs from "grapesjs";
import gjsPresentWebpage from "grapesjs-preset-webpage";
import './styles/main.scss'
import {useParams} from "react-router-dom";

const Editor = () => {

  const [editor, setEditor] = useState(null)
  const {pageId} = useParams()
  console.log(pageId + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!')

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [gjsPresentWebpage],
      pluginsOpts: {
        gjsPresentWebpage:{},
      }
    })
    setEditor(editor)
  },[])

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default Editor;