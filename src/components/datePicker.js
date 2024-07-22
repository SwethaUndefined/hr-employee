import React from 'react';
import { Calendar, Col, Row, Typography } from 'antd';
import {
    LeftOutlined,
    RightOutlined,
  } from "@ant-design/icons";
import "./datePicker.css";

const DatePicker = () => {

  return (
 
      <Calendar
        fullscreen={false}
        headerRender={() => (
          <Row style={{ padding: 8 }}>
            <Col span={2}><LeftOutlined /></Col>
            <Col span={20} align="center">
            <Typography className='march2024'>March 2024</Typography>
            </Col>
            <Col span={2}><RightOutlined /></Col>
          </Row>
        )}
        className='calender'
      />

  );
};

export default DatePicker;
