import React from "react";
import { Table } from "antd";
import { MoreOutlined } from '@ant-design/icons';


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Admin Email",
    dataIndex: "ademail",
    key: "ademail",
  },
  {
    title: "Tenant URL",
    dataIndex: "url",
    key: "url",
    render: (name) => <a>{name}</a>,
  },
  {
    title: "Authentication Method",
    dataIndex: "auth",
    key: "auth",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "createdat",
    key: "createdat",
  },
  {
    title: "Modified At",
    dataIndex: "modifiedat",
    key: "modifiedat",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
const data = [
  {
    key: "1",
    name: "Default",
    ademail: "muthu@kloudone.com",
    url: "default.kloudone@gmail.com",
    auth: " ",
    status: "Active",
    createdat: "05-05-2024 11:30 PDT",
    modifiedat: "05-05-2024 11:30 PDT",
    action: <MoreOutlined />
  },
  {
    key: "2",
    name: "testdev",
    ademail: "hemlatha@kloudone.com",
    url: "testdev.kloudone@gmail.com",
    auth: "Basic Password Method",
    status: "Active",
    createdat: "05-05-2024 11:30 PDT",
    modifiedat: "05-05-2024 11:30 PDT",
    action: <MoreOutlined />

  },
  {
    key: "3",
    name: "tenant6",
    ademail: "ahrar@kloudone.com",
    url: "tenant6.kloudone.authnull.com",
    auth: "Basic Password Method",
    status: "Active",
    createdat: "05-05-2024 11:30 PDT",
    modifiedat: "05-05-2024 11:30 PDT",
    action: <MoreOutlined />

  },
  {
    key: "4",
    name: "abc",
    ademail: "hema@authnull.io.com",
    url: "abc.kloudone.authnull.com",
    auth: "SAML 2.0",
    status: "Active",
    createdat: "05-05-2024 11:30 PDT",
    modifiedat: "05-05-2024 11:30 PDT",
    action: <MoreOutlined />

  },
  {
    key: "5",
    name: "sbank",
    ademail: "asif@authnull.com",
    url: "sbank.kloudone.authnull.com",
    auth: "Basic Password Method",
    status: "Active",
    createdat: "05-05-2024 11:30 PDT",
    modifiedat: "05-05-2024 11:30 PDT",
    action: <MoreOutlined />

  },
];
const AntUI = () => <Table columns={columns} dataSource={data} />;
export default AntUI;
