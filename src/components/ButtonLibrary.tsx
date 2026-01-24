import { ButtonData } from "../App";

import {
  Heart,
  Download,
  Send,
  Trash2,
  Check,
  Plus,
  ArrowRight,
  Star,
  Zap,
  ShoppingCart,
} from "lucide-react";
import ButtonCard from "./ButtonCard";

interface ButtonLibraryProps {
  onButtonClick: (button: ButtonData) => void;
}

const ButtonLibrary = ({ onButtonClick }: ButtonLibraryProps) => {
  const buttons: ButtonData[] = [
    // Primary Buttons
    {
      id: "primary-solid",
      name: "Primary Solid",
      category: "Primary",
      component: (
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Click Me
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Click Me
</button>`,
      cssCode: `.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}`,
    },
    {
      id: "primary-gradient",
      name: "Gradient Button",
      category: "Primary",
      component: (
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
          Gradient
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
  Gradient
</button>`,
      cssCode: `.btn-gradient {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #9333ea, #db2777);
  color: white;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.btn-gradient:hover {
  background: linear-gradient(to right, #7e22ce, #be185d);
}`,
    },
    {
      id: "primary-shadow",
      name: "Shadow Button",
      category: "Primary",
      component: (
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-300 hover:shadow-xl hover:shadow-indigo-400 hover:-translate-y-0.5 transition-all">
          Shadow Effect
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-300 hover:shadow-xl hover:shadow-indigo-400 hover:-translate-y-0.5 transition-all">
  Shadow Effect
</button>`,
      cssCode: `.btn-shadow {
  padding: 0.75rem 1.5rem;
  background-color: #4f46e5;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(129, 140, 248, 0.4);
  transition: all 0.2s;
}

.btn-shadow:hover {
  box-shadow: 0 20px 25px -5px rgba(129, 140, 248, 0.5);
  transform: translateY(-2px);
}`,
    },
    //Hover Animation Button
    {
      id: "dual-slide-fill-button",
      name: "Dual Slide Fill Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-blue-500 border-2 border-blue-500 overflow-hidden rounded-xl group">
          <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0 rounded-tr-full rounded-br-full"></span>
          <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-700 z-0 rounded-tl-full"></span>
          <span className="relative z-10 group-hover:text-white">Hover Me</span>
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-blue-500 border-2 border-blue-500 overflow-hidden rounded-xl group">
  <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0 rounded-tr-full rounded-br-full"></span>
  <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-700 z-0 rounded-tl-full"></span>
  <span className="relative z-10 group-hover:text-white">Hover Me</span>
</button>`,
      cssCode: `.btn-dual-slide {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.btn-dual-slide::before,
.btn-dual-slide::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #3b82f6;
  transform: scaleX(0);
  transition: transform 0.7s ease-in-out;
  z-index: 0;
}

.btn-dual-slide::before {
  transform-origin: left;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

.btn-dual-slide::after {
  transform-origin: right;
  border-top-left-radius: 9999px;
}

.btn-dual-slide:hover::before,
.btn-dual-slide:hover::after {
  transform: scaleX(1);
}

.btn-dual-slide span {
  position: relative;
  z-index: 1;
}

.btn-dual-slide:hover span {
  color: #ffffff;
}`,
    },
    {
      id: "gradient-fill-button",
      name: "Gradient Fill Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-purple-500 border-2 border-purple-500 rounded-xl overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0"></span>
          <span className="relative z-10 group-hover:text-white">Hover Me</span>
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-purple-500 border-2 border-purple-500 rounded-xl overflow-hidden group">
  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0"></span>
  <span className="relative z-10 group-hover:text-white">Hover Me</span>
</button>`,
      cssCode: `.btn-gradient-fill {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #a855f7;
  border: 2px solid #a855f7;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.btn-gradient-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #a855f7, #ec4899);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.7s ease-in-out;
  z-index: 0;
}

.btn-gradient-fill:hover::before {
  transform: scaleX(1);
}

.btn-gradient-fill span {
  position: relative;
  z-index: 1;
}

.btn-gradient-fill:hover span {
  color: #ffffff;
}`,
    },
    {
      id: "scale-pop-button",
      name: "Scale Pop Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-indigo-500 border-2 border-indigo-500 rounded-xl overflow-hidden group">
          <span className="absolute inset-0 bg-indigo-500 scale-0 origin-bottom-left group-hover:scale-100 transition-transform duration-700 z-0"></span>
          <span className="relative z-10 group-hover:text-white">Hover Me</span>
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-indigo-500 border-2 border-indigo-500 rounded-xl overflow-hidden group">
  <span className="absolute inset-0 bg-indigo-500 scale-0 origin-bottom-left group-hover:scale-100 transition-transform duration-700 z-0"></span>
  <span className="relative z-10 group-hover:text-white">Hover Me</span>
</button>`,
      cssCode: `.btn-scale-pop {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #6366f1;
  border: 2px solid #6366f1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.btn-scale-pop::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #6366f1;
  transform: scale(0);
  transform-origin: bottom left;
  transition: transform 0.7s ease-in-out;
  z-index: 0;
}

.btn-scale-pop:hover::before {
  transform: scale(1);
}

.btn-scale-pop span {
  position: relative;
  z-index: 1;
}

.btn-scale-pop:hover span {
  color: #ffffff;
}`,
    },
    {
      id: "underline-reveal-button",
      name: "Underline Reveal Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-pink-500 group">
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          Hover Me
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-pink-500 group">
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
  Hover Me
</button>`,
      cssCode: `.btn-underline {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #ec4899;
  background: transparent;
  border: none;
  cursor: pointer;
}

.btn-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #ec4899;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.btn-underline:hover::after {
  transform: scaleX(1);
}`,
    },
    {
      id: "glow-fill-button",
      name: "Glow Fill Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-black border-2 border-cyan-400 rounded-xl overflow-hidden group">
          <span className="absolute inset-0 bg-cyan-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0"></span>
          <span className="relative z-10 group-hover:text-white">Hover Me</span>
          <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-black border-2 border-cyan-400 rounded-xl overflow-hidden group">
  <span className="absolute inset-0 bg-cyan-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-0"></span>
  <span className="relative z-10 group-hover:text-white">Hover Me</span>
  <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
</button>`,
      cssCode: `.btn-glow-fill {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #000;
  border: 2px solid #22d3ee;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.btn-glow-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #22d3ee;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.7s ease-in-out;
  z-index: 0;
}

.btn-glow-fill:hover::before {
  transform: scaleX(1);
}

.btn-glow-fill::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 20px 5px rgba(34, 211, 238, 0.5);
  opacity: 0;
  transition: opacity 0.7s ease;
}

.btn-glow-fill:hover::after {
  opacity: 1;
}

.btn-glow-fill span {
  position: relative;
  z-index: 1;
}

.btn-glow-fill:hover span {
  color: #fff;
}`,
    },
    {
      id: "diagonal-wipe-button",
      name: "Diagonal Wipe Button",
      category: "Hover Animation",
      component: (
        <button className="relative px-6 py-3 font-semibold text-emerald-500 border-2 border-emerald-500 rounded-xl overflow-hidden group">
          <span className="absolute inset-0 bg-emerald-500 transform -translate-x-full translate-y-full rotate-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 z-0"></span>
          <span className="relative z-10 group-hover:text-white">Hover Me</span>
        </button>
      ),
      tailwindCode: `<button className="relative px-6 py-3 font-semibold text-emerald-500 border-2 border-emerald-500 rounded-xl overflow-hidden group">
  <span className="absolute inset-0 bg-emerald-500 transform -translate-x-full translate-y-full rotate-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 z-0"></span>
  <span className="relative z-10 group-hover:text-white">Hover Me</span>
</button>`,
      cssCode: `.btn-diagonal-wipe {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.btn-diagonal-wipe::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #10b981;
  transform: translate(-100%, 100%) rotate(12deg);
  transition: transform 0.7s ease;
  z-index: 0;
}

.btn-diagonal-wipe:hover::before {
  transform: translate(0, 0) rotate(12deg);
}

.btn-diagonal-wipe span {
  position: relative;
  z-index: 1;
}

.btn-diagonal-wipe:hover span {
  color: #ffffff;
}`,
    },
    // Outline Buttons
    {
      id: "outline-default",
      name: "Outline Button",
      category: "Outline",
      component: (
        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
          Outline
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
  Outline
</button>`,
      cssCode: `.btn-outline {
  padding: 0.75rem 1.5rem;
  border: 2px solid #2563eb;
  color: #2563eb;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: #2563eb;
  color: white;
}`,
    },
    {
      id: "outline-dashed",
      name: "Dashed Outline",
      category: "Outline",
      component: (
        <button className="px-6 py-3 border-2 border-dashed border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
          Dashed
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 border-2 border-dashed border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
  Dashed
</button>`,
      cssCode: `.btn-dashed {
  padding: 0.75rem 1.5rem;
  border: 2px dashed #059669;
  color: #059669;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-dashed:hover {
  background-color: #f0fdf4;
}`,
    },
    // Ghost Buttons
    {
      id: "ghost-default",
      name: "Ghost Button",
      category: "Ghost",
      component: (
        <button className="px-6 py-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
          Ghost
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
  Ghost
</button>`,
      cssCode: `.btn-ghost {
  padding: 0.75rem 1.5rem;
  color: #334155;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-ghost:hover {
  background-color: #f1f5f9;
}`,
    },
    {
      id: "ghost-colored",
      name: "Colored Ghost",
      category: "Ghost",
      component: (
        <button className="px-6 py-3 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors">
          Colored Ghost
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors">
  Colored Ghost
</button>`,
      cssCode: `.btn-ghost-colored {
  padding: 0.75rem 1.5rem;
  color: #9333ea;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-ghost-colored:hover {
  background-color: #f3e8ff;
}`,
    },
    // Rounded Buttons
    {
      id: "rounded-full",
      name: "Pill Button",
      category: "Rounded",
      component: (
        <button className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
          Pill Button
        </button>
      ),
      tailwindCode: `<button className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
  Pill Button
</button>`,
      cssCode: `.btn-pill {
  padding: 0.75rem 2rem;
  background-color: #e11d48;
  color: white;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.btn-pill:hover {
  background-color: #be123c;
}`,
    },
    {
      id: "rounded-square",
      name: "Rounded Square",
      category: "Rounded",
      component: (
        <button className="px-6 py-3 bg-amber-600 text-white rounded-2xl hover:bg-amber-700 transition-colors">
          Rounded
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-amber-600 text-white rounded-2xl hover:bg-amber-700 transition-colors">
  Rounded
</button>`,
      cssCode: `.btn-rounded {
  padding: 0.75rem 1.5rem;
  background-color: #d97706;
  color: white;
  border-radius: 1rem;
  transition: background-color 0.2s;
}

.btn-rounded:hover {
  background-color: #b45309;
}`,
    },
    // Icon Buttons
    {
      id: "icon-with-text",
      name: "Icon With Text",
      category: "Icon",
      component: (
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
  <Download className="w-4 h-4" />
  Download
</button>`,
      cssCode: `.btn-icon-text {
  padding: 0.75rem 1.5rem;
  background-color: #16a34a;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.btn-icon-text:hover {
  background-color: #15803d;
}`,
    },
    {
      id: "icon-only",
      name: "Icon Only",
      category: "Icon",
      component: (
        <button className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      ),
      tailwindCode: `<button className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
  <Heart className="w-5 h-5" />
</button>`,
      cssCode: `.btn-icon {
  padding: 0.75rem;
  background-color: #db2777;
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.btn-icon:hover {
  background-color: #be185d;
}`,
    },
    {
      id: "icon-circle",
      name: "Circle Icon",
      category: "Icon",
      component: (
        <button className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      ),
      tailwindCode: `<button className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors">
  <Plus className="w-5 h-5" />
</button>`,
      cssCode: `.btn-icon-circle {
  padding: 0.75rem;
  background-color: #0891b2;
  color: white;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.btn-icon-circle:hover {
  background-color: #0e7490;
}`,
    },
    {
      id: "icon-arrow",
      name: "Icon Arrow",
      category: "Icon",
      component: (
        <button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all flex items-center gap-2 group">
          Continue
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all flex items-center gap-2 group">
  Continue
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>`,
      cssCode: `.btn-arrow {
  padding: 0.75rem 1.5rem;
  background-color: #7c3aed;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.btn-arrow:hover {
  background-color: #6d28d9;
}

.btn-arrow:hover .arrow-icon {
  transform: translateX(4px);
  transition: transform 0.2s;
}`,
    },
    // Animated Buttons
    {
      id: "animated-pulse",
      name: "Pulse Animation",
      category: "Animated",
      component: (
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors relative">
          <span className="absolute inset-0 rounded-lg bg-red-600 animate-ping opacity-25" />
          <span className="relative">Live</span>
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors relative">
  <span className="absolute inset-0 rounded-lg bg-red-600 animate-ping opacity-25" />
  <span className="relative">Live</span>
</button>`,
      cssCode: `.btn-pulse {
  padding: 0.75rem 1.5rem;
  background-color: #dc2626;
  color: white;
  border-radius: 0.5rem;
  position: relative;
  transition: background-color 0.2s;
}

.btn-pulse::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background-color: #dc2626;
  opacity: 0.25;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(1.1);
    opacity: 0;
  }
}`,
    },
    {
      id: "animated-shimmer",
      name: "Shimmer Effect",
      category: "Animated",
      component: (
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] hover:opacity-90 transition-opacity">
          Shimmer
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
  Shimmer
</button>

// Add to your CSS or Tailwind config:
@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
      cssCode: `.btn-shimmer {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #2563eb, #9333ea, #db2777);
  background-size: 200% 100%;
  color: white;
  border-radius: 0.5rem;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    },
    // State Buttons
    {
      id: "state-success",
      name: "Success Button",
      category: "States",
      component: (
        <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
          <Check className="w-4 h-4" />
          Success
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
  <Check className="w-4 h-4" />
  Success
</button>`,
      cssCode: `.btn-success {
  padding: 0.75rem 1.5rem;
  background-color: #059669;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.btn-success:hover {
  background-color: #047857;
}`,
    },
    {
      id: "state-danger",
      name: "Danger Button",
      category: "States",
      component: (
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
  <Trash2 className="w-4 h-4" />
  Delete
</button>`,
      cssCode: `.btn-danger {
  padding: 0.75rem 1.5rem;
  background-color: #dc2626;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
}

.btn-danger:hover {
  background-color: #b91c1c;
}`,
    },
    {
      id: "state-disabled",
      name: "Disabled Button",
      category: "States",
      component: (
        <button
          className="px-6 py-3 bg-slate-300 text-slate-500 rounded-lg cursor-not-allowed"
          disabled
        >
          Disabled
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-slate-300 text-slate-500 rounded-lg cursor-not-allowed" disabled>
  Disabled
</button>`,
      cssCode: `.btn-disabled {
  padding: 0.75rem 1.5rem;
  background-color: #cbd5e1;
  color: #64748b;
  border-radius: 0.5rem;
  cursor: not-allowed;
}

.btn-disabled:disabled {
  opacity: 0.6;
}`,
    },
    // Special Buttons
    {
      id: "special-glass",
      name: "Glassmorphism",
      category: "Special",
      component: (
        <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-slate-900 rounded-lg hover:bg-white/30 transition-all shadow-lg">
          Glass Button
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-slate-900 rounded-lg hover:bg-white/30 transition-all shadow-lg">
  Glass Button
</button>`,
      cssCode: `.btn-glass {
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #0f172a;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.btn-glass:hover {
  background-color: rgba(255, 255, 255, 0.3);
}`,
    },
    {
      id: "special-neon",
      name: "Neon Glow",
      category: "Special",
      component: (
        <button className="px-6 py-3 bg-slate-900 text-cyan-400 rounded-lg border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all">
          Neon Effect
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-slate-900 text-cyan-400 rounded-lg border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all">
  Neon Effect
</button>`,
      cssCode: `.btn-neon {
  padding: 0.75rem 1.5rem;
  background-color: #0f172a;
  color: #22d3ee;
  border: 2px solid #22d3ee;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
  transition: all 0.2s;
}

.btn-neon:hover {
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.8);
}`,
    },
    {
      id: "special-3d",
      name: "3D Button",
      category: "Special",
      component: (
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-[0_6px_0_#c2410c] hover:shadow-[0_4px_0_#c2410c] hover:translate-y-0.5 active:shadow-[0_0px_0_#c2410c] active:translate-y-1.5 transition-all">
          3D Effect
        </button>
      ),
      tailwindCode: `<button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-[0_6px_0_#c2410c] hover:shadow-[0_4px_0_#c2410c] hover:translate-y-0.5 active:shadow-[0_0px_0_#c2410c] active:translate-y-1.5 transition-all">
  3D Effect
</button>`,
      cssCode: `.btn-3d {
  padding: 0.75rem 1.5rem;
  background-color: #f97316;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 6px 0 #c2410c;
  transition: all 0.1s;
}

.btn-3d:hover {
  box-shadow: 0 4px 0 #c2410c;
  transform: translateY(2px);
}

.btn-3d:active {
  box-shadow: 0 0px 0 #c2410c;
  transform: translateY(6px);
}`,
    },
    // CTA Buttons
    {
      id: "cta-primary",
      name: "Call to Action",
      category: "CTA",
      component: (
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Get Started Now
        </button>
      ),
      tailwindCode: `<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
  <Zap className="w-5 h-5" />
  Get Started Now
</button>`,
      cssCode: `.btn-cta {
  padding: 1rem 2rem;
  background: linear-gradient(to right, #2563eb, #9333ea);
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn-cta:hover {
  background: linear-gradient(to right, #1d4ed8, #7e22ce);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}`,
    },
    {
      id: "cta-buy",
      name: "Buy Button",
      category: "CTA",
      component: (
        <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl transition-all flex items-center gap-3">
          <ShoppingCart className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="text-xs opacity-80">Add to Cart</span>
          </div>
        </button>
      ),
      tailwindCode: `<button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl transition-all flex items-center gap-3">
  <ShoppingCart className="w-5 h-5" />
  <div className="flex flex-col items-start">
    <span className="text-xs opacity-80">Add to Cart</span>
  </div>
</button>`,
      cssCode: `.btn-buy {
  padding: 1rem 2rem;
  background-color: #16a34a;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s;
}

.btn-buy:hover {
  background-color: #15803d;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}`,
    },
  ];

  const categories = Array.from(new Set(buttons.map((b) => b.category)));
  return (
    <div className="space-y-12 max-w-6xl mx-auto mt-10 md:mt-[60px]">
      {categories.map((category) => (
        <section key={category}>
          <h2 className="mb-6 pb-4 border-b border-slate-200 text-2xl font-semibold">
            {category} Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buttons
              .filter((button) => button.category === category)
              .map((button) => (
                <ButtonCard
                  key={button.id}
                  button={button}
                  onClick={() => onButtonClick(button)}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ButtonLibrary;
