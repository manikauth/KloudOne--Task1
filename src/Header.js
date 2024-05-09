import React from "react";
import "./index.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button , } from "antd";


function Header() {
  return (
    <>
      <h1>Tenant</h1>
      <Button id="tenant" type="primary">
        Create Tenant
      </Button>

      <div id="text">
        <h4>Search</h4>
      </div>

      <Button id="searchbar" icon={<SearchOutlined />}>
        Search
      </Button>

    </>
  );
}

export default Header;
