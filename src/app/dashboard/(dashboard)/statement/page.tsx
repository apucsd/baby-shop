"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const StatementPage = () => {
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 500,
      background: "#fff",
    },
  };
  return (
    <div>
      <div>
        <JoditEditor
          value={content}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(_newContent) => {}}
        />
        <div className="my-5  flex items-center justify-center">
          <Button
            icon={<AiOutlinePlus />}
            htmlType="submit"
            style={{
              width: 200,
              height: 42,
              background: "#28948D",
              color: "#ffffff",
            }}
            type="primary"
          >
            Add Statement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatementPage;
