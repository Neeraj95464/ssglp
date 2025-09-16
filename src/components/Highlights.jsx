const highlights = [
  {
    name: "Expert Baristas",
    desc: "Our team brings world-class skills to every cup.",
    icon: "☕",
  },
  {
    name: "Signature Treats",
    desc: "Try the Brownie & Chai Combo—fan favorite!",
    icon: "🍫",
  },
  {
    name: "Superfast Service",
    desc: "Orders ready in 8 minutes or less.",
    icon: "⚡",
  },
  {
    name: "Cozy Seating",
    desc: "Ambient interior for groups and solo work.",
    icon: "🛋️",
  },
];

export default function Highlights() {
  return (
    <section className="max-w-6xl mx-auto py-10 grid gap-7 md:grid-cols-4 grid-cols-2 text-center">
      {highlights.map((item, i) => (
        <div
          key={item.name}
          className="bg-white bg-opacity-70 shadow-xl rounded-lg p-5 flex flex-col items-center transition hover:scale-105"
        >
          <span className="text-4xl mb-2">{item.icon}</span>
          <h3 className="font-bold text-lg text-yellow-800">{item.name}</h3>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
