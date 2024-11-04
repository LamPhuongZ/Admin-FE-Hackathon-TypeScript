import React from "react";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input } from "antd";

type FieldType = {
   skill?: string;
   description?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
   console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
   console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
   const [formCreate] = Form.useForm();

   return (
      <Form
         form={formCreate}
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
         style={{ maxWidth: 600 }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="off"
      >
         <Form.Item<FieldType>
            label="Kỹ năng"
            name="skill"
            rules={[{ required: true, message: "Vui lòng không bỏ trống !" }]}
         >
            <Input />
         </Form.Item>

         <Form.Item<FieldType>
            label="Mô tả kỹ năng"
            name="description"
            rules={[{ required: true, message: "Vui lòng không bỏ trống !" }]}
         >
            <Input.TextArea rows={6} />
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Flex gap="small">
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
               <Button danger onClick={() => formCreate.resetFields()}>
                  Reset
               </Button>
            </Flex>
         </Form.Item>
      </Form>
   );
};

export default App;
