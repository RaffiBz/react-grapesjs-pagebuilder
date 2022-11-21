import gjsBlocksBasic from "grapesjs-blocks-basic";

const GrapesjsConfig = () => {
  return {
    container: "#gjs",
    fromElement: true,
    width: "auto",
    plugins: [gjsBlocksBasic],
    pluginsOpts: {
      gjsBlocksBasic: {},
    },
    blockManager: {
      appendTo: "#blocks",
    },
    layerManager: {
      appendTo: "#layer-container",
    },
    styleManager: {
      appendTo: "#style-view",
    },
    panels: {
      defaults: [
        {
          id: "basic-actions",
          el: ".panel__basic-actions",
          buttons: [
            {
              id: "visibility",
              active: true, // active by default
              className: "btn-toggle-borders",
              label: '<span class="">Border</span>',
              command: "sw-visibility", // Built-in command
            },
            {
              id: "export",
              className: "btn-open-export",
              label: "Exp",
              command: "export-template",
              context: "export-template", // For grouping context of buttons from the same panel
            },
            {
              id: "show-json",
              className: "btn-show-json",
              label: "JSON",
              context: "show-json",
              command(editor) {
                editor.Modal.setTitle("Components JSON")
                  .setContent(
                    `<textarea style="width:100%; height: 250px;">
                    ${JSON.stringify(editor.getComponents())}
                  </textarea>`
                  )
                  .open();
              },
            },
          ],
        },
        {
          id: "panel-devices",
          el: ".panel__devices",
          buttons: [
            {
              id: "device-desktop",
              label: '<span class="">Desktop</span>',
              command: "set-device-desktop",
              active: true,
              togglable: false,
            },
            {
              id: "device-mobile",
              label: "Mobile",
              command: "set-device-mobile",
              togglable: false,
            },
            {
              id: "device-tablet",
              label: "Tablet",
              command: "set-device-tablet",
              togglable: false,
            },
          ],
        },
      ],
    },
    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "", // default size
        },
        {
          name: "Mobile",
          width: "320px", // this value will be used on canvas width
          widthMedia: "480px", // this value will be used in CSS @media
        },
        {
          name: "Tablet",
          width: "768px", // this value will be used on canvas width
          widthMedia: "810px", // this value will be used in CSS @media
        },
      ],
    },
    storageManager: {
      type: "local",
      options: {
        local: { key: `gjsProject-1` },
      },
    },
  };
};

export default GrapesjsConfig;
