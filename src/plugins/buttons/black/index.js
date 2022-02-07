import grapesjs from "grapesjs";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("blackButton", (editor, opts = {}) => {
  let options = {
    label: "Black Button",
    name: "Black Button",
    category: "Buttons",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
});
