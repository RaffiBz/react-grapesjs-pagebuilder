import React, { useEffect, useState } from "react";

import TextArea from "../assets/TextArea";
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import dynamicConfig from "../utils/grapesjsConfig";
import "./app.css";

const GrapesjsMain = () => {
  const [openTab, setOpenTab] = useState(1);

  const loadComponents = (editor) => {
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
    editor.Commands.add("set-device-tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
  };

  const projectData = (editor) => {
    editor.getProjectData();
  };

  const loadGrapeJs = async () => {
    const editor = await Grapesjs.init(dynamicConfig());
    editor.loadProjectData(projectData);
    loadComponents(editor);
  };

  useEffect(() => {
    loadGrapeJs();
  }, []);

  return (
    <>
      <div className="flex gap-4 pt-2 px-8">
        <div className="w-[20%] border border-lightGray rounded-[1.25rem]">
          <div className="bg-lightGray bg-opacity-10 items-center text-center py-4 px-4">
            <span className="text-darkBlue text-xl flex text-left">
              Page Builder
            </span>
            <TextArea
              dimensions="w-full mt-2"
              rows={2}
              textId="title"
              placeholder="Write title here"
              className="w-full border-dashed outline-none bg-transparent border border-lightGray focus:border-primary p-2 placeholder:text-lightGray text-title text-xs leading-[0.875rem] resize-none rounded-lg"
            />
            <TextArea
              dimensions="w-full mt-2"
              rows={4}
              textId="description"
              placeholder="Write short description"
              className="w-full border-dashed outline-none bg-transparent border border-lightGray focus:border-primary p-2 placeholder:text-lightGray text-title text-xs leading-[0.875rem] resize-none rounded-lg"
            />
          </div>
          <div className="bg-opacity-[0.15] py-6 px-4 rounded-b-[1.25rem]">
            <ul
              className="flex list-none justify-between flex-wrap flex-row mb-2"
              role="tablist"
            >
              <li
                className={`${
                  openTab === 1
                    ? "text-title border-b-primary"
                    : "text-grayBlue border-b-transparent"
                } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  data-target="#block"
                  href="#block"
                  role="tablist"
                >
                  block
                </a>
              </li>
              <li
                className={`${
                  openTab === 2
                    ? "text-title border-b-primary"
                    : "text-grayBlue border-b-transparent"
                } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  data-target="#trait"
                  href="#trait"
                  role="tablist"
                >
                  trait
                </a>
              </li>
              <li
                className={`${
                  openTab === 3
                    ? "text-title border-b-primary"
                    : "text-grayBlue border-b-transparent"
                } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  data-target="#style"
                  href="#link3"
                  role="tablist"
                >
                  style
                </a>
              </li>
            </ul>
            {/* tab content */}
            <div className={openTab === 1 ? "block" : "hidden"} id="block">
              <div id="blocks"></div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="trait">
              <div id="layer-container"></div>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="style">
              <div id="style-view"></div>
            </div>
          </div>
        </div>
        <div id="main-content" className="w-[80%] bg-white shadow-brandCard">
          <div className="w-full flex justify-between">
            <div className="panel__devices"></div>
            <div className="panel__basic-actions"></div>
          </div>
          <div id="gjs"></div>
        </div>
      </div>
    </>
  );
};

export default GrapesjsMain;
