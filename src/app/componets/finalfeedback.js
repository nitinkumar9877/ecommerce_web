import React from "react";
import "../../../public/sass/pages/majboori.scss";
import Image from "next/image";
import feedbackImg from "../../../public/Images/upper_banner_2.webp";

const Feedback = () => {
  return (
    <section className="feedback_section">
      <div className="feedback_container">
        {/* Left Image */}
        <div className="feedback_left">
          <Image
            src={feedbackImg}
            alt="Feedback illustration"
            className="feedback_image"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="feedback_right">
          <h2 className="heading">We Value Your Feedback 💬</h2>
          <p className="sub_heading">
            Your opinion helps us improve. Please share your experience.
          </p>

          <form className="feedback_form" method="post" action="#">
            <div className="form_group">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form_group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form_group">
              <label>Shopping Experience</label>
              <select name="experience" required>
                <option value="">Select</option>
                <option value="Excellent">🌟 Excellent</option>
                <option value="Good">👍 Good</option>
                <option value="Average">👌 Average</option>
                <option value="Poor">👎 Poor</option>
              </select>
            </div>

            <div className="form_group">
              <label>Your Suggestions</label>
              <textarea
                name="suggestion"
                placeholder="Write your feedback here..."
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn_submit">🚀 Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
