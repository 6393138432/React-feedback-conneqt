import React, { useEffect, useState } from "react";
import { Card, Rate, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./feedbackform.scss";

const FeedbackList = ({ feedbacks = [] }) => {  // Ensure feedbacks is received as a prop
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Re-render when feedbacks update
  }, [feedbacks]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < feedbacks.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel-container">
      <h3>Feedback List</h3>

      <div className="carousel-wrapper">
        <Button onClick={handlePrev} disabled={currentIndex === 0} icon={<LeftOutlined />} />

        <div className="carousel-content">
          {feedbacks.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <Card key={index} title={`Feedback ${currentIndex + index + 1}`} className="feedback-card">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Message:</strong> {item.message}</p>
              <p><strong>Rating:</strong> {item.rating.toFixed(1)}</p>
              <Rate value={item.rating} allowHalf disabled />
            </Card>
          ))}
        </div>

        <Button onClick={handleNext} disabled={currentIndex >= feedbacks.length - 3} icon={<RightOutlined />} />
      </div>
    </div>
  );
};

export default FeedbackList;
