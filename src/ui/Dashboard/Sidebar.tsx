"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";

const Sidebar = () => {
  const path = usePathname();
  const [selectedKey, setSelectedKey] = useState("");

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

  return (
    <div className="px-4">
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
                    backgroundColor: "#1E412A",
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
      </Menu>
    </div>
  );
};

export default Sidebar;
