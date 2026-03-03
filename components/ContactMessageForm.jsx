"use client";

import { useState } from "react";

export default function ContactMessageForm() {
  const [firstName, setFirstName] = useState("");
  const [success, setSuccess] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const safeName = firstName.trim() || "there";
    setSuccess(`Thank you, ${safeName}! We'll call you shortly.`);
    event.currentTarget.reset();
    setFirstName("");
  }

  return (
    <form className="contact-message-form" onSubmit={onSubmit}>
      <div className="contact-form-grid">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
      </div>
      <input type="date" name="date" aria-label="Preferred appointment date" />
      <textarea name="note" placeholder="Note" rows={3} />
      <button type="submit">Send Message</button>
      {success ? <p className="form-success">{success}</p> : null}
    </form>
  );
}
