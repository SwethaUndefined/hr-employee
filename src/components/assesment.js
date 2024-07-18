import React from "react";
import "./assesment.css";
import { Row, Col, Card, Typography,Button } from "antd";
import listIcon from "../assests/listIcon.svg";
import girl2 from "../assests/girl2.svg";
import girl1 from "../assests/girl1.svg";

const Assesment = () => {
  return (

        <Card className="assementCard">
          <Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <img src={listIcon} className="listIcon" alt="List Icon" />
              <Typography className="number">0033</Typography>
            </Col>
            <Col xs={16} sm={16} md={16} lg={16} xl={16} className="girl-container">
              <img src={girl2} alt="Girl 2" />
              <img src={girl1} className="girl-image" alt="Girl Image" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
            <Typography className="newAss">New Assessment's</Typography>
            </Col>
            <Col span={12} align="end">
            <Button className="ViewButton" type="default">View Details</Button>
            </Col>
          </Row>
        </Card>

  );
};

export default Assesment;
