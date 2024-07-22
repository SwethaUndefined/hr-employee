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
    { name: "Jan", uv: 2000, pv: 2400 },
    { name: "Feb", uv: 800, pv: 2800 },
    { name: "Mar", uv: 1500, pv: 3200 },
    { name: "Apr", uv: 2900, pv: 2700 },
    { name: "May", uv: 3400, pv: 3600 },
    { name: "Jun", uv: 1900, pv: 2200 },
    { name: "Jul", uv: 300, pv: 3100 },
    { name: "Aug", uv: 2000, pv: 2200 },
    { name: "Sep", uv: 3700, pv: 3900 },
    { name: "Oct", uv: 2000, pv: 800 },
    { name: "Nov", uv: 600, pv: 2600 },
    { name: "Dec", uv: 2000, pv: 3600 },
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
          className="chartCard"
        >
          <ResponsiveContainer width="100%" height={253}>
            <ComposedChart data={data}>
              <XAxis dataKey="name"
              tick={{ 
                fontSize: '14px', 
                fontWeight: 400, 
                fill: '#091316' 
              }} />
              <YAxis
                domain={[0, 4000]} 
                tick={{ 
                  fontSize: '14px', 
                  fontWeight: 400, 
                  fill: '#091316', 
                }}
                ticks={[1000, 2000, 3000, 4000]}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" barSize={20} fill="#277ACC" />
              <Line 
            type="monotone"
            dataKey="uv"
            stroke="#002B55"
            strokeWidth={2}
            dot={false}
            connectNulls={true}
            isAnimationActive={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>

  );
};

export default Chart;
