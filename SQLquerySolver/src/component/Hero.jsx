import React from 'react'
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Card from './Card';

export default function Hero() {

    const [dark, setDark] = React.useState(true);

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                    *{
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>
            <header className={`min-h-screen flex flex-col items-center transition
                    ${dark ? "bg-black text-white/70" : "bg-white text-black"}`}>
                <nav className="flex flex-col items-center w-full border-b border-zinc-800">
                    <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
                        <a href="http://cipherschools.com">
                            <p>CipherSQLStudio</p>
                        </a>

                        <button
                            onClick={() => setDark(!dark)}
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424]"
                        >
                            {dark ? <IoIosSunny /> : <FaMoon className='text-gray-300' />}
                            {dark ? "Light Mode" : <p className='text-gray-300'>Dark Mode</p>}
                        </button>

                        <button
                            onClick={() => setDark(!dark)}
                            className="md:hidden p-2 rounded-lg border bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424]"
                        >
                            {dark ? <IoIosSunny /> : <FaMoon className='text-gray-300' />}
                        </button>
                    </div>
                </nav>

                <div className="absolute top-[72px] left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="w-px bg-zinc-800"></div>
                    <div className="w-px bg-zinc-800"></div>
                </div>

                <div className=" md: flex flex-wrap items-center justify-center gap-2 pl-2.5 pr-4 py-1.5 mt-30 rounded-full bg-[#050505] border border-white/15 max-w-full text-center">
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                    </div>
                    {dark ? <p className="text-sm">Pick a challenge that matches your skill level.</p> : <p className="text-sm text-white">Pick a challenge that matches your skill level.</p>}

                </div>
                <div className="w-full max-w-6xl px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

                    <Card
                        heading={"Hard"}
                        para={"Advanced challenges to test your limits and push your problem-solving skills."}
                        time={"⏱ Avg Time: 30+ min"}
                        rate={"📉 Success Rate: Low"}
                        color="red"
                        dark={dark}
                        level="Hard"
                        questions={[
                            {
                                id: 1,
                                text: "Show users whose age is greater than 18 AND status is Active",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                ]
                            },

                            {
                                id: 2,
                                text: "Show users who are NOT Active and live in Delhi",
                                answer: [
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            },

                            {
                                id: 3,
                                text: "Show users whose age is between 19 and 22",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            },

                            {
                                id: 4,
                                text: "Show users whose name starts with 'A' and status is Active",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                ]
                            },

                            {
                                id: 5,
                                text: "Show users who live in Delhi OR whose age is 18",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 3, Name: "Ankita", Age: 18, City: "Shinagar", Status: "NoActive" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            }
                        ]} />

                    < Card
                        heading={"Medium"}
                        para={"Balanced challenge Improve problem solving Requires logical thinking."}
                        time={"⏱ Avg Time: 15-25 min"}
                        rate={"📉 Success Rate: Moderate"}
                        color="yellow"
                        dark={dark}
                        level="Medium"
                        questions={
                            [

                                {
                                    id: 1,
                                    text: "Show users whose age is greater than 18 but less than 22",
                                    answer: [
                                        { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                        { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                        { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                    ]
                                },

                                {
                                    id: 2,
                                    text: "Show users who live in Delhi and are NOT Active",
                                    answer: [
                                        { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                    ]
                                },

                                {
                                    id: 3,
                                    text: "Show users whose age is either 19 or 20",
                                    answer: [
                                        { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                        { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                        { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                    ]
                                },

                                {
                                    id: 4,
                                    text: "Show users whose city is not Delhi",
                                    answer: [
                                        { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                        { ID: 3, Name: "Ankita", Age: 18, City: "Shinagar", Status: "NoActive" }
                                    ]
                                },

                                {
                                    id: 5,
                                    text: "Show users whose age is greater than 18 and live in Delhi",
                                    answer: [
                                        { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                        { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                        { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                    ]
                                }

                            ]}
                    />

                    <Card
                        heading={"Easy"}
                        para={"Beginner-friendly questions Strengthen your basics Perfect to get started."}
                        time={"⏱ Avg Time: 5-10 min"}
                        rate={"📉 Success Rate: High"}
                        color="green"
                        dark={dark}
                        level="Easy"
                        questions={[

                            {
                                id: 1,
                                text: "Show all users whose age is greater than 18",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            },

                            {
                                id: 2,
                                text: "Show all users who live in Delhi",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            },

                            {
                                id: 3,
                                text: "Show all Active users",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                ]
                            },

                            {
                                id: 4,
                                text: "Show users whose age is exactly 20",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" }
                                ]
                            },

                            {
                                id: 5,
                                text: "Show users whose age is greater than 19 AND city is Delhi",
                                answer: [
                                    { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
                                    { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
                                ]
                            }

                        ]}
                    />

                </div>
            </header>
        </>
    )
}