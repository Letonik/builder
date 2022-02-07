import grapesjs from "grapesjs";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("animateButton", (editor, opts = {}) => {
  let options = {
    label: "Animate Button",
    name: "Animate Button",
    category: "Buttons",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
});
