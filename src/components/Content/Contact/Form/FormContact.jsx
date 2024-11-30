import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";

function FormContact() {
  const { formContact } = styles;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_YuhGnud",
        "template_YuhGnud",
        e.target,
        "gR_Leo7OUZPfUlAb-"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Email sending error:", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className={formContact}>
        <h2>Let&apos;s talk.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>What&apos;s your name ?</label>
          <input
            type="text"
            name="name"
            onChange={updateForm}
            value={form.name}
            required
          />

          <label>Your phone number</label>
          <input
            type="tel"
            name="phone"
            onChange={updateForm}
            value={form.phone}
            pattern="\d{10}"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            onChange={updateForm}
            value={form.email}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell me something..."
            required
          />
          <Button type="submit" content="Send Message" isTertiary />
        </form>
      </div>
    </>
  );
}

export default FormContact;
