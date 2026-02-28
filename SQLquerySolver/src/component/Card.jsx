import React from "react";
import { FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setQuestions } from "../questionStore";


export default function Card(props) {

    const navigate = useNavigate();

     const handleClick = () => {

  console.log("CLICKED CARD");
  console.log("Saving Questions:", props.questions);

  setQuestions(props.questions);

  console.log("Saved:", localStorage.getItem("questions"));

  navigate("/sqlquery", { 
    state: { 
      difficulty: props.level,
      dark : props.dark
    }
  });
};

    const colorMap = {
        red: {
            iconBg: "bg-red-100",
            iconText: "text-red-500",
            btn: "bg-red-500 hover:bg-red-600"
        },
        yellow: {
            iconBg: "bg-yellow-100",
            iconText: "text-yellow-500",
            btn: "bg-yellow-500 hover:bg-yellow-600"
        },
        green: {
            iconBg: "bg-green-100",
            iconText: "text-green-500",
            btn: "bg-green-500 hover:bg-green-600"
        }
    };

    const styles = colorMap[props.color] || colorMap.red;

    return (
        <>
            <div className={props.dark ? `rounded-xl p-9 w-64 bg-linear-to-b from-[#1E1E1E] to-[#050505] border border-[#242424] shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center` : "rounded-xl p-9 w-64 bg-linear-to-b bg-gray-200 border border-black-500 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center"}>

                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center ${styles.iconBg} ${styles.iconText} rounded-full mb-5`}>
                    <FaFire size={20} />
                </div>

                {/* Title */}
                <h1 className={`text-xl font-semibold mb-4 
${props.dark ? "text-white/80" : "text-black"}`}>{props.heading}</h1>

                {/* Description */}
                <p className={`text-sm mb-4 
${props.dark ? "text-white/60" : "text-gray-700"}`}>
                    {props.para}
                </p>

                {/* Stats */}
                <div className={`text-xs space-y-1 mb-3 
${props.dark ? "text-white/50" : "text-gray-600"}`}>
                    <p>{props.time}</p>
                    <p>{props.rate}</p>
                </div>

                {/* Button */}

                
                    <button 
                    onClick={handleClick} 
                    className={`px-2 py-1 rounded-md ${styles.btn} text-white text-sm font-medium transition mt-2`}
                    >
                        Start {props.level}
                    </button>
                

            </div>
        </>
    );
};