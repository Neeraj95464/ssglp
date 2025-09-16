// import { useState } from "react";
// export default function OrderForm() {
//   const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with actual Formspree form ID
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     let res = await fetch(FORM_ACTION, {
//       method: "POST",
//       body: data,
//       headers: { Accept: "application/json" },
//     });
//     if (res.ok) setStatus("Order received! We'll contact you soon.");
//     else setStatus("There was a problem sending your order. Try again.");
//     e.target.reset();
//   };

//   return (
//     <section id="order" className="py-14 bg-white">
//       <h2 className="text-3xl text-center font-bold mb-8">Place an Order</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto bg-yellow-50 p-8 rounded-xl shadow-lg flex flex-col gap-5"
//       >
//         <label>
//           <span className="font-semibold">Full Name</span>
//           <input
//             type="text"
//             name="name"
//             required
//             className="mt-2 w-full rounded border px-3 py-2"
//           />
//         </label>
//         <label>
//           <span className="font-semibold">Mobile Number</span>
//           <input
//             type="tel"
//             name="mobile"
//             required
//             pattern="[0-9]{10}"
//             className="mt-2 w-full rounded border px-3 py-2"
//           />
//         </label>
//         <label>
//           <span className="font-semibold">Order Details</span>
//           <textarea
//             name="order"
//             required
//             placeholder="Item & quantity"
//             className="mt-2 w-full rounded border px-3 py-2"
//           />
//         </label>
//         <label>
//           <span className="font-semibold">Address/Comments</span>
//           <textarea
//             name="address"
//             required
//             className="mt-2 w-full rounded border px-3 py-2"
//           />
//         </label>
//         <button
//           type="submit"
//           className="bg-yellow-400 text-gray-900 font-bold py-2 rounded hover:scale-105 transition"
//         >
//           Submit Order
//         </button>
//         <div className="mt-2 text-green-700 font-semibold">{status}</div>
//       </form>
//     </section>
//   );
// }

import { useState } from "react";
export default function OrderForm() {
  const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree form ID
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let res = await fetch(FORM_ACTION, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setStatus("Order received! We'll contact you soon.");
    else setStatus("There was a problem sending your order. Try again.");
    e.target.reset();
  };

  return (
    <section
      id="order"
      className="py-16 bg-gradient-to-l from-yellow-100 to-pink-100"
    >
      <h2 className="text-3xl text-center font-bold mb-10 text-yellow-900">
        Place Your Order
      </h2>
      <form
        className="max-w-xl mx-auto bg-white/80 p-8 rounded-xl shadow-xl grid gap-6 backdrop-blur"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-semibold">Full Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <label>
          <span className="font-semibold">Mobile Number</span>
          <input
            type="tel"
            name="mobile"
            required
            pattern="[0-9]{10}"
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <label>
          <span className="font-semibold">Order Details</span>
          <textarea
            name="order"
            required
            placeholder="Items & quantity..."
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <label>
          <span className="font-semibold">Address/Comments</span>
          <textarea
            name="address"
            required
            className="mt-1 w-full rounded border px-3 py-2 shadow"
          />
        </label>
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition shadow"
        >
          Submit Order
        </button>
        <div className="mt-2 text-green-700 font-semibold">{status}</div>
      </form>
    </section>
  );
}
