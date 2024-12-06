"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rank } from "./rank";

export function Bet() {
    const [next, setNext] = useState(false)

    const [leftV, setLeftV] = useState(50)
    const [rightV, setRightV] = useState(50)

    const [lEffects, setLEffects] = useState<Array<{ id: number; emoji: string }>>([]);
    const [rEffects, setREffects] = useState<Array<{ id: number; emoji: string }>>([]);

    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });

    useEffect(() => {
        setMessages((prev) => [...prev, "我看好A选手,A大冲冲冲!"]);
        setMessages((prev) => [...prev, "The Best Gamer F"]);
        setMessages((prev) => [...prev, "大家加油!加油!再加油!"]);
        // setMessages((prev) => [...prev, "我再投C一票,C是最棒的!"]);
        // setMessages((prev) => [...prev, "G是第一!G是第一!"]);
    }, [])

    const handleLClick = (event: React.MouseEvent) => {
        const id = Date.now();
        const emojiOptions = ["👍", "❤️", "😂", "🎉", "+1"]; // 可选 emoji
        const randomEmoji = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];

        const mouseX = event.clientX; // 获取鼠标点击的 X 坐标
        const mouseY = event.clientY; // 获取鼠标点击的 Y 坐标
        setMousePosition({ x: mouseX, y: mouseY })

        // 添加效果到列表
        setLEffects((prev) => [...prev, { id, emoji: randomEmoji }]);
        // 自动清除
        setTimeout(() => {
            setLEffects((prev) => prev.filter((effect) => effect.id !== id));
        }, 1000);
        setLeftV(leftV + 1)
    };

    const handleRClick = (event: React.MouseEvent) => {
        const id = Date.now();
        const emojiOptions = ["👍", "❤️", "😂", "🎉", "+1"]; // 可选 emoji
        const randomEmoji = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];

        // 添加效果到列表
        setREffects((prev) => [...prev, { id, emoji: randomEmoji }]);
        // 自动清除
        setTimeout(() => {
            setREffects((prev) => prev.filter((effect) => effect.id !== id));
        }, 1000);
        setRightV(rightV + 1)
    };

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages((prev) => [...prev, input]);
            setInput("");
        }
    };
  
  return (
    <div className="flex flex-col overflow-hidden h-[65rem] w-[112rem]">
        {!next? 
        <>
            <div className="w-full h-[10rem] mt-10">
                <h4 className="mt-10 text-6xl text-center font-bold ">Bet On Who?</h4>
            </div>
            <div className="flex flex-row gap-20 w-[95rem] mt-10 ml-20">
                <Image
                src={`/bg2.png`}
                alt="hero"
                height={500}
                width={1000}
                className="ml-20 rounded-2xl object-cover h-full object-left-top shadow-2xl border-2 border-black"
                draggable={false} 
                onClick={() => setNext(true)}
                />

                <div className="flex flex-col gap-5 h-full w-[30rem] mr-10">
                    <div className="w-full h-[5rem] flex flex-row gap-3 ">
                        <div className="bg-red-400 w-1/2 h-full text-center rounded-lg border-2 border-black hover:shadow-xl cursor-pointer" onClick={handleLClick}>
                        {lEffects.map((effect) => (
                            <motion.div
                                key={effect.id}
                                initial={{ opacity: 1, y: 0, scale: 1 }}
                                animate={{ opacity: 0, y: -50, scale: 1.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: "absolute",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    pointerEvents: "none",
                                    left: mousePosition.x,
                                    top: mousePosition.y,
                                }}
                            >
                                {effect.emoji}
                            </motion.div>
                        ))}
                        <h1 className="my-6 text-center text-black font-bold text-2xl">{leftV} Voted</h1>
                        </div>
                        <div  className="bg-blue-400 w-1/2 h-full text-center rounded-lg border-2 border-black hover:shadow-xl cursor-pointer" onClick={handleRClick}>
                        {rEffects.map((effect) => (
                            <motion.div
                                key={effect.id}
                                initial={{ opacity: 1, y: 0, scale: 1 }}
                                animate={{ opacity: 0, y: -50, scale: 1.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: "absolute",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    pointerEvents: "none",
                                    left: mousePosition.x,
                                    top: mousePosition.y,
                                }}
                            >
                                {effect.emoji}
                            </motion.div>
                        ))}
                        <h1 className="my-6 text-center text-black font-bold text-2xl">{rightV} Voted</h1>
                        </div>
                    </div>
                    <div className="w-[30rem] h-full bg-gay-100 rounded-lg border-2 border-black shadow-xl flow flow-col gap-5">
                        <div
                            style={{
                                flex: 1,
                                padding: "10px",
                                overflowY: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                style={{
                                    alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                                    maxWidth: "60%",
                                    background: index % 2 === 0 ? "#e0f7fa" : "#d1c4e9",
                                    padding: "10px 15px",
                                    borderRadius: "20px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    position: "relative",
                                }}
                            >
                            {message}
                            {/* 气泡尖角 */}
                            <div
                                style={{
                                    content: "''",
                                    position: "absolute",
                                    bottom: "-5px",
                                    left: index % 2 === 0 ? "-10px" : "auto",
                                    right: index % 2 !== 0 ? "-10px" : "auto",
                                    borderWidth: "5px",
                                    borderStyle: "solid",
                                    borderColor: index % 2 === 0
                                        ? "transparent #e0f7fa transparent transparent"
                                        : "transparent transparent transparent #d1c4e9",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* 输入框 */}
                <div
                    style={{
                        display: "flex",
                        padding: "9px",
                        left: 1080,
                        top: 815,
                    }}
                    className="absolute rounded-lg w-[30rem]"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type your message..."
                        style={{
                            flex: 1,
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            marginRight: "10px",
                        }}
                    />
                    <button
                        onClick={sendMessage}
                        style={{
                            padding: "10px 20px",
                            background: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}
                    >
                        Send
                    </button>
                </div>
                    </div>
                </div>
            </div>
        </>
        :
        <Rank></Rank>}
    </div>
  );
}
