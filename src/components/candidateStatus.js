import React from "react";
import "./candidateStatus.css";
import { Row, Col, Typography, Table, Card, Button, Tag } from "antd";
import searchAndFilter from "../assests/searchAndFilter.svg";
import { EyeOutlined, EllipsisOutlined,CloseCircleOutlined } from "@ant-design/icons";

const CandidateStatus = () => {
  const columns = [
    {
      title: "Job ID",
      dataIndex: "jobId",
      key: "jobId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "1st Level",
      dataIndex: "level1",
      key: "level1",
    },
    {
      title: "2nd Level",
      dataIndex: "level2",
      key: "level2",
    },
    {
      title: "3rd Level",
      dataIndex: "level3",
      key: "level3",
      render: (text) =>
        text === "..." ? <EllipsisOutlined className="ellipseIcon" /> : text,
    },
    {
      title: "4th Level",
      dataIndex: "level4",
      key: "level4",
      render: (text) =>
        text === "..." ? <EllipsisOutlined className="ellipseIcon" /> : text,
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      key: "totalMarks",
      render: (text) =>
        text === "..." ? <EllipsisOutlined className="ellipseIcon" /> : text,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let textColor, backgroundColor;
        switch (status) {
          case "Active":
            textColor = "#F5C961";
            backgroundColor = "#FFF9EC";
            break;
          case "Hired":
            textColor = "#108F0E";
            backgroundColor = "#0EAD0B26";
            break;
          case "Reject":
            textColor = "#D12323";
            backgroundColor = "#E73B3B26";
            break;
          default:
            textColor = "#000";
            backgroundColor = "#FFF";
        }
        return (
          <Tag
            color={backgroundColor}
            style={{
              color: textColor,
              backgroundColor: backgroundColor,
              border: "none",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <EyeOutlined />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      jobId: "#001",
      name: "John Doe",
      position: "Designer",
      level1: "6/10",
      level2: "7/10",
      level3: <EllipsisOutlined className="ellipseIcon" />,
      level4: <EllipsisOutlined className="ellipseIcon" />,
      totalMarks: <EllipsisOutlined className="ellipseIcon" />,
      status: "Active",
    },
    {
      key: "2",
      jobId: "#002",
      name: "John Smith",
      position: "Angular Developer",
      level1: "6/10",
      level2: "5/10",
      level3: "5/10",
      level4: "8/10",
      totalMarks: "24/40",
      status: "Hired",
    },
    {
      key: "3",
      jobId: "#003",
      name: "Johnson Smith",
      position: "Python Developer",
      level1: "6/10",
      level2: "7/10",
      level3: <EllipsisOutlined className="ellipseIcon" />,
      level4: <EllipsisOutlined className="ellipseIcon" />,
      totalMarks: <EllipsisOutlined className="ellipseIcon" />,
      status: "Active",
    },
    {
      key: "4",
      jobId: "#004",
      name: "Stella",
      position: "Android Developer",
      level1: "6/10",
      level2: "2/10",
      level3: <CloseCircleOutlined style={{ color: "red" }} />,
      level4: <CloseCircleOutlined style={{ color: "red" }} />,
      totalMarks: "8/40",
      status: "Reject",
    },
    {
      key: "5",
      jobId: "#005",
      name: "Randy",
      position: "IOS Developer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: <EllipsisOutlined className="ellipseIcon" />,
      totalMarks: <EllipsisOutlined className="ellipseIcon" />,
      status: "Active",
    },
    {
      key: "6",
      jobId: "#006",
      name: "John Doe",
      position: "Junior Designer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: <EllipsisOutlined className="ellipseIcon" />,
      totalMarks: <EllipsisOutlined className="ellipseIcon" />,
      status: "Active",
    },
  ];

  return (
    <Card
      title={
        <Row>
          <Col span={4}>
            <Typography className="candidateStatusHeading">
              Candidate Status
            </Typography>
          </Col>
          <Col span={4}>
            <Button className="viewAllForCandidate" type="link">
              View All
            </Button>
          </Col>
          <Col span={6}></Col>
          <Col span={10}>
            <img
              src={searchAndFilter}
              alt="search"
              className="candidateStatusSearch"
            />
          </Col>
        </Row>
      }
      bordered={false}
      className="candidateStatus"
    >
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CandidateStatus;
