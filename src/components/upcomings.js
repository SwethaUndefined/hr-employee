import React from 'react';
import { Row, Col, Typography, Button, List } from 'antd';
import './upcomings.css';

const data = [
  {
    title: "07",
    date: "Feb",
    description: "Interview with Admin",
    creator: "Stella",
    time: "10 A.M to 11 A.M",
    style: {
      backgroundColor: '#0B74AD26',
      color: '#0B74AD',
    }
  },
  {
    title: "07",
    date: "Feb",
    description: "Interview with PMO",
    creator: "Stephan",
    time: "10 A.M to 11 A.M",
    style: {
      backgroundColor: '#C0C1C1',
      color: '#091316',
    }
  },
  {
    title: "07",
    date: "Feb",
    description: "Interview with Admin",
    creator: "Stella",
    time: "10 A.M to 11 A.M",
    style: {
      backgroundColor: '#E1E1E1',
      color: '#091316',
    }
  },
];

const Upcomings = () => {
  return (
    <Row>
      <Col span={12} className='upcomings'>
        <Typography className='upcomingHeading'>Upcomings</Typography>
      </Col>
      <Col span={12} align="end">
        <Button className='upcomingsViewAll' type='link'>View All</Button>
      </Col>
      <Col span={24}>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Row className='upcomingsListItem'>
                <Col span={6} className='leftSide' style={{ backgroundColor: item.style.backgroundColor, color: item.style.color }}>
                  <div className='title'>{item.title}</div>
                  <div className='date'>{item.date}</div>
                </Col>
                <Col span={12} className='middleSide'>
                  <div className='description'>{item.description}</div>
                  <div className='creator'>
                    <span className='createdBy'>Created by</span> <span className='creatorName'>{item.creator}</span>
                  </div>
                  <div className='time'>{item.time}</div>
                </Col>
                <Col span={6} className='rightSide'>
                  <Button className='detailsButton'>Details</Button>
                </Col>
              </Row>
            </List.Item>
          )}
          className='upcomingsList'
        />
      </Col>
    </Row>
  );
};

export default Upcomings;
