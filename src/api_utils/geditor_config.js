import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";

import {
  addEditorCommand,
  deviceManager,
  layerManager,
  panels,
  scripts,
  selectorManager,
  storageSetting,
  styleManager,
  styles,
  traitManager,
} from "./geditor_utils";
import tailwindComponent from "../plugins/tailwind";
import swiperComponent from "../plugins/swiper";

const geditorConfig = (assets, pageId) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");

  // Content for Preview
  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");
  const sd = $("#sd");

  const editor = grapesjs.init({
    container: "#editor",
    blockManager: {
      appendTo: "#blocks",
    },
    styleManager: styleManager,
    layerManager: layerManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    assetManager: { assets: assets, upload: false },
    storageManager: storageSetting(pageId),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      tailwindComponent,
      gjsBlockBasic,
      swiperComponent,
      grapesjsPluginExport,
      grapesjsStyleBg,
    ],
    pluginsOpts: {
      tailwindComponent: {},
      gjsBlockBasic: {},
      swiperComponent: {},
      grapesjsPluginExport: {},
      grapesjsStyleBg: {},
    },
  });

  addEditorCommand(editor);

  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    editor.stopCommand("sw-visibility");
    mainContent.removeClass("main-content");
    mainContent.addClass("wid100");
    navbar.addClass("d-none");
    panelTopBar.addClass("d-none");
  });
  editor.on("stop:preview", () => {
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.removeClass("d-none");
    mainContent.addClass("main-content")
    mainContent.removeClass("wid100");
    panelTopBar.removeClass("d-none");
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
