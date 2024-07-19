import React from 'react';
import { Row, Col } from 'antd';
import Header from '../components/header';
import Sider from '../components/sider';
import Main from '../components/main';
import './dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header />
      <Row className="content">
        <Col span={1}>
          <Sider />
        </Col>
        <Col span={1}></Col>
        <Col span={22} className="main-content">
          <Main />
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
