import React , { useEffect,  useState} from 'react'
import { Card, Col, Row, Button } from 'antd';
import RatingComponent from './RatingComponent';
import FeedbackForm from '../traingform/FeedbackForm';

export default function Cardcontainer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [feedbacks, setFeedbacks] = useState([]);
  
    useEffect(() => {
      const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      setFeedbacks(savedFeedbacks);
    }, []);
  
    const handleSubmit = (newFeedback) => {
      const updatedFeedbacks = [...feedbacks, newFeedback];
      setFeedbacks(updatedFeedbacks);
      localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
      setIsModalOpen(false);
    };
  return (
    <>
    <Card title="" bordered={false}  className="cardgrey">
      <Row >
        <Col span={16}>
            <RatingComponent />
        </Col>
        <Col span={8}>
        {/* <FeedbackForm /> */}
        <Button type="primary" onClick={() => setIsModalOpen(true)}>Give Feedback</Button>

          {/* Feedback Form Modal */}
          <FeedbackForm isModalOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </Card>
    </>
  )
}