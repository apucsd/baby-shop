"use client";
import React from "react";
import { Form, Input } from "antd";
import Title from "@/ui/shared/Title";

const ContactClient = () => {
  return (
    <div className="container my-10">
      <Title
        title="Contact Us"
        subtitle="Don't hesitate to contact us! We will get back to you as soon as we can. In the meantime, we drink to your health!"
      />

      <div className="flex justify-between gap-10 mt-20">
        <div className="w-full">
          <h1 className="font-semibold mb-6 text-[20px]">CONTACT FORM</h1>

          <Form layout="vertical" className="grid grid-cols-12 gap-x-6">
            {/* First Name */}
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
              className="col-span-6"
            >
              <Input placeholder="Enter your first name" />
            </Form.Item>

            {/* Last Name */}
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
              className="col-span-6"
            >
              <Input placeholder="Enter your last name" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
              className="col-span-6"
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Subject */}
            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please enter the subject" }]}
              className="col-span-6"
            >
              <Input placeholder="Enter subject" />
            </Form.Item>

            {/* Message */}
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter a message" }]}
              className="col-span-12"
            >
              <Input.TextArea
                placeholder="Enter your message"
                style={{
                  width: "100%",
                  height: 150,
                  boxShadow: "none",
                  outline: "none",
                  border: "1px solid #E0E0E0",
                  borderRadius: 6,
                  resize: "none",
                  background: "#FEFEFE",
                  fontFamily: "Poppins, sans-serif",
                }}
                className=" placeholder:text-[#A2A3B1] placeholder:text-[14.4px] placeholder:leading-6 font-normal"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="col-span-12 w-full flex items-center justify-center">
              <button
                type="submit"
                className="bg-primary border-none outline-none shadow-none w-[200px] h-10 px-4 rounded-md text-[16px] font-medium text-white"
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>

        {/* Contact Information */}
        <div className="w-fit">
          <h1 className="uppercase font-semibold mb-6 text-[20px]">
            information&apos;s
          </h1>
          <h3 className="font-bold text-[18px]">Cove Valley</h3>
          <p className="whitespace-nowrap">1910, Avenue du Sanctuaire</p>
          <p>Quebec (Quebec) G1E 3L2</p>

          <h3 className="font-bold text-[18px] mt-6">Telephone</h3>
          <p>1 418 663-7477</p>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
