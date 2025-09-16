// export default function HeroSection() {
//   return (
//     <section className="min-h-[60vh] flex flex-col gap-6 items-center justify-center bg-[url('/cafe-hero.jpg')] bg-cover bg-center py-20 text-yellow-50">
//       <h1 className="text-5xl font-bold drop-shadow">Darbar Street Cafe</h1>
//       <h2 className="text-2xl font-semibold drop-shadow">
//         by Shri Sahasra Gourmet LLP
//       </h2>
//       <p className="text-lg max-w-xl bg-black/50 px-4 py-2 rounded">
//         Hyderabad’s favorite: authentic teas, indulgent snacks, beautiful
//         ambiance.
//       </p>
//       <a
//         href="#order"
//         className="bg-yellow-400 px-8 py-3 rounded-full font-bold text-gray-900 mt-4 hover:scale-105 active:scale-95 transition"
//       >
//         Order Now
//       </a>
//     </section>
//   );
// }

export default function HeroSection() {
  return (
    <section
      className="pt-32 pb-20 bg-center bg-cover flex flex-col items-center justify-center gap-7 text-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom,rgba(255,255,255,0.8),rgba(245,205,125,0.6)),url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow text-yellow-900">
        Darbar Street Cafe
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-700">
        by Shri Sahasra Gourmet LLP
      </h2>
      <p className="mt-2 text-lg max-w-xl mx-auto text-gray-900 bg-white/60 px-5 py-2 rounded-lg backdrop-blur">
        Hyderabad’s favorite: authentic teas, indulgent snacks, beautiful
        ambiance.
      </p>
      <a
        href="#order"
        className="bg-yellow-400 text-gray-900 px-10 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 mt-4 transition text-xl"
      >
        Order Now
      </a>
    </section>
  );
}
