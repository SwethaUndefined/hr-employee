import React from 'react'
import {Row, Col} from "antd"
import Header from '../components/header';
import "./dashboard.css"
import Sider from '../components/sider';
import Main from '../components/main';
const Dashboard = () => {
  return (
    <section>
        <Row>
            <Col span={24} className='header'>
                <Header/>
            </Col>
            <Col span={1}>
              <Sider/>
            </Col>
            <Col span={1}></Col>
            <Col span={22}>
              <Main/>
            </Col>
        </Row>
    </section>
  )
}

export default Dashboard