"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {Bet} from "./bet"

export function HeroScrollDemo() {
    const [next, setNext] = useState(false)
  return (
    <div className="flex flex-col overflow-hidden" onClick={() => setNext(true)}>
    {!next ?
        <ContainerScroll
            titleComponent={
            <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                {/* SoBetAi <br /> */}
                <span className="md:text-[5rem] font-bold mt-1 leading-none">
                    Let's Play
                </span>
                </h1>
            </>
            }>
            <Image
            src={`/bg1.png`}
            alt="hero"
            height={800}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false} />
        </ContainerScroll>
        :
        <Bet></Bet>
    }
    </div>
  );
}
