import "./style.css";
import Hero from "../../components/Hero.jsx";
import { useState } from "react";

const Support = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="support-message">
        <p>We received your message. We will get back to you ASAP!</p>
      </div>
    );
  }

  return (
    <div className="support">
      <Hero
        imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Support"
      />
      <form className="support-form" onSubmit={() => setSubmitted(true)}>
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" id="name" placeholder="e.g John Doe" />
        <label htmlFor="email">E-Mail</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="e.g john.doe@example.com"
        />
        <label htmlFor="message"> Message</label>
        <textarea
          name="message"
          rows="8"
          cols="50"
          id="message"
          placeholder="write your message here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;
