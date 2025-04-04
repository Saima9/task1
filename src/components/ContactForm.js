import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields");
      return;
    }
    alert("Form Submitted ✅");
    setForm({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <p><strong>📧 Email</strong><br />workforeign@gmail.com</p>
      <p><strong>📞 Phone No.</strong><br />+44 (0) XXXX XXX XXX</p>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Enter your query........" />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;


