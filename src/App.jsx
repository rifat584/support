import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import { ToastContainer } from "react-toastify";

const loadTickets = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const showTickets = loadTickets();
function App() {
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <Main showTickets={showTickets}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;

// function Test() {
//   return (
//     <div className="relative bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
//       {/* Vector background overlay */}
//       <img
//         src={Vector1}
//         alt="bg vector"
//         className="absolute inset-0 w-full h-full object-cover opacity-100"
//       />

//       {/* Content */}
//       <h2 className="text-lg font-medium z-10">In-Progress</h2>
//       <p className="text-4xl font-bold z-10">0</p>
//     </div>
//   );
// }
