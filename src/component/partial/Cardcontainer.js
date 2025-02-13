import React from 'react'
import { Card, Col, Row } from 'antd';
import RatingComponent from './RatingComponent';

export default function Cardcontainer() {
  return (
    <Row gutter={16} className="cardgrey">
    <Col span={16}>
      <Card title="Overall Rating" bordered={false}>
        <span></span>
        <RatingComponent />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
   
  </Row>
  )
}