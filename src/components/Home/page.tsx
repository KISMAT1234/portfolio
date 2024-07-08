"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/ui/aurora-background";
import { SparklesCore } from "@/ui/sparkles";
import { FlipWords } from "@/ui/flip-words";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/ui/text-reveal-card";
import { Button } from "@/ui/moving-border";
import Link from "next/link";

export default function Main() {
  const words = ["FRONTEND", "BACKEND", "FIGMA", "FULL_STACK"];
  return (
    <div className="h-[100vh] px-10 relative w-full bg-black overflow-hidden rounded-md">
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
      <div className="text-white mb-8 flex relative top-4 justify-center ">
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
      <div className="flex justify-between">
      <div>
        <div className="relative mt-[50%]">
          <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Hi, I'm
            <FlipWords words={words} className="text-white mx-1" />
            DEVELOPER
            <br />
          </div>
        </div>
        <div className="">
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry"
          >
          </TextRevealCard>
        </div>
        <div className="my-3">
          <Button
             borderRadius="1.75rem"
             className="hover:bg-gray-600 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Collab with me
          </Button>
        </div>
      </div>
      <div className="relative ml-[10%] mt-[7%]">
        <div>
          <img src="/kismat.JPG" alt="My Image" className="w-[80%] rounded-[50%]" />
        </div>
      </div>
    </div>
    </div>
  );
}


  
