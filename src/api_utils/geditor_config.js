import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import grapesjsComponentCountdown from 'grapesjs-component-countdown'
import grapesjsSwiperSlider from 'grapesjs-swiper-slider'
import grapesJSMJML from 'grapesjs-mjml'

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
/*      grapesJSMJML,*/
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
      /*grapesJSMJML: {
        fonts: {
          Montserrat: 'https://fonts.googleapis.com/css?family=Montserrat',
          'Open Sans': 'https://fonts.googleapis.com/css?family=Open+Sans'
        }
      }*/
/*      animateButton: {}*/
    },
  });
/*  editor.on('load', () => {
    let styleManager = editor.StyleManager;
    let fontProperty = styleManager.getProperty('typography', 'font-family');

    let list = [];
    // empty list
    fontProperty.set('list', list);

    // custom list
    list.push(fontProperty.addOption({value: 'Montserrat, sans-serif', name: 'Montserrat'}));
    list.push(fontProperty.addOption({value: 'Open Sans, sans-serif', name: 'Open Sans'}));
    fontProperty.set('list', list);

    styleManager.render();
  });*/
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

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
