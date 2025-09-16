// import React, { useState } from "react";

// function ContactFormWhatsApp() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendWhatsApp = () => {
//     const { name, phone, message } = form;
//     if (!name || !phone || !message) {
//       alert("Please fill all fields");
//       return;
//     }

//     const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
//     const url = `https://wa.me/919876543210?text=${text}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
//       <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
//         Contact Us
//       </h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           className="border p-3 rounded-lg w-full h-32 focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           onClick={sendWhatsApp}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
//         >
//           Send via WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ContactFormWhatsApp;

import { useState } from "react";
export default function ContactForm() {
  const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree ID
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let res = await fetch(FORM_ACTION, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setStatus("Message sent! We’ll get back soon.");
    else setStatus("Unable to send. Try again.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <h2 className="text-3xl text-center font-bold mb-10 text-yellow-900">
        Contact Us
      </h2>
      <form
        className="max-w-xl mx-auto bg-yellow-50 p-8 rounded-xl shadow-xl grid gap-6"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-semibold">Your Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <label>
          <span className="font-semibold">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <label>
          <span className="font-semibold">Message</span>
          <textarea
            name="message"
            required
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition shadow"
        >
          Send Message
        </button>
        <div className="mt-2 text-green-700 font-semibold">{status}</div>
      </form>
    </section>
  );
}
