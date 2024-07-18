import { Row,Col, Typography } from 'antd'
import React from 'react'
import "./main.css";
import Chart from './chart';
import Assesment from './assesment';
import MeetingInfo from './meetingInfo';
import DatePicker from './datePicker';

const Main = () => {
  return (
    <section>
        <Row gutter={[16,16]} className='main'>
            <Col span={24}>
                <Typography className='mainHeader'>HR Employee</Typography>
                <Typography className='subTitle'>Enjoy your selecting potential candidates Tracking and Management System.</Typography>
            </Col>
            <Col span={14} className='chart'>
                <Chart/>
            </Col>
            <Col span={10} className='chart'>
                <Assesment/>
            </Col>
            <Col span={16} className='meetingInfo'>
                <MeetingInfo/>
            </Col>
            <Col span={8} className='calenderRight'>
                <DatePicker/>
            </Col>
        </Row>
    </section>
  )
}

export default Main