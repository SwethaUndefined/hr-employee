import React from "react";
import { Row, Col, Input, Space } from "antd";
import "./header.css";
import companyLogo from "../assests/companyLogo.svg";
import {
  SearchOutlined,
  SunOutlined,
  CloudUploadOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import profile from "../assests/profile.jpg"

const Header = () => {
  return (
    <Row>
      <Col span={24} className="header">
        <Row>
          <Col span={4} xs={12} lg={6} sm={12}>
            <img src={companyLogo} className="logo" />
          </Col>
          <Col span={6} className="search" xs={12} lg={4} sm={12}>
            <Input
              size="large"
              placeholder="search"
              suffix={<SearchOutlined className="searchIcon"/>}
              className="input"
            />
          </Col>
          <Col span={5}></Col>
          <Col span={6} className="headerIcons">
            <Space>
              <SunOutlined className="headerIcon"/>
              <CloudUploadOutlined className="headerIcon"/>
              <MessageOutlined className="headerIcon"/>
              <BellOutlined className="headerIcon"/>
              <SettingOutlined className="headerIcon"/>
            </Space>
          </Col>
          <Col span={2} align="end">
            <img src={profile} className="profile" alt="Image not available"/>
          </Col>
          <Col span={1}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
