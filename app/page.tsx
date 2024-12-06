"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { useState, useEffect, useRef } from "react";
import {HeroScrollDemo} from "./hero_scroll"

export default function Home() {
  const [next, setNext] = useState(false)
  return (
      <div className="h-[65rem] w-full flex items-center justify-center overflow-hidden" onClick={() => setNext(true)}>
        {!next ?
        <MaskContainer
            revealText={
              <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                We Are Bet  + Social + Inference + Game + AI<br></br>
                AI Or You Play A Social Reasoning Game With AI<br></br>
                {/* Who Win??? */}
              </p>
            }
            className="w-full h-full border rounded-md"
        >
          {/* We Are Bet  + Social + Inference + Game + AI<br></br> */}
          {/* AI Or You Play A Social Reasoning Game With AI<br></br> */}
          <span className="text-red-500">Who Will Be The Winner???</span>
        </MaskContainer>
        :
        <HeroScrollDemo></HeroScrollDemo>
        }
      </div>
  );
}
