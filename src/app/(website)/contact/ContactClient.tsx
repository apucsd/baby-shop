"use client";
import React from "react";
import { Form, Input } from "antd"; // Assuming you're using Ant Design for form elements
import Title from "@/ui/shared/Title"; // Import your Title component

const ContractClient = () => {
  return (
    <div className="container mx-auto my-10">
      <Title
        title="Contact Us"
        subtitle="We're here to help! Please fill out the form below."
      />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-primary font-semibold mb-4">
            Get in Touch
          </h2>
          <Form layout="vertical">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input placeholder="Enter your first name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input placeholder="Enter your last name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea placeholder="Enter your message" rows={4} />
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="bg-primary text-white rounded-md px-4 py-2"
              >
                Send Message
              </button>
            </Form.Item>
          </Form>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Cove Valley</strong>
          </p>
          <p className="text-gray-600">1910, Avenue du Sanctuaire</p>
          <p className="text-gray-600">Quebec (Quebec) G1E 3L2</p>
          <p className="text-gray-600 mt-4">
            <strong>Telephone:</strong> 1 418 663-7477
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> contact@covevalley.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContractClient;
