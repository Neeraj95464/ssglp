// const menuItems = [
//   { name: "Masala Chai", price: "₹60", img: "/chai.jpg" },
//   { name: "Cold Coffee", price: "₹120", img: "/coffee.jpg" },
//   { name: "Paneer Tikka Sandwich", price: "₹135", img: "/sandwich.jpg" },
//   { name: "Chocolate Brownie", price: "₹75", img: "/brownie.jpg" },
//   { name: "Darbar Combo", price: "₹250", img: "/combo.jpg" },
// ];

// export default function MenuGrid() {
//   return (
//     <section id="menu" className="py-12 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Bestsellers</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {menuItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-yellow-50 shadow-lg rounded-xl w-60 p-6 flex flex-col items-center"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//             <h3 className="font-semibold text-lg">{item.name}</h3>
//             <div className="text-yellow-700 font-bold text-xl">
//               {item.price}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const menuItems = [
  {
    name: "Masala Chai",
    price: "₹60",
    img: "https://images.unsplash.com/photo-1498654206900-5a906b7c60c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cold Coffee",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Brownie",
    price: "₹75",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Paneer Sandwich",
    price: "₹135",
    img: "https://images.unsplash.com/photo-1464306076886-2550bca7c809?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Darbar Combo",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];
export default function MenuGrid() {
  return (
    <section id="menu" className="py-14 bg-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-900">
        Menu Highlights
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-2xl w-64 p-7 flex flex-col items-center hover:scale-105 transition"
            style={{
              backdropFilter: "blur(4px)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-yellow-200"
            />
            <h3 className="font-semibold text-xl text-yellow-900">
              {item.name}
            </h3>
            <div className="font-bold text-lg text-yellow-700 mt-1">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
