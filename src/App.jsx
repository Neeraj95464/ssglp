// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import MenuGrid from "./components/MenuGrid";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import OrderForm from "./components/OrderForm";
import ContactForm from "./components/ContactForm";
import DarbarStreetCafe from "./page/DarbarStreetCafe";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-yellow-50 to-rose-50 min-h-screen text-gray-900">
      {/* <Navbar />
      <HeroSection />
      <Highlights />
      <MenuGrid />
      <Gallery />
      <Testimonials />
      <OrderForm />
      <ContactForm /> */}
      <DarbarStreetCafe />
      {/* <footer className="bg-gray-900 text-yellow-100 py-6 text-center text-lg tracking-wide mt-6">
        <div>
          © 2025 Shri Sahasra Gourmet LLP | Franchise: Darbar Street Cafe
        </div>
        <div>Hyderabad, TS, India | ssglp.co.in</div>
      </footer> */}
    </div>
  );
}
