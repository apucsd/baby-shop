import { Form, Input, Button, Upload, ConfigProvider, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";

const BlogUploadForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {/* Product Name */}
      <ConfigProvider
        theme={{
          components: {
            Upload: {
              colorPrimary: "#1E412A",
              colorBorder: "#1E412A",
            },
          },
        }}
      >
        <Form.Item
          label="Image"
          name="productImage"
          rules={[{ required: true, message: "Please upload a blog image" }]}
        >
          <Upload listType="picture-card">Upload</Upload>
        </Form.Item>
      </ConfigProvider>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the blog title" }]}
      >
        <Input placeholder="Enter blog title" />
      </Form.Item>
      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Please enter the author name" }]}
      >
        <Input placeholder="Enter blog author name" />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please select a date" }]}
      >
        <DatePicker
          style={{
            height: 42,
            width: "100%",
          }}
        />
      </Form.Item>

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
      ></ConfigProvider>
      {/* Submit Button */}
      <Form.Item>
        <Button
          htmlType="submit"
          style={{
            width: "100%",
            height: 42,
          }}
          type="primary"
        >
          Add Blog
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogUploadForm;
