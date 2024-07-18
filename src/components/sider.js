import React from 'react';
import { Row, Col } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, BellOutlined,FileProtectOutlined,OrderedListOutlined ,BarChartOutlined,FileSearchOutlined} from '@ant-design/icons';
import './sider.css';

const Sider = () => {
  return (
    <Row className='sider'>
      <Col span={24}>
        <div className="icon-list">
          <HomeOutlined className="icon" />
          <FileProtectOutlined className="icon"/>
          <BellOutlined className="icon" />
          <OrderedListOutlined className="icon"/>
          <BarChartOutlined className="icon"/>
          <FileSearchOutlined className="icon"/>
          <UserOutlined className="icon" />
          <SettingOutlined className="icon" />
        </div>
      </Col>
    </Row>
  );
}

export default Sider;
