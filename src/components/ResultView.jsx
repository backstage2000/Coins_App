import { Card, List, Button } from "antd";

export default function ResultView({ data, onReset }) {
  return (
    <Card title="Registration" style={{ maxWidth: 350, margin: "40px auto" }}>
      <List
        dataSource={Object.entries(data)}
        renderItem={([key, value]) => (
          <List.Item>
            <b>{key}:</b> {value}
          </List.Item>
        )}
      />

      <Button type="primary" onClick={onReset} style={{ marginTop: 16 }}>
        Start again
      </Button>
    </Card>
  );
}
