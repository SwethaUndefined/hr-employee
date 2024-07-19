import { Row, Col, Typography } from "antd";
import React from "react";
import "./main.css";
import Chart from "./chart";
import Assesment from "./assesment";
import MeetingInfo from "./meetingInfo";
import DatePicker from "./datePicker";
import PostedJobs from "./postedJobs";
import CandidateStatus from "./candidateStatus";
import Upcomings from "./upcomings";
import Activity from "./activity";
import HiringCandidates from "./hiringCandidates";

const Main = () => {
  return (
    <section>
      <Row gutter={[16, 16]} className="main">
        <Col span={24}>
          <Typography className="mainHeader">HR Employee</Typography>
          <Typography className="subTitle">
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </Typography>
        </Col>
        <Col span={14} className="chart">
          <Chart />
        </Col>
        <Col span={10} className="chart">
          <Assesment />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={24} className="meetingInfo">
              <MeetingInfo />
            </Col>
            <Col span={24} className="postedJobsLeft">
              <PostedJobs />
            </Col>
            <Col span={24} className="candidateStatusLeft">
              <CandidateStatus />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24} className="calenderRight">
              <DatePicker />
            </Col>
            
            <Col span={24} className="upcomingsRight">
              <Upcomings />
            </Col>
            <Col span={24}>
              <Activity/>
            </Col>
            <Col span={24} className="hiringCandidatesRight">
              <HiringCandidates/>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Main;
