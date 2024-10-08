"use client";
import { Button, ConfigProvider, Flex, Table } from "antd";
import Title from "antd/es/typography/Title";
import { PlusOutlined } from "@ant-design/icons";

import Image from "next/image";
import Modal from "@/ui/shared/Modal";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import BlogUploadForm from "@/ui/form/BlogUploadForm";
const blogData = [
  {
    id: 1,
    title: "5 Ways to 'Spring Clean' Your Health",
    author: "Codazon Group",
    date: "2024-08-01",
    imageUrl:
      "https://blog.pamperedchef.ca/wp-content/uploads/2020/05/featured-baby-food.jpg",
  },
  {
    id: 2,
    title: "The Benefits of Organic Baby Food",
    author: "Cove Valley Organics",
    date: "2024-07-15",
    imageUrl: "https://example.com/image2.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Healthy Feeding Tips for Toddlers",
    author: "Nutrition Expert",
    date: "2024-06-20",
    imageUrl: "https://example.com/image3.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Introducing Solids: A Parent's Guide",
    author: "Parenting Tips",
    date: "2024-05-10",
    imageUrl: "https://example.com/image4.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    title: "Understanding Baby Nutrition: Key Facts",
    author: "Health Guru",
    date: "2024-04-25",
    imageUrl: "https://example.com/image5.jpg", // Replace with actual image URL
  },
];

const BlogPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const columns = [
    {
      title: "S.No",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",

      render: (
        _: any,
        blog: { title: string; imageUrl: string },
        index: number
      ) => {
        return (
          <div className="flex items-center gap-2" key={index}>
            <Image
              className="rounded-full size-[35px]"
              height={50}
              width={50}
              src={blog.imageUrl}
              alt="blog thumbnail"
            />
            <h1 className="font-semibold">{blog.title}</h1>
          </div>
        );
      },
    },

    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => (
        <span className="text-gray-600">
          {new Date(date).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",

      textAlign: "center",
      render: (_: any, blog: { id: number }, index: number) => {
        return (
          <div key={index}>
            <button>
              <FiTrash
                className="text-red-500 
                 cursor-pointer"
                size={20}
              />
            </button>
          </div>
        );
      },
    },
  ];

  const handleUploadBlog = (values: any) => {
    console.log("Form Submitted", values);
    setOpenModal(false);
  };
  return (
    <div>
      <Flex vertical={false} gap={10} align="center" justify="space-between">
        <div>
          <Title
            style={{
              color: "#28948D",
            }}
            level={2}
          >
            All Blogs
          </Title>
        </div>

        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Button
            onClick={() => setOpenModal(true)}
            style={{
              width: 150,
              height: 42,
              background: "#28948D",
              color: "#ffffff",
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            Upload Blog
          </Button>
        </div>
      </Flex>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#28948D",
              headerColor: "#ffffff",
              headerBorderRadius: 0,
            },
          },
        }}
      >
        <Table columns={columns} dataSource={blogData} />
      </ConfigProvider>

      <Modal
        title="Add Blog"
        open={openModal}
        setOpen={setOpenModal}
        key={"addBlog"}
        width={600}
        body={<BlogUploadForm onFinish={handleUploadBlog} />}
      />
    </div>
  );
};

export default BlogPage;
