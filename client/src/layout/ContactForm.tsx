import React, { useState } from "react";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // send form data to backend service
    // example API request using fetch:
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // handle response from backend service
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center text-black">
        <div className="w-[50rem] h-[35rem]">
          <h1 className="text-center text-4xl mb-8 text-white">Contact Form</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-white"
          >
            <div data-aos="fade-left">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="pl-5 shadow-inner shadow-gray-700 text-black bg-slate-300 w-full h-12 rounded-md outline-none focus:border-b-4 focus:border-b-teal-400"
                required
              />
            </div>
            <div data-aos="fade-right">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-5 shadow-inner shadow-gray-700 text-black bg-slate-300 w-full h-12 rounded-md outline-none focus:border-b-4 focus:border-b-teal-400"
                required
              />
            </div>
            <div data-aos="zoom-in-up">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="pl-5 pt-3 shadow-inner shadow-gray-700 text-black bg-slate-300 w-full h-48 rounded-md outline-none focus:border-b-4 focus:border-b-teal-400"
                required
              />
            </div>
            <button type="submit" className={`button-emrald ${styles}`}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
