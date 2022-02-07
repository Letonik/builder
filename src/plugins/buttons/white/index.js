import grapesjs from "grapesjs";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("whiteButton", (editor, opts = {}) => {
  let options = {
    label: "White Button",
    name: "White Button",
    category: "Buttons",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
});
