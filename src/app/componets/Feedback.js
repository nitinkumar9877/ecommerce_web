// "use client";
import "../../../public/sass/pages/feedback.scss";

const Feedback = () => {
    return (
        <section className="feedback_section">
            <h2 className="heading">We Value Your Feedback</h2>
            <form className="feedback_form" method="post" action="#">
                <div className="form_group">
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form_group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form_group">
                    <label>How was your shopping experience?</label>
                    <select name="experience" required>
                        <option value="">Select</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>

                <div className="form_group">
                    <label>Rate us (1-5)</label>
                    <input type="number" name="rating" min="1" max="5" required />
                </div>

                <div className="form_group">
                    <label>Your Suggestions</label>
                    <textarea
                        name="suggestion"
                        placeholder="Write your feedback here..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn_submit">
                    Submit Feedback
                </button>
            </form>
        </section>
    );
};

export default Feedback;
