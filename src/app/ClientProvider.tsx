"use client";
import React, { ReactNode, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import { ConfigProvider } from "antd";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              colorPrimary: "#28948D",
              colorPrimaryHover: "#28948D",
              lineHeight: 3,
              borderRadius: 20,
              colorPrimaryBg: "#F9F9F9",
              colorBgContainer: "#F9F9F9",
            },
            Select: {
              colorPrimary: "#28948D",
              colorPrimaryHover: "#28948D",
              borderRadius: 20,
              colorBgContainer: "#F9F9F9",
              controlHeight: 44,
              optionSelectedBg: "#28948D",
              optionSelectedColor: "#fff",
            },
            InputNumber: {
              colorPrimary: "#28948D",
              colorPrimaryHover: "#28948D",
              colorBgContainer: "#F9F9F9",
              lineHeight: 3,
              borderRadius: 20,
            },
            Button: {
              colorPrimary: "#28948D",
              colorPrimaryHover: "#28948D",
              colorPrimaryActive: "#28948D",
              lineWidth: 10,
            },
          },
        }}
      >
        {children}
        <Toaster />
      </ConfigProvider>
    </React.Fragment>
  );
};

export default ClientProvider;
