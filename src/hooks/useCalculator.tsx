import { useState } from "react";
import { formatNumber } from "../utils/lib";

export function isOperator(item: string) {
  return item === "+" || item === "-" || item === "/" || item === "X";
}

export function operate(a: number, operator: string, b: number) {
  switch (operator) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b);
    case "/":
      if (b === 0) return "Error";
      return String(a / b);
    case "X":
      return String(a * b);
  }
}

export type Operator = "-" | "+" | "X" | "/";
export type Inputs = { a?: string; b?: string };
export type HistoryItem = { operation: string; result: string };

export default function useCalculator() {
  const [histories, setHistories] = useState<HistoryItem[]>([]);
  const [active, setActive] = useState<keyof Inputs>("a");
  const [input, setInput] = useState<Inputs>({ a: "", b: "" });
  const [operator, setOperator] = useState<Operator>();

  const handleInput = (item: string | number) => {
    const activeInput = input[active];

    if (typeof item === "number") {
      setInput((current) => {
        const newInput = (current[active] || "") + item;
        return { ...current, [active]: newInput };
      });
      return;
    }

    if (item === "DEL") {
      setInput((current) => {
        return { ...current, [active]: input[active]?.slice(0, -1) || "" };
      });
      return;
    }

    if (item === ",") {
      if (activeInput?.includes(",")) {
        return;
      }

      setInput((current) => {
        const newInput = !current[active] ? "0," : current[active] + item;
        return { ...current, [active]: newInput };
      });
      return;
    }

    if (item === "=" && input.a && input.b && operator) {
      const operationResult = String(
        operate(
          Number(input.a!.replace(",", ".")),
          operator,
          Number(input.b!.replace(",", "."))
        )
      );

      setHistories((current) => [
        ...current,
        {
          operation: `${formatNumber(input.a)} ${operator} ${formatNumber(
            input.b
          )}`,
          result: operationResult,
        },
      ]);

      setInput({
        a: operationResult,
        b: "",
      });
      setOperator(undefined);
      setActive("a");
    }

    if (isOperator(item) && input.a && input.b && operator) {
      const operationResult = String(
        operate(
          Number(input.a!.replace(",", ".")),
          operator,
          Number(input.b!.replace(",", "."))
        )
      );

      setHistories((current) => [
        ...current,
        {
          operation: `${formatNumber(input.a)} ${operator} ${formatNumber(
            input.b
          )}`,
          result: operationResult,
        },
      ]);

      setInput({
        a: operationResult,
        b: "",
      });
      setOperator(item);
      setActive("b");
      return;
    }

    if (item === "AC") {
      setOperator(undefined);
      setActive("a");
      setInput({ a: "", b: "" });
    }

    if (item === "-" && (!input.a || operator)) {
      setInput((current) => {
        const newInput = (current[active] || "") + item;
        return { ...current, [active]: newInput };
      });
      return;
    }

    if (isOperator(item)) {
      setActive((current) => (current === "a" ? "b" : "a"));
      setOperator(item);
    }
  };

  return { handleInput, input, operator, histories };
}
