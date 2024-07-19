import React from "react";
import { Row, Col, Typography, Tabs, Card, Button } from "antd";
import "./postedJobs.css";
import searchAndFilter from "../assests/searchAndFilter.svg";
import python from "../assests/python.svg";
import Angular from "../assests/Angular.svg";
import java from "../assests/java.svg";
import uiux from "../assests/uiux.svg";

import { ArrowUpOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const PostedJobs = () => {
  const renderJobCard = (imgSrc, jobTitle, backgroundColor, countColor,jobNumber) => (
    <Card
      className="active-job-card"
      title={
        <Row>
          <Col span={3}>
            <img src={imgSrc} alt={jobTitle} className="langIcons" />
          </Col>
          <Col span={21}>
            <Typography className="jobtitle">{jobTitle}</Typography>
          </Col>
        </Row>
      }
      extra={<Typography className="jobNumber">{jobNumber}</Typography>}
      actions={[
        <Row>
          <Col span={12}>
            <Typography className="lastMonth">
              <ArrowUpOutlined className="arrowIcon" />
              28% vs Last month
            </Typography>
          </Col>
          <Col span={12} align="end">
            <Typography className="minAgo">6 min ago</Typography>
          </Col>
        </Row>
      ]}
    >
      <Row>
        <Col span={24} className="positionCol">
          <Typography className="designation">Senior Developers</Typography>
          <Row>
            <Col span={24} className="applicationCount">
            <Typography
              className="applicationCount"
              style={{ backgroundColor: backgroundColor, color: countColor }}
            >
              258
            </Typography>
            </Col>
          </Row>
          <Typography className="application">Total Applicants</Typography>
        </Col>
      </Row>
    </Card>
  );

  return (
    <Card
      title={
        <Row>
          <Col span={4}>
            <Typography className="postedJobsHeading">Posted Jobs</Typography>
          </Col>
          <Col span={4}>
            <Button className="viewAll" type="link">
              View All
            </Button>
          </Col>
          <Col span={6}></Col>
          <Col span={10}>
            <img
              src={searchAndFilter}
              alt="search"
              className="postedJobsSearch"
            />
          </Col>
        </Row>
      }
      bordered={false}
      className="postedJobs"
    >
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1" className="custom-tabs">
            <TabPane tab="Active Jobs" key="1">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                {renderJobCard(python, "Python Developers", "#D9E4EF", "#0A66C2", "#001")}
                </Col>
                <Col span={6}>
                {renderJobCard(Angular, "Angular Developers", "#73A1FB", "#ffffff", "#002")}
                </Col>
                <Col span={6}>
                {renderJobCard(java, "Java Developers", "#2F73A0", "#ffffff", "#003")}
                </Col>
                <Col span={6}>
                {renderJobCard(uiux, "UI/UX Designers", "#0A66C2", "#ffffff", "#004")}
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Inactive Jobs" key="2">
            <Row gutter={[16, 16]}>
                <Col span={6}>
                {renderJobCard(python, "Python Developers", "#D9E4EF", "#0A66C2", "#001")}
                </Col>
                <Col span={6}>
                {renderJobCard(Angular, "Angular Developers", "#73A1FB", "#ffffff", "#002")}
                </Col>
                <Col span={6}>
                {renderJobCard(java, "Java Developers", "#2F73A0", "#ffffff", "#003")}
                </Col>
                <Col span={6}>
                {renderJobCard(uiux, "UI/UX Designers", "#0A66C2", "#ffffff", "#004")}
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Completed Jobs" key="3">
            <Row gutter={[16, 16]}>
                <Col span={6}>
                {renderJobCard(python, "Python Developers", "#D9E4EF", "#0A66C2", "#001")}
                </Col>
                <Col span={6}>
                {renderJobCard(Angular, "Angular Developers", "#73A1FB", "#ffffff", "#002")}
                </Col>
                <Col span={6}>
                {renderJobCard(java, "Java Developers", "#2F73A0", "#ffffff", "#003")}
                </Col>
                <Col span={6}>
                {renderJobCard(uiux, "UI/UX Designers", "#0A66C2", "#ffffff", "#004")}
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Card>
  );
};

export default PostedJobs;
