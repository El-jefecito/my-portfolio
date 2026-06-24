import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Sidebar } from "@/components/Sidebar";
import { FloatingMenu } from "./components/FloatingMenu";
import { Profile } from "./components/Profile";

const savedTheme = localStorage.getItem("theme") ?? "dark";
document.documentElement.classList.toggle("dark", savedTheme === "dark");

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <div id="lenis-root">
//       <div className="lg:flex lg:justify-center lg:items-start lg:gap-10">
//         <Sidebar />
//         <FloatingMenu />
//         <Profile />
//         <App />
//       </div>
//     </div>
//   </StrictMode>,
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  </StrictMode>,
);
