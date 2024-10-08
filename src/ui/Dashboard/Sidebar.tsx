"use client";
import { ConfigProvider, Menu, Modal } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiOutlineExclamation, AiOutlineFileText } from "react-icons/ai";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { Newspaper } from "lucide-react";
import { CiLogin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

const Sidebar = () => {
  const path = usePathname();
  const [selectedKey, setSelectedKey] = useState("");
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      key: "/dashboard/products",
      icon: <FaProductHunt size={24} />,
      label: "Products",
      link: "/dashboard/products",
    },
    {
      key: "/dashboard/stories",
      icon: <MdDashboard size={24} />,
      label: "Stories",
      link: "/dashboard/stories",
    },
    {
      key: "/dashboard/statement",
      icon: <AiOutlineFileText size={24} />,
      label: "Statement",
      link: "/dashboard/statement",
    },
    {
      key: "/dashboard/Blogs",
      icon: <Newspaper size={24} />,
      label: "Blogs",
      link: "/dashboard/blogs",
    },
    {
      key: "/dashboard/faq",
      icon: <RiQuestionnaireLine size={24} />,
      label: "FAQ",
      link: "/dashboard/faq",
    },
    {
      key: "/dashboard/about",
      icon: <FiInfo size={24} />,
      label: "About",
      link: "/dashboard/about",
    },
  ];

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className="px-4">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHoverColor: "#fff",
              motionDurationFast: "0.9s",
              motionDurationSlow: "0.1s",
              itemHoverBg: "#28948D",
              colorPrimary: "#28948D",
            },
          },
        }}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ borderRightColor: "transparent" }}
        >
          {menuItems.map((item) => (
            <Menu.Item
              className="truncate"
              key={item.key}
              icon={item.icon}
              style={
                selectedKey === item.key
                  ? {
                      backgroundColor: "#28948D",
                      height: 42,
                      color: "white",
                      marginBottom: "8px",
                    }
                  : { marginBottom: "16px" }
              }
            >
              <Link
                className="my-3 truncate"
                href={item.link}
                style={{ color: selectedKey === item.key ? "white" : "" }}
              >
                {item.label}
              </Link>
            </Menu.Item>
          ))}

          <Menu.Item onClick={showModal} key={"logOut"}>
            <div className="flex items-center gap-3 my-3 truncate">
              <CiLogin className="flex-1" size={24} />
              <span> Log Out</span>
            </div>
          </Menu.Item>
        </Menu>
      </ConfigProvider>

      <Modal
        centered
        width={400}
        closable={false}
        footer={null} // Hides default footer
        open={open}
        onCancel={hideModal}
        className="bg-transparent relative"
      >
        <div className="bg-white pb-10 rounded-lg p-3 space-y-2 text-center flex flex-col justify-center">
          <p>
            <AiOutlineExclamation className="text-primary border-primary border size-12 text-center mx-auto rounded-full" />
          </p>
          <p className="text-lg text-gray-600">Are you sure you want to log?</p>
          <p className="text-gray-400">You have to login again </p>

          <div className="flex justify-end absolute bottom-4 -right-8">
            <button
              onClick={hideModal}
              className=" text-gray-700 px-4 py-2 rounded-md  transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={hideModal}
              className="bg-primary flex items-center gap-4 text-white px-2 py-2 rounded-md hover:bg-primary-dark transition duration-200"
            >
              Logout
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
