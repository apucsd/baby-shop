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
              colorPrimary: "#1E412A",
              colorPrimaryHover: "#1E412A",
              lineHeight: 3,
              borderRadius: 20,
              colorPrimaryBg: "#F9F9F9",
              colorBgContainer: "#F9F9F9",
            },
            Select: {
              colorPrimary: "#1E412A",
              colorPrimaryHover: "#1E412A",
              borderRadius: 20,
              colorBgContainer: "#F9F9F9",
              controlHeight: 44,
              optionSelectedBg: "#1E412A",
              optionSelectedColor: "#fff",
            },
            InputNumber: {
              colorPrimary: "#1E412A",
              colorPrimaryHover: "#1E412A",
              colorBgContainer: "#F9F9F9",
              lineHeight: 3,
              borderRadius: 20,
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
