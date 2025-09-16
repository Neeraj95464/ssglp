// const testimonials = [
//   {
//     name: "Amit Rao",
//     text: "Best chai in Hyderabad. Cozy interiors & quick service!",
//   },
//   {
//     name: "Shruti Verma",
//     text: "Loved the brownie and cold coffee—the place feels like home.",
//   },
//   {
//     name: "Mahesh Gupta",
//     text: "My go-to spot for catch-ups! Staff is courteous, food is great.",
//   },
// ];
// export default function Testimonials() {
//   return (
//     <section className="bg-yellow-100 py-10">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         What Customers Say
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="bg-white px-7 py-6 rounded-xl shadow-md max-w-xs"
//           >
//             <div className="font-bold text-yellow-700">{t.name}</div>
//             <p className="mt-2 text-gray-700 italic">"{t.text}"</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const testimonials = [
  {
    name: "Amit Rao",
    text: "Best chai in Hyderabad. Cozy interiors & quick service!",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=110&q=80",
  },
  {
    name: "Shruti Verma",
    text: "Loved the brownie and cold coffee—the place feels like home.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=110&q=80",
  },
  {
    name: "Mahesh Gupta",
    text: "My go-to spot for catch-ups! Staff is courteous, food is great.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=110&q=80",
  },
];
export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-pink-50 py-14">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-900">
        What Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-xl max-w-xs flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 object-cover rounded-full mb-4 shadow border-2 border-yellow-200"
            />
            <div className="font-bold text-yellow-700">{t.name}</div>
            <p className="mt-2 text-gray-700 italic">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
