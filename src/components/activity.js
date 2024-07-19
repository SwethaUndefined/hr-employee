import React from "react";
import "./activity.css";
import { Row, Col, Typography, Button, List } from "antd";
import user1 from "../assests/user-1.jpg";
import user2 from "../assests/user-2.avif";
import user3 from "../assests/user-3.jpg";


const Activity = () => {
  const data = [
    {
      title: "John Doe",
      designation: "Python Developer",
      description: "Interview with Stella",
      time: "15 mins ago",
      avatar: user1,
    },
    {
      title: "Jane Smith",
      designation: "Java Developer",
      description: "Meeting with Mike",
      time: "30 mins ago",
      avatar: user2,
    },
    {
      title: "Emma Brown",
      designation: "Designer",
      description: "Design Review with Anna",
      time: "1 hour ago",
      avatar: user3,
    },
  ];
  return (
    <Row>
      <Col span={12} className="activity">
        <Typography className="activityHeading">Activity</Typography>
      </Col>
      <Col span={12} align="end">
        <Button className="activityViewAll" type="link">
          View All
        </Button>
      </Col>
      <Col span={24}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img src={item.avatar} alt="avatar" className="avatar" />
                }
                title={
                  <>
                    <Typography.Text className="name">
                      {item.title}
                    </Typography.Text>
                    <Typography.Text className="designation">{` [${item.designation}]`}</Typography.Text>
                  </>
                }
                description={
                  <>
                    <div className="description">{item.description}</div>
                    <div className="time">{item.time}</div>
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

export default Activity;
