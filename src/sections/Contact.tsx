"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      {submitted ? (
        <p>
          Thank you! Your message has been received. We&#39;ll get back to you
          soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}
