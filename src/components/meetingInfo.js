import React from "react";
import "./meetingInfo.css";
import { Row, Col, Card, Typography, Space, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import person from "../assests/person.svg";
import person2 from "../assests/person2.svg";
import calender from "../assests/calender.svg";
import clock from "../assests/clock.svg";

const MeetingInfo = () => {
  return (
    <Card
      title={
        <Typography className="meetingHeading">
          Today Interviews Meetings Info
        </Typography>
      }
      bordered={false}
      extra={<MoreOutlined className="moreIcon" />}
      className="meeting-card"
    >
      <Row className="scrollable-container">
       <Space>
         <Col span={24} className="personInfo">
          <Row>
            <Col span={6} className="personLeftMenu">
              <Row>
                <Col span={24} align="center">
                  <img src={person} alt="person" className="person" />
                </Col>
                <Col span={24} align="center" className="personNameAndDes">
                  <Typography className="personName">John Smith</Typography>
                  <Typography className="personDesignation">
                    Senior Python Developer
                  </Typography>
                </Col>
                <Col span={12} className="calenderCol">
                   <img src={calender} alt="calender" className="iconCalAndClock"/>
                   <Typography className="calendarDate">19th Feb 2024</Typography>
                </Col>
                <Col span={12}>
                   <img src={clock} alt="clock" className="iconCalAndClock"/>
                   <Typography className="calenderClock">10.30 A.M</Typography>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
                <Row>
                <Col span={12}>
                    <Typography className="firstCol">1st Level: 7/10</Typography>
                    <Typography className="firstCol">2nd Level: 6/10</Typography>
                    <Typography className="firstCol">3rd Level: Waiting</Typography>
                    <Typography className="firstCol">Meet Via: G-Meet</Typography>
                </Col>
                <Col span={12}>
                <Typography className="secondCol">Interviewer: Stella</Typography>
                    <Typography className="secondCol">Interviewer: Smith</Typography>
                    <Typography className="secondCol">Interviewer: <span style={{color:"#0A66C2"}}>Stephan</span></Typography>
                    <Typography className="secondCol">Attendees: Johnson</Typography>
                </Col>
                <Col span={12} align="end" className="rescheduleCol">
                    <Button className="reschedule-btn">Reschedule Meeting</Button>
                </Col>
                <Col span={12} className="joinCol">
                    <Button className="join-btn">Join Meeting</Button>
                </Col>
                </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="personInfo">
          <Row>
            <Col span={6} className="personLeftMenu">
              <Row>
                <Col span={24} align="center">
                  <img src={person2} alt="person" className="person" />
                </Col>
                <Col span={24} align="center" className="personNameAndDes">
                  <Typography className="personName">Maria</Typography>
                  <Typography className="personDesignation">
                    Senior Python Developer
                  </Typography>
                </Col>
                <Col span={12} className="calenderCol">
                   <img src={calender} alt="calender" className="iconCalAndClock"/>
                   <Typography className="calendarDate">19th Feb 2024</Typography>
                </Col>
                <Col span={12}>
                   <img src={clock} alt="clock" className="iconCalAndClock"/>
                   <Typography className="calenderClock">10.30 A.M</Typography>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
                <Row>
                <Col span={12}>
                    <Typography className="firstCol">1st Level: 7/10</Typography>
                    <Typography className="firstCol">2nd Level: 6/10</Typography>
                    <Typography className="firstCol">3rd Level: Waiting</Typography>
                    <Typography className="firstCol">Meet Via: G-Meet</Typography>
                </Col>
                <Col span={12}>
                <Typography className="secondCol">Interviewer: Stella</Typography>
                    <Typography className="secondCol">Interviewer: Smith</Typography>
                    <Typography className="secondCol">Interviewer: <span style={{color:"#0A66C2"}}>Stephan</span></Typography>
                    <Typography className="secondCol">Attendees: Johnson</Typography>
                </Col>
                <Col span={12} align="end" className="rescheduleCol">
                    <Button className="reschedule-btn">Reschedule Meeting</Button>
                </Col>
                <Col span={12} className="joinCol">
                    <Button className="join-btn">Join Meeting</Button>
                </Col>
                </Row>
            </Col>
          </Row>
        </Col>
       </Space>
      </Row>
    </Card>
  );
};

export default MeetingInfo;
