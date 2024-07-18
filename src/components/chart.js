import React from "react";
import { Row, Col, Card, Typography, Select, Space } from "antd";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const Chart = () => {
  const data = [
    { name: "Jan", uv: 1000, pv: 2400 },
    { name: "Feb", uv: 2000, pv: 1398 },
    { name: "Mar", uv: 3000, pv: 3800 },
    { name: "Apr", uv: 4000, pv: 3908 },
    { name: "May", uv: 1000, pv: 4800 },
    { name: "Jun", uv: 2000, pv: 3800 },
    { name: "Jul", uv: 3000, pv: 1500 },
    { name: "Aug", uv: 4000, pv: 2500 },
    { name: "Sep", uv: 1000, pv: 3400 },
    { name: "Oct", uv: 2000, pv: 3000 },
    { name: "Nov", uv: 3000, pv: 3800 },
    { name: "Dec", uv: 4000, pv: 2000 },
  ];

  return (

        <Card
          title={
            <Row>
              <Col span={8}>
                <Typography className="chartCardHeading">
                  Application's Info
                </Typography>
              </Col>
              <Col span={16}>
                <Space>
                  <div className="squareBox receivedBox"></div>
                  <Typography className="received">Received</Typography>
                  <div className="squareBox processedBox"></div>
                  <Typography className="processed">Processed</Typography>
                </Space>
              </Col>
            </Row>
          }
          bordered={false}
          extra={
            <Select
              showSearch
              style={{ borderColor: "#0A66C2", borderRadius: "0px" }}
              placeholder="Month"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "March",
                },
                {
                  value: "2",
                  label: "April",
                },
                {
                  value: "3",
                  label: "May",
                },
              ]}
            />
          }
        >
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={data}>
              <XAxis dataKey="name" />
              <YAxis
                domain={[0, 4000]} 
                tick={{ dy: -8 }}
                ticks={[1000, 2000, 3000, 4000]}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" barSize={20} fill="#277ACC" />
              <Line type="monotone" dataKey="uv" stroke="#002B55" />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>

  );
};

export default Chart;
