import { Form, Input, Select, InputNumber, Button, Card } from "antd";
import { countries } from "../constants/countries";

export default function RegistrationForm({ onSubmit }) {
  const [form] = Form.useForm();

  const values = Form.useWatch([], form);

  const isDisabled =
    !values?.name ||
    values?.name?.length < 2 ||
    !values?.email ||
    !values?.country ||
    !values?.age;

  return (
    <Card
      title="Registration Form"
      style={{ maxWidth: 350, margin: "30px auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ age: 18 }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true }, { min: 2 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="country" label="Country" rules={[{ required: true }]}>
          <Select options={countries.map((c) => ({ value: c, label: c }))} />
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[{ required: true }, { type: "number", min: 18, max: 100 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Button type="primary" htmlType="submit" disabled={isDisabled} block>
          Submit
        </Button>
      </Form>
    </Card>
  );
}
