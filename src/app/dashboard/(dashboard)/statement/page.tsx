/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "antd";
import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

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
