/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";
import Heading from "@/ui/shared/Heading";

const RegisterClient = () => {
  const [form] = Form.useForm();
  form.setFieldsValue(undefined);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    router.push("/");
  };

  return (
    <div className="border border-primary p-8  md:w-[600px]">
      <Heading
        name="Sign up"
        style="font-semibold text-[24px] leading-[32px] text-[#333333] text-center mb-6"
      />
      <p className="font-normal text-[14px] leading-[14px] text-[#5C5C5C] text-center mb-6">
        Please Enter Your Personal Data
      </p>

      <Form
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
        className="grid grid-cols-12 gap-6"
      >
        <Form.Item
          name="name"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              User Name
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter Your Name!",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input
            placeholder="Enter Your Name"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
            className="poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Email
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter Email!",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input
            placeholder="Enter Email"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
            className="poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6"
          />
        </Form.Item>

        <Form.Item
          name="contact"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Contact No
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter Contact No!",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input
            placeholder="Enter Contact No"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
            className="poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6"
          />
        </Form.Item>

        <Form.Item
          name="location"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Permanent Address
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter location!",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input
            placeholder="Enter Your Location"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
            className="poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6"
          />
        </Form.Item>

        <Form.Item
          name="nid"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              NID No
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter NID Number!",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input
            placeholder="Enter Your NID Number"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
            className="poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6"
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Gender
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Select Your Gender",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6 customSelect"
        >
          <Select
            placeholder="Select Your Gender"
            style={{
              height: 48,
              borderRadius: 24,
            }}
            suffixIcon={
              <div className="w-10 h-10 rounded-full bg-[#E6F2F5] flex items-center justify-center">
                <ChevronDown size={24} color="#00809E" />
              </div>
            }
          >
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Password
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter Password",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input.Password
            placeholder="Enter Password"
            className="placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <p className="font-medium text-[16px] leading-6 text-[#636363]">
              Confirm Password
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please Enter Confirm Password",
            },
          ]}
          style={{ marginBottom: 0 }}
          className="col-span-6"
        >
          <Input.Password
            placeholder="Enter Confirm Password"
            className="placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
            style={{
              width: "100%",
              height: 48,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 24,
              background: "#FEFEFE",
            }}
          />
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: 0,
          }}
          className="col-span-12"
        >
          <Button
            htmlType="submit"
            type="primary"
            style={{
              width: 150,
              height: 42,
              //   background: "#00809E",
              color: "#ffffff",
            }}
          >
            {"Sign up"}
          </Button>
        </Form.Item>

        <p className="text-[#636363] col-span-12 text-[16px] leading-[21px] font-normal text-center">
          Have any account?
          <Link className="ml-2" href={"/login"}>
            <span className="text-primary cursor-pointer font-semibold">
              Login
            </span>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterClient;
