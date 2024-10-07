import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  ConfigProvider,
  Upload,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;

const AddProductForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {/* Product Name */}
      <ConfigProvider
        theme={{
          components: {
            Upload: {
              colorPrimary: "#28948D",
              colorBorder: "#28948D",
            },
          },
        }}
      >
        <Form.Item
          label="Image"
          name="productImage"
          rules={[{ required: true, message: "Please upload a product image" }]}
        >
          <Upload listType="picture-card">Upload</Upload>
        </Form.Item>
      </ConfigProvider>
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[{ required: true, message: "Please enter the product name" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      <div className="grid md:grid-cols-2 gap-3">
        <Form.Item
          label="Price ($)"
          name="price"
          rules={[
            { required: true, message: "Please enter the product price" },
            {
              type: "number",
              min: 0,
              message: "The price must be a positive number",
            },
          ]}
        >
          <InputNumber
            type="number"
            min={0}
            placeholder="Enter product price"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        {/* Category */}
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select a category">
            <Option value="diapers">Diapers</Option>
            <Option value="skin-care">Skin Care</Option>
            <Option value="toys">Toys</Option>
            <Option value="baby-gear">Baby Gear</Option>
          </Select>
        </Form.Item>
      </div>

      {/* Description */}
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please enter a product description" },
        ]}
      >
        <TextArea
          style={{
            width: "100%",
            resize: "none",
            borderRadius: 6,
            backgroundColor: "#F9F9F9",
          }}
          rows={3}
          placeholder="Enter product description"
        />
      </Form.Item>

      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorPrimary: "#28948D",
              colorPrimaryHover: "#28948D",
            },
          },
        }}
      >
        <Form.Item name="stock" valuePropName="checked">
          <Checkbox style={{ width: "100%" }}>Available in Stock</Checkbox>
        </Form.Item>
      </ConfigProvider>

      {/* Submit Button */}
      <Form.Item>
        <Button
          htmlType="submit"
          style={{
            width: "100%",
            height: 42,
            background: "#28948D",
            color: "#ffffff",
          }}
          type="primary"
        >
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
