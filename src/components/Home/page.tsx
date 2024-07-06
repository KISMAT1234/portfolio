"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/ui/aurora-background";
import { SparklesCore } from "@/ui/sparkles";
import { FlipWords } from "@/ui/flip-words";

import Link from "next/link";

export default function Home() {
  const words = ["FRONTEND", "BACKEND", "FIGMA","FULL_STACK"];
  return (
        <div className="h-[40rem] px-10 relative w-full bg-black overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="text-white flex relative top-4 justify-center ">
            <Link href="">
              <h1 className="text-2xl mx-2 font-serif hover:text-indigo-600 hover:text-3xl">Home</h1>
            </Link>
            <Link href="">
              <h1 className="text-2xl mx-2 font-serif hover:text-indigo-600 hover:text-3xl">Blogs</h1>
            </Link>
            <Link href="">
              <h1 className="text-2xl mx-2 font-serif hover:text-indigo-600 hover:text-3xl">Skills</h1>
            </Link>
            <Link href="">
              <h1 className="text-2xl mx-2 font-serif hover:text-indigo-600 hover:text-3xl">Contact</h1>
            </Link>
          </div>

          <div className="relative mt-[30%]">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Hi, I'm 
                <FlipWords words={words} className="text-white"/>
                DEVELOPER
                 <br />
                websites with Aceternity UI
              </div>
          </div>
        </div>
  );
}

