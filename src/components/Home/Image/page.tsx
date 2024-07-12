"use client";
import React from "react";
import { BackgroundGradient } from "@/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/kismat.JPG`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />

      </BackgroundGradient>
    </div>
  );
}
