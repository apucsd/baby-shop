"use client";
import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { PlusOutlined } from "@ant-design/icons";

import Modal from "@/ui/shared/Modal";
import { useState } from "react";
import AddFaqForm from "@/ui/form/AddFaqForm";
import { faqData } from "@/constant";
import { FiEdit, FiTrash } from "react-icons/fi";
import EditFaqForm from "@/ui/form/EditFaqForm";

const FaqPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setEditModal] = useState(false);

  const handleAddFaq = (values: any) => {
    console.log("Form Submitted", values);
    setOpenModal(false);
  };

  const handleEdit = (index: number) => {
    // Logic for editing the FAQ
    console.log(`Edit FAQ at index: ${index}`);
  };

  const handleDelete = (index: number) => {
    // Logic for deleting the FAQ
    console.log(`Delete FAQ at index: ${index}`);
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
            Frequently Asked Questions
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
            Add FAQ
          </Button>
        </div>
      </Flex>

      <div className="space-y-6 my-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 relative"
          >
            <h3 className="text-xl  text-primary mb-2">{faq.question}</h3>
            <p className="text-primary/60 mb-4">{faq.answer}</p>

            {/* Edit and Delete Icons */}
            <div className="absolute top-4 right-4 flex space-x-3">
              <FiEdit
                className="text-primary/40 hover:text-primary cursor-pointer"
                size={20}
                onClick={() => setEditModal(true)}
              />
              <FiTrash
                className="text-primary/40 hover:text-red-600 cursor-pointer"
                size={20}
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Add Faq"
        open={openModal}
        setOpen={setOpenModal}
        key={"faqAdd"}
        width={600}
        body={<AddFaqForm onFinish={handleAddFaq} />}
      />
      <Modal
        title="Edit Faq"
        open={openEditModal}
        setOpen={setEditModal}
        key={"editFaq"}
        width={600}
        body={<EditFaqForm onFinish={handleEdit} />}
      />
    </div>
  );
};

export default FaqPage;
