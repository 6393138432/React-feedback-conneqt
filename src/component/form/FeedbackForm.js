import React, { useState } from "react";
import './feedbackForm.scss';
import './form.scss';

function FeedbackForm () {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trainingTopic: "",
    rating: "",
    comments: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your feedback!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      trainingTopic: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        

        {/* Training Topic */}
        <div className="form-group">
          <label htmlFor="trainingTopic">Training Topic:</label>
          <select
            id="trainingTopic"
            name="trainingTopic"
            value={formData.trainingTopic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="React Basics">React Basics</option>
            <option value="Advanced React">Advanced React</option>
            <option value="Frontend Best Practices">Frontend Best Practices</option>
          </select>
        </div>

        {/* Rating */}
        <div className="form-group">
          <label>Rating (1-5):</label>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={formData.rating === String(rating)}
                  onChange={handleChange}
                  required
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;


