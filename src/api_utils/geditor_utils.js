import { API_HOST } from ".";

export const styleManager = {
  appendTo: "#styles-container",
  sectors: [
    {
      name: "General",
      buildProps: [
        "float",
        "display",
        "position",
        "top",
        "right",
        "left",
        "bottom",
      ],
      properties: [
        {
          name: "Alignment",
          property: "float",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", className: "fa fa-times" },
            { value: "left", className: "fa fa-align-left" },
            { value: "right", className: "fa fa-align-right" },
          ],
        },
        { property: "position", type: "select" },
      ],
    },
    {
      name: "Dimension",
      open: false,
      buildProps: [
        "width",
        "flex-width",
        "height",
        "max-width",
        "min-height",
        "margin",
        "padding",
        "background-color"
      ],
      properties: [
        {
          id: "flex-width",
          type: "integer",
          name: "Width",
          units: ["px", "%"],
          property: "flex-basis",
          toRequire: 1,
        },
        {
          property: "margin",
          properties: [
            { name: "Top", property: "margin-top" },
            { name: "Right", property: "margin-right" },
            { name: "Bottom", property: "margin-bottom" },
            { name: "Left", property: "margin-left" },
          ],
        },
        {
          property: "padding",
          properties: [
            { name: "Top", property: "padding-top" },
            { name: "Right", property: "padding-right" },
            { name: "Bottom", property: "padding-bottom" },
            { name: "Left", property: "padding-left" },
          ],
        },
      ],
    },
    {
      name: "Typography",
      open: false,
      buildProps: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "text-align",
        "text-decoration",
        "text-shadow",
      ],
      properties: [
        { name: "Font", property: "font-family", defaults: "Futura PT", },
        { name: "Weight", property: "font-weight" },
        { name: "Font color", property: "color" },
        {
          property: "text-align",
          type: "radio",
          defaults: "left",
          list: [
            { value: "left", name: "Left", className: "fa fa-align-left" },
            {
              value: "center",
              name: "Center",
              className: "fa fa-align-center",
            },
            { value: "right", name: "Right", className: "fa fa-align-right" },
            {
              value: "justify",
              name: "Justify",
              className: "fa fa-align-justify",
            },
          ],
        },
        {
          property: "text-decoration",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", name: "None", className: "fa fa-times" },
            {
              value: "underline",
              name: "underline",
              className: "fa fa-underline",
            },
            {
              value: "line-through",
              name: "Line-through",
              className: "fa fa-strikethrough",
            },
          ],
        },
        {
          property: "text-shadow",
          properties: [
            { name: "X position", property: "text-shadow-h" },
            { name: "Y position", property: "text-shadow-v" },
            { name: "Blur", property: "text-shadow-blur" },
            { name: "Color", property: "text-shadow-color" },
          ],
        },
      ],
    },
    {
      name: "Decorations",
      open: false,
      buildProps: [
        "opacity",
        "border-radius",
        "border",
        "box-shadow",
        "background-bg",
      ],
      properties: [
        {
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
        {
          property: "border-radius",
          properties: [
            { name: "Top", property: "border-top-left-radius" },
            { name: "Right", property: "border-top-right-radius" },
            { name: "Bottom", property: "border-bottom-left-radius" },
            { name: "Left", property: "border-bottom-right-radius" },
          ],
        },
        {
          property: "box-shadow",
          properties: [
            { name: "X position", property: "box-shadow-h" },
            { name: "Y position", property: "box-shadow-v" },
            { name: "Blur", property: "box-shadow-blur" },
            { name: "Spread", property: "box-shadow-spread" },
            { name: "Color", property: "box-shadow-color" },
            { name: "Shadow type", property: "box-shadow-type" },
          ],
        },
        {
          id: "background-bg",
          property: "background",
          type: "bg",
        },
      ],
    },
    {
      name: "Extra",
      open: false,
      buildProps: ["transition", "perspective", "transform"],
      properties: [
        {
          property: "transition",
          properties: [
            { name: "Property", property: "transition-property" },
            { name: "Duration", property: "transition-duration" },
            { name: "Easing", property: "transition-timing-function" },
          ],
        },
        {
          property: "transform",
          properties: [
            { name: "Rotate X", property: "transform-rotate-x" },
            { name: "Rotate Y", property: "transform-rotate-y" },
            { name: "Rotate Z", property: "transform-rotate-z" },
            { name: "Scale X", property: "transform-scale-x" },
            { name: "Scale Y", property: "transform-scale-y" },
            { name: "Scale Z", property: "transform-scale-z" },
          ],
        },
      ],
    },
    {
      name: "Flex",
      open: false,
      properties: [
        {
          name: "Flex Container",
          property: "display",
          type: "select",
          defaults: "block",
          list: [
            { value: "block", name: "Disable" },
            { value: "flex", name: "Enable" },
          ],
        },
        {
          name: "Flex Parent",
          property: "label-parent-flex",
          type: "integer",
        },
        {
          name: "Wrap",
          property: "flex-wrap",
          type: "radio",
          defaults: "row",
          list: [
            {
              value: "wrap",
              name: "Wrap",
              title: "wrap",
            },
            {
              value: "wrap-reverse",
              name: "Wrap Reverse",
              title: "wrap-reverse",
            },
            {
              value: "nowrap",
              name: "No Wrap",
              title: "nowrap",
            },
          ],
        },
        {
          name: "Gap",
          property: "gap",
          type: "integer",
          units: ["px", "%", ""]
        },
        {
          name: "Direction",
          property: "flex-direction",
          type: "radio",
          defaults: "row",
          list: [
            {
              value: "row",
              name: "Row",
              title: "Row",
            },
            {
              value: "row-reverse",
              name: "Row rev",
              title: "Row reverse",
            },
            {
              value: "column",
              name: "Column",
              title: "Column",
            },
            {
              value: "column-reverse",
              name: "Column rev",
              title: "Column reverse",
            },
          ],
        },
        {
          name: "Justify",
          property: "justify-content",
          type: "radio",
          defaults: "flex-start",
          list: [
            {
              value: "flex-start",
              name: "start",
              title: "Start",
            },
            {
              value: "flex-end",
              name: "start",
              title: "End",
            },
            {
              value: "space-between",
              name: "between",
              title: "Space between",
            },
            {
              value: "space-around",
              name: "around",
              title: "Space around",
            },
            {
              value: "center",
              name: "center",
              title: "Center",
            },
          ],
        },
        {
          name: "Align",
          property: "align-items",
          type: "radio",
          defaults: "center",
          list: [
            {
              value: "flex-start",
              title: "Start",
              name: "start",
            },
            {
              value: "flex-end",
              title: "End",
              name: "end",
            },
            {
              value: "stretch",
              title: "Stretch",
            },
            {
              value: "center",
              title: "Center",
            },
          ],
        },
        {
          name: "Flex Children",
          property: "label-parent-flex",
          type: "integer",
        },
        {
          name: "Order",
          property: "order",
          type: "integer",
          defaults: 0,
          min: 0,
        },
        {
          name: "Flex",
          property: "flex",
          type: "composite",
          properties: [
            {
              name: "Grow",
              property: "flex-grow",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Shrink",
              property: "flex-shrink",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Basis",
              property: "flex-basis",
              type: "integer",
              units: ["px", "%", ""],
              unit: "",
              defaults: "auto",
            },
          ],
        },
        {
          name: "Align",
          property: "align-self",
          type: "radio",
          defaults: "auto",
          list: [
            {
              value: "auto",
              name: "Auto",
            },
            {
              value: "flex-start",
              title: "Start",
            },
            {
              value: "flex-end",
              title: "End",
            },
            {
              value: "stretch",
              title: "Stretch",
            },
            {
              value: "center",
              title: "Center",
            },
          ],
        },
      ],
    },
  ],
};

export const layerManager = {
  appendTo: "#layers-container",
};
export const traitManager = {
  appendTo: "#trait-container",
};
export const selectorManager = {
  appendTo: "#styles-container",
};
export const panels = {
  defaults: [
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: '<i class="fa fa-clone"></i>',
          command: "sw-visibility", // Built-in command
        },
      ],
    },
    {
      id: "editor-actions",
      el: ".panel__editor",
      buttons: [
        {
          id: "saveDb",
          className: "fa fa-paper-plane btn-save",
          command: "saveDb",
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
        },
        {
          id: "export",
          className: "fa fa-download",
          command: "export",
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: '<i class="fa fa-television"></i>',
          command: "set-device-desktop",
          active: true,
          togglable: false,
        },
        {
          id: "device-tablet",
          label: '<i class="fa fa-tablet"></i>',
          command: "set-device-tablet",
          togglable: false,
        },
        {
          id: "device-mobile",
          label: '<i class="fa fa-mobile"></i>',
          command: "set-device-mobile",
          togglable: false,
        },
      ],
    },
  ],
};
export const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "",
    },
    {
      name: "Tablet",
      width: "820px",
      widthMedia: "820px",
    },
    {
      name: "Mobile",
      width: "320px",
      widthMedia: "480px",
    },
  ],
};

export const addEditorCommand = (editor) => {
  // Commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });
  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("Tablet"),
  });
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  });

  // Save Button
  editor.Commands.add("saveDb", {
    run: (editor, sender) => {
      sender && sender.set("active");
      editor.store();
    },
  });

  //Clear Button
  editor.Commands.add("cmd-clear", {
    run: (editor) => {
      editor.DomComponents.clear();
      editor.CssComposer.clear();
    },
  });

  //Undo
  editor.Commands.add("undo", {
    run: (editor) => editor.UndoManager.undo(),
  });

  // Redo
  editor.Commands.add("redo", {
    run: (editor) => editor.UndoManager.redo(),
  });

  editor.Commands.add("export", {
    run: (editor) => editor.runCommand("gjs-export-zip"),
  });
};

export const storageSetting = (pageId) => {
  return {
    type: "remote",
    stepsBeforeSave: 3,
    contentTypeJson: true,
    storeComponents: true,
    storeStyles: true,
    storeHtml: true,
    storeCss: true,
    headers: {
      "Content-Type": "application/json",
    },
    id: "mycustom-",
    urlStore: `${API_HOST}pages/${pageId}/content`,
    urlLoad: `${API_HOST}pages/${pageId}/content`,
  };
};

export const scripts = [
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js",
  "https://unpkg.com/grapesjs",
  'https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js'
];
export const styles = [
  "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
  "https://unpkg.com/grapesjs/dist/css/grapes.min.css",
  'https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&subset=latin,latin-ext',
  'https://fonts.googleapis.com/css?family=Montserrat',
  "https://fonts.googleapis.com/css2?family=Pirata+One&display=swap",
];
