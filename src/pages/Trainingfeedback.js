import React, { useState, useEffect } from "react";
import Trainingdetailpage from '../component/traingform/Trainingdetailpage';
import FeedbackForm from '../component/traingform/FeedbackForm';
import FeedbackList from '../component/traingform/FeedbackList';
import { Card, Col, Row, Button, Rate } from 'antd';


const Trainingfeedback = () => {
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

  // 🟢 Calculate Average Rating
  const averageRating =
    feedbacks.length > 0
      ? feedbacks.reduce((total, feedback) => total + feedback.rating, 0) / feedbacks.length
      : 0;

  

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Welcome to Feedback System</h2>
      <Trainingdetailpage />
      <Card title="" bordered={false}  className="cardgrey">
    <Row >
    <Col span={16}>
         {/* 🟢 Average Rating Section */}
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Average Rating:</strong> {feedbacks.length > 0 ? averageRating.toFixed(1) : "No Ratings Yet"}
        <br />
        <Rate value={averageRating} allowHalf disabled />
      </div>
    </Col>
    <Col span={8}>
    <Button type="primary" onClick={() => setIsModalOpen(true)}>Give Feedback</Button>

{/* Feedback Form Modal */}
<FeedbackForm isModalOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} handleSubmit={handleSubmit}  />


    </Col>

  </Row>
  </Card>

  
   {/* Feedback List Component (passing feedbacks prop) */}
   <FeedbackList feedbacks={feedbacks} />

      <h1>Training feedback system</h1>
      <p>A training feedback system is a process for collecting, analyzing, and responding to feedback from participants in a training program. The goal of a training feedback system is to identify areas for improvement and create recommendations for future training.</p>
  
    </div>
  );
};

export default Trainingfeedback;
 
