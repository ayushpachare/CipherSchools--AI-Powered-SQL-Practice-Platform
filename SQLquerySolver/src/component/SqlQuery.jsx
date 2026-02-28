import React, { useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { getQuestions } from "../questionStore";

const SqlQuery = () => {

  const location = useLocation();

  const difficulty = location.state?.difficulty;
  const [questions, setQuestionsState] = useState([]);
  // console.log(questions);

  const [currQuestion, setNewQuestion] = useState(0);

  React.useEffect(() => {
    const stored = getQuestions();
    setQuestionsState(stored);
  }, [currQuestion]);

  React.useEffect(() => {
    setHintText("");
    setShowHint(false);
    setHintLoading(false);
    setUserQuery("");   // also clear query
  }, [currQuestion]);



  const dark = location.state?.dark;


  const [showHint, setShowHint] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const currentQuestionId = questions[currQuestion]?.id;
  const [loading, setLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hintText, setHintText] = useState("");
  const [hintLoading, setHintLoading] = useState(false);


  const handleSubmit = async () => {

    setLoading(true);
    setIsCorrect(null);

    const res = await fetch("http://localhost:4040/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        questionId: currentQuestionId,
        userQuery: userQuery,
        difficulty: difficulty
      })
    });

    const data = await res.json();

    console.log("RESPONSE:", data);  // 👈 ADD THIS

    setIsCorrect(data.correct);
    setLoading(false);
  };

  const getHint = async () => {

    setHintLoading(true);

    const res = await fetch("http://localhost:4040/api/router", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: questions[currQuestion]?.text,
        table: [
          { ID: 1, Name: "Ayush", Age: 20, City: "Delhi", Status: "Active" },
          { ID: 2, Name: "Yash", Age: 19, City: "Jabalpur", Status: "Active" },
          { ID: 3, Name: "Ankita", Age: 18, City: "Shinagar", Status: "NoActive" },
          { ID: 4, Name: "Akshit", Age: 20, City: "Delhi", Status: "Active" },
          { ID: 5, Name: "Dev", Age: 22, City: "Delhi", Status: "NoActive" }
        ]
      })
    });

    const data = await res.json();
    // console.log("Hint response:", data);

    setHintText(data.hint);
    setHintLoading(false);
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-[#0F0F0F] text-white" : "bg-white text-black"}`}>

      {/* Navbar */}
      <nav className={`border-b ${dark ? "bg-black text-white/70" : "bg-white text-black"}`}>
        <div className="flex items-center justify-between px-6 md:px-16 py-4">

          <p className="text-lg font-semibold">
            {difficulty} Question
          </p>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
            ${dark ? "bg-[#1E1E1E] text-white" : "bg-gray-200 text-black"}`}
          >
            {dark ? (
              <>
                <FaMoon />
                <p>Dark Mode</p>
              </>
            ) : (
              <>
                <IoIosSunny />
                <p>Light Mode</p>
              </>
            )}
          </button>

        </div>
      </nav>

      {/* Radio Questions */}
      <div className='ml-12 mt-3'>
        {questions.map((q, index) => (
          <input
            key={index}
            className='m-1 h-4 w-4 accent-blue-500'
            type="radio"
            name='question'
            checked={currQuestion === index}
            onChange={() => (setNewQuestion(index))}
          />
        ))}
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-10">

        {/* Question Panel */}
        <div className={`flex-1 rounded-xl p-6 border shadow-md
        ${dark ? "bg-[#171717] text-white border-zinc-800" : "bg-white text-black border-gray-300"}`}>

          <h1 className="text-xl font-semibold mb-4">
            {difficulty} Question
          </h1>

          <p className={`${dark ? "text-zinc-300" : "text-black"}`}>
            {questions[currQuestion]?.text}
          </p>

          {/* Table */}
          <table className={`border-collapse w-full mt-5
          ${dark ? "border border-white" : "border border-black"}`}>

            <thead>
              <tr>
                {["ID", "Name", "Age", "City", "Status"].map((head) => (
                  <th
                    key={head}
                    className={`${dark ? "border border-white" : "border border-black"} p-2`}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                [1, "Ayush", 20, "Delhi", "Active"],
                [2, "Yash", 19, "Jabalpur", "Active"],
                [3, "Ankita", 18, "Shinagar", "NoActive"],
                [4, "Akshit", 20, "Delhi", "Active"],
                [5, "Dev", 22, "Delhi", "NoActive"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`${dark ? "border border-white" : "border border-black"} p-2`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* left solution side box */}

        <div className={`flex-1 rounded-xl p-6 border shadow-md
${dark ? "bg-[#171717] border-zinc-800" : "bg-white border-gray-300"}`}>

          {/* Header + Hint Button */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">Solution</h1>

            <button
              onClick={() => {
                setShowHint(true);
                getHint();
              }}
              className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded"
            >
              Hint
            </button>
          </div>

          {/* Query Input */}
          <textarea
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className={`w-full border rounded-lg p-3 text-sm focus:outline-none mb-4
    ${dark ? "bg-[#0F0F0F] text-white border-zinc-700" : "bg-gray-100 text-black border-gray-300"}`}
            rows={8}
            placeholder="Write your SQL query here..."
          />

          {/* Hint Box */}
          {showHint && (
            <>
              {hintLoading && (
                <p className="text-blue-400 animate-pulse mb-2">
                  Generating hint...
                </p>
              )}

              {!hintLoading && hintText && (
                <textarea
                  readOnly
                  value={hintText}
                  className={`w-full border rounded-lg p-3 text-sm mb-4
        ${dark ? "bg-[#1F1F1F] text-blue-400 border-zinc-700" : "bg-blue-100 text-black border-gray-300"}`}
                  rows={3}
                />
              )}
            </>
          )}

          {/* Submit */}
          <button onClick={handleSubmit} className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Submit
          </button>

        </div>

      </div>



      <div className="p-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Actual Result */}
          <div className={`rounded-xl p-6 border shadow-md
    ${dark ? "bg-[#171717] border-zinc-800" : "bg-white border-gray-300"}`}>

            <h1 className="text-xl font-semibold mb-4">
              Actual Result
            </h1>

            <div>
              {questions.length > 0 && questions[currQuestion]?.answer && (
                <table className={`w-full text-sm rounded-lg overflow-hidden border
  ${dark ? "border-zinc-700" : "border-gray-300"}`}>

                  <thead className={`${dark ? "bg-[#1F1F1F]" : "bg-gray-200"}`}>
                    <tr>
                      {Object.keys(questions[currQuestion].answer[0] || {}).map((key) => (
                        <th key={key} className="text-left p-3 border-b">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {questions[currQuestion].answer.map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((val, j) => (
                          <td key={j} className="p-3 border-b">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>

                </table>
              )}
            </div>
          </div>

          {/* User Result */}
          <div className={`rounded-xl p-6 border shadow-md
${dark ? "bg-[#171717] border-zinc-800" : "bg-white border-gray-300"}`}>

            <h1 className="text-xl font-semibold mb-4">
              Your Result
            </h1>

            {/* Pending */}
            {!loading && isCorrect === null && (
              <p className="text-gray-400">Results will appear here after submission</p>
            )}

            {/* Loading */}
            {loading && (
              <p className="text-blue-400 animate-pulse">Loading...</p>
            )}

            {/* Wrong */}
            {!loading && isCorrect === false && (
              <p className="text-red-400">Incorrect ❌</p>
            )}

            {/* Correct → Show Table */}
            {!loading && isCorrect === true && questions.length > 0 && questions[currQuestion]?.answer && (
              <table className={`w-full text-sm rounded-lg overflow-hidden border
    ${dark ? "border-zinc-700" : "border-gray-300"}`}>

                <thead className={`${dark ? "bg-[#1F1F1F]" : "bg-gray-200"}`}>
                  <tr>
                    {Object.keys(questions[currQuestion].answer[0] || {}).map((key) => (
                      <th key={key} className="text-left p-3 border-b">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {questions[currQuestion].answer.map((row, i) => (
                    <tr key={i}>
                      {Object.values(row).map((val, j) => (
                        <td key={j} className="p-3 border-b">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>

              </table>
            )}

          </div>

        </div>

      </div>



    </div>
  )
}

export default SqlQuery;