import React from 'react';
import { Row, Col, Typography, Button, List } from 'antd';
import user1 from "../assests/user-1.jpg";
import user2 from "../assests/user-2.avif";
import user3 from "../assests/user-3.jpg";
import "./hiringCandidates.css";

const HiringCandidates = () => {
    const data = [
        {
          title: "John Doe",
          designation: "Java Developer",
          hiredBy: "Hired by Stella",
          avatar: user1,
        },
        {
          title: "Jane Smith",
          designation: "Java Developer",
          hiredBy: "Hired by Stella",
          avatar: user2,
        },
        {
          title: "Will Jacks",
          designation: "Java Developer",
          hiredBy: "Hired by Stella",
          avatar: user3,
        },
      ];
      return (
        <Row>
          <Col span={12} className="hiringCandidates">
            <Typography className="HiringHeading">Hiring Candidates</Typography>
          </Col>
          <Col span={12} align="end">
        <Button className="HiringViewAll" type="link">
          View All
        </Button>
      </Col>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                actions={[<Button className='hiringDetails'>Details</Button>]}
                >
                  <List.Item.Meta
                    avatar={
                      <img src={item.avatar} alt="avatar" className="avatar" />
                    }
                    title={
                      <>
                        <Typography.Text className="name">
                          {item.title}
                        </Typography.Text>
                      </>
                    }
                    description={
                      <>
                        <div className="description">{item.designation}</div>
                        <div className="time">{item.hiredBy}</div>
                      </>
                    }
                    className="activityList"
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      );
};

export default HiringCandidates;
