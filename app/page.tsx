import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "成果展示", href: "/projects" },
  { name: "项目简介", href: "/contact" },
];

export default function Home() {
  return (
  <div
  className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('')" }}
>


      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
  大梅沙智探盐田海岸—AI赋能的沉浸式海岸探索平台
        </h1>


      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Dameisha Intelligent Exploration Yantian Coast-AI-enabled immersive coastal exploration platform
        </h2>
      </div>
    </div>
  );

}
