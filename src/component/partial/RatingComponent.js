import React, { useState, useEffect } from "react";
import { Rate, Typography, message } from "antd";

const { Title } = Typography;

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  // Load rating from local storage on component mount
  useEffect(() => {
    const savedRating = localStorage.getItem("userRating");
    if (savedRating) {
      setRating(parseFloat(savedRating));
    }
  }, []);

  const handleRatingChange = (value) => {
    setRating(value);
    localStorage.setItem("userRating", value);
    message.success(`You rated ${value} stars`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Title level={3}>Rate this Product</Title>
      <Rate allowHalf value={rating} onChange={handleRatingChange} />
      <p style={{ marginTop: "10px" }}>Your Rating: {rating} / 5</p>
    </div>
  );
};

export default RatingComponent;
