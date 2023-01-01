import { Alert, Space } from "antd";

const AlertComponent = ({ className, type, description }: { className: string; type?: string; description: string; }) => {
  const SuccessAlert = () => (

    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert
        message="success"
        description={description}
        type="warning"
        className={`${className ? className : ""}`}
        showIcon
        closable
      />
    </Space>
  );
  const InfoAlert = () => (

    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert
        message="Error"
        description={description}
        type="error"
        className={`${className ? className : ""}`}
        showIcon
        closable
      />
    </Space>
  );
  const ErrorAlert = () => (

    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert
        message="Error"
        description={description}
        type="error"
        showIcon
        closable
        className={`${className ? className : ""}`}
      />
    </Space>
  );
  return type === "success" ? (
    <SuccessAlert />
  ) : type === "info" ? (
    <InfoAlert />
  ) : type === "error" ? (
    <ErrorAlert />
  ) : (
    ""
  );
};

export default AlertComponent;
