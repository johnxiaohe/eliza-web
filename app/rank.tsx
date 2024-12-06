"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

export function Rank() {
    
  return (
    <div className="flex flex-col overflow-hidden h-[65rem] w-[112rem]">
        <div className="w-full h-[10rem] mt-10">
            <h1 className="mt-10 text-8xl text-center font-bold ">Hall of Glory</h1>
        </div>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center dark:bg-black w-full gap-40 mx-auto px-8">
            <div className="w-1/5 bg-[url('/rankbg.png')] bg-cover" >
                <Card title="Sheetal is Nisha" icon='/gamer3.avif' size={100}  sixbg='/image.png'>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
            </div>


            <div className="w-1/5 bg-[url('/rankbg.png')] bg-cover">
                <Card title="Nisha is Munni" icon='/gamer1.avif' size={200}  sixbg='/image.png'>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                        [236, 72, 153],
                        [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
                </Card>
            </div>
            
            <div className="w-1/5 bg-[url('/rankbg.png')] bg-cover">
                <Card title="Munni is Aditi" icon='/gamer2.avif' size={100} sixbg='/image.png'>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
      </div>
    </div>
  );
}

const Card = ({
    title,
    icon,
    children,
    size,
    sixbg,
  }: {
    title: string;
    icon: string;
    children?: React.ReactNode;
    size: number;
    sixbg: string;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20">
          {!hovered ? 
          <div className="text-center text-white text-9xl group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                <Image
                src={icon}
                alt="hero"
                height={size}
                width={size}
                className="rounded-full object-cover h-full object-left-top shadow-4xl mb-10"
                />
          </div>
          :
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                <Image
                    src={sixbg}
                    alt="hero"
                    height={400}
                    width={400}
                    className="rounded-xl object-cover h-full object-left-top shadow-4xl mb-10"
                />
          </h2>
        }
        </div>
      </div>
    );
};

const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
};


export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
};