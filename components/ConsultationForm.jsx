"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = name.trim() || "there";
    setSuccess(`Thank you, ${cleanName}! We'll call you shortly.`);
    event.currentTarget.reset();
    setName("");
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <label htmlFor="consult-name">Full Name</label>
      <input
        id="consult-name"
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="consult-phone">Phone Number</label>
      <input
        id="consult-phone"
        name="phone"
        type="tel"
        placeholder="+91"
        pattern="[0-9+\\-\\s]{10,15}"
        required
      />

      <label htmlFor="consult-condition">Primary Concern</label>
      <input
        id="consult-condition"
        name="condition"
        type="text"
        placeholder="Diabetes / Neuro-pain / Other"
      />

      <button type="submit">Request Consultation</button>
      {success ? <p className="form-success">{success}</p> : null}
    </form>
  );
}
