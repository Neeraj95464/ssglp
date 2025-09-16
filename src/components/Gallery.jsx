// const images = ["/interior1.jpg", "/food1.jpg", "/group1.jpg"];
// export default function Gallery() {
//   return (
//     <section className="py-12" id="gallery">
//       <h2 className="text-3xl text-center font-bold mb-8">See Us In Action</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt="Gallery"
//             className="w-72 h-44 object-cover rounded-lg shadow"
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

const images = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1464306076886-2550bca7c809?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
];
export default function Gallery() {
  return (
    <section id="gallery" className="py-12 bg-white">
      <h2 className="text-3xl text-center font-bold mb-8 text-yellow-900">
        See Us In Action
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Cafe Scene"
            className="w-96 h-56 object-cover rounded-2xl shadow-xl hover:scale-105 transition border-4 border-yellow-100"
          />
        ))}
      </div>
    </section>
  );
}
