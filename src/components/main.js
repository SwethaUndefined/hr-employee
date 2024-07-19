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
        <Col xs={24} sm={24} md={14} lg={14} xl={14} className="chart">
          <Chart />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10} className="chart">
          <Assesment />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Row gutter={[16, 16]}>
            <Col xs={24} className="meetingInfo">
              <MeetingInfo />
            </Col>
            <Col xs={24} className="postedJobsLeft">
              <PostedJobs />
            </Col>
            <Col xs={24} className="candidateStatusLeft">
              <CandidateStatus />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Row gutter={[16, 16]}>
            <Col xs={24} className="calenderRight">
              <DatePicker />
            </Col>
            <Col xs={24} className="upcomingsRight">
              <Upcomings />
            </Col>
            <Col xs={24} className="activityRight">
              <Activity />
            </Col>
            <Col xs={24} className="hiringCandidatesRight">
              <HiringCandidates />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Main;
