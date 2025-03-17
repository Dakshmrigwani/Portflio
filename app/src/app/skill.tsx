// "use client";

// import { useEffect, useState } from "react";
// import {
//   IconFileTypeHtml,
//   IconFileTypeCss,
//   IconBrandJavascript,
//   IconFileTypeTsx,
//   IconBrandBootstrap,
//   IconBrandTailwind,
//   IconBrandReact,
//   IconBrandNextjs,
//   IconBrandRedux,
// } from "@tabler/icons-react";
// import { cn } from "@/lib/utils";
// import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

// const Frontend = [
//   { icon: <IconFileTypeHtml className="h-12 w-12" />, name: "HTML" },
//   // { icon: <IconFileTypeCss className="h-12 w-12" />, name: "CSS" },
//   // { icon: <IconBrandJavascript className="h-12 w-12" />, name: "JavaScript" },
//   // { icon: <IconFileTypeTsx className="h-12 w-12" />, name: "TypeScript" },
//   // { icon: <IconBrandBootstrap className="h-12 w-12" />, name: "Bootstrap" },
//   // { icon: <IconBrandTailwind className="h-12 w-12" />, name: "Tailwind" },
//   // { icon: <IconBrandReact className="h-12 w-12" />, name: "React" },
//   // { icon: <IconBrandNextjs className="h-12 w-12" />, name: "Next.js" },
//   // { icon: <IconBrandRedux className="h-12 w-12" />, name: "Redux" },
// ];

// export default function Skills() {
//   return (
//     <div className="min-h-screen relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center mb-40 bg-black overflow-hidden">
//       <OrbitingCircles iconSize={50}>
//         {Frontend.map((skill, index) => (
//           <div key={index} className="text-white">
//             {skill.icon}
//           </div>
//         ))}
//       </OrbitingCircles>
//       <OrbitingCircles iconSize={40} radius={120} reverse speed={2}>
//         {Frontend.map((skill, index) => (
//           <div key={index} className="text-gray-300">
//             {skill.icon}
//           </div>
//         ))}
//       </OrbitingCircles>
//     </div>
//   );
// }
