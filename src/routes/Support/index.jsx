import "./style.css";
import Hero from "../../components/Hero.jsx";

const Support = () => {
  return (
    <div className="support">
      <Hero
        imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Support"
      />
      <form className="support-form">
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email" />
        <label htmlFor="comment"> Comment</label>
        <textarea name="comment" rows="4" cols="50" id="comment"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;
