import grapesjs from "grapesjs";
import $ from "jquery";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import grapesjsComponentCountdown from 'grapesjs-component-countdown'
import grapesjsSwiperSlider from 'grapesjs-swiper-slider'
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
import blackButton from "../plugins/buttons/black";
import gjsBlockBasic from "../plugins/mainBlock";
import whiteButton from "../plugins/buttons/white";
import animateButton from "../plugins/buttons/animate";

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
  const editorId = $("#editor")
  const panelTopBar = $("#main-content > .navbar-light");
  const sd = $("#sd");
  editorId.addClass("h96");

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
    assetManager: { assets: assets},
    storageManager: storageSetting(pageId),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      tailwindComponent,
      gjsBlockBasic,
      grapesjsPluginExport,
      grapesjsStyleBg,
      grapesjsComponentCountdown,
      grapesjsSwiperSlider,
      blackButton,
      whiteButton,
      /*animateButton*/
    ],
    pluginsOpts: {
      tailwindComponent: {},
      gjsBlockBasic: {},
      grapesjsPluginExport: {},
      grapesjsStyleBg: {},
      grapesjsComponentCountdown:{},
      grapesjsSwiperSlider: {},
      blackButton: {},
      whiteButton: {},
/*      animateButton: {}*/
    },
    baseCss: `
    * {
      box-sizing: border-box;
    }
    html, body, [data-gjs-type=wrapper] {
      min-height: 100%;
    }
    body {
      margin: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow-x: hidden;
    }
    [data-gjs-type=wrapper] {
      overflow: auto;
      overflow-x: hidden;
    }
    * ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1)
    }
    * ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2)
    }
    * ::-webkit-scrollbar {
      width: 10px
    }
  `,
  });

  addEditorCommand(editor);

  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    editor.stopCommand("sw-visibility");
    mainContent.removeClass("main-content");
    mainContent.addClass("wid100");
    navbar.addClass("d-none");
    panelTopBar.addClass("d-none");
    editorId.addClass("h100");
    editorId.removeClass("h96");
  });
  editor.on("stop:preview", () => {
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.removeClass("d-none");
    mainContent.addClass("main-content")
    mainContent.removeClass("wid100");
    panelTopBar.removeClass("d-none");
    editorId.addClass("h96");
    editorId.removeClass("h100");
  });

  const prop = editor.StyleManager.getProperty('typography', 'font-family');
  prop.set('options', [
    { value: 'Roboto, Arial, sans-serif', name: 'Roboto' },
    { value: 'Bodoni Cyrillic, sans-serif', name: 'Bodoni Cyrillic' },
    { value: 'Montserrat', name: 'Montserrat' },
    { value: 'Futura PT', name: 'Futura PT' },
    { value: 'Pirata One', name: 'Pirata One' },
  ]);
  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
