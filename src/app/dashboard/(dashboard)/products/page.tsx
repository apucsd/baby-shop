"use client";
import { Button, ConfigProvider, Flex, Table } from "antd";
import Title from "antd/es/typography/Title";
import { PlusOutlined } from "@ant-design/icons";
import { babyProducts } from "@/constant";
import { TBabyProduct } from "@/types";
import Image from "next/image";
import Modal from "@/ui/shared/Modal";
import { useState } from "react";
import AddProductForm from "@/ui/form/AddProductForm";
import { FiEdit } from "react-icons/fi";

const ProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const columns = [
    {
      title: "S.No",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",

      render: (_: any, product: TBabyProduct, index: number) => {
        return (
          <div className="flex items-center gap-2" key={index}>
            <Image
              className="rounded-full size-[35px]"
              height={50}
              width={50}
              src={product.imageUrl}
              alt="product"
            />
            <h1 className="font-semibold">{product.name}</h1>
          </div>
        );
      },
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",

      textAlign: "center",
      render: (stock: boolean) => (
        <>
          {stock ? (
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              In Stock
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              Out of Stock
            </span>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",

      textAlign: "center",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (_: any, _product: TBabyProduct, index: number) => {
        return (
          <div>
            <button>
              <FiEdit
                className="text-primary/40 hover:text-primary cursor-pointer"
                size={20}
              />
            </button>
          </div>
        );
      },
    },
  ];

  const handleAddProduct = (values: any) => {
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
            All Products
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
            Add Product
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
        <Table columns={columns} dataSource={babyProducts} />
      </ConfigProvider>

      <Modal
        title="Add Product"
        open={openModal}
        setOpen={setOpenModal}
        key={"addProduct"}
        width={600}
        body={<AddProductForm onFinish={handleAddProduct} />}
      />
    </div>
  );
};

export default ProductPage;
