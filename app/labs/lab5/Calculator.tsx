"use client";
import { useState } from "react";
const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${op}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error ?? "Error");
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };
  const input = "mb-2 block w-full max-w-xs rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="wd-calculator-a">A:</label>
      <input
        id="wd-calculator-a"
        type="number"
        placeholder="A"
        className={input}
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <label htmlFor="wd-calculator-b">B:</label>
      <input
        id="wd-calculator-b"
        type="number"
        placeholder="B"
        className={input}
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <label htmlFor="wd-calculator-operation">Operation:</label>
      <select
        id="wd-calculator-operation"
        className={input}
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <button
        type="button"
        id="wd-calculator-calculate"
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => calculate(operation)}
      >
        Calculate
      </button>
      <input id="wd-calculator-result" className={input} value={error || result} readOnly />
      <hr />
    </div>
  );
}