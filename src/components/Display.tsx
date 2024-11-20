import { Operator } from "../hooks/useCalculator";
import { formatNumber } from "../utils/lib";

type Props = {
  numberA?: string;
  numberB?: string;
  operator?: Operator;
};

export default function Display({ numberA, numberB, operator }: Props) {
  const parseFloatFull = (num?: string) => {
    if (num === "Error") return "Error";
    if (!num) return undefined;
    if (num === "") return undefined;
    const [whole, fraction] = num.split(",");

    if (num === "-") {
      return "-";
    }

    if (typeof fraction !== "number" && !num.includes(",")) {
      return formatNumber(Number(whole));
    }
    return `${formatNumber(Number(whole))},${fraction}`;
  };

  return (
    <div className="pt-12 flex flex-col items-end pb-10">
      <p className="mb-2 font-semibold flex gap-2 text-white/50 min-h-6">
        {parseFloatFull(numberA)}{" "}
        <span className="text-orange-500">{operator}</span>{" "}
        {parseFloatFull(numberB)}
      </p>
      <h1 className="text-4xl font-semibold text-white">
        {parseFloatFull(numberB || numberA) || "0"}
      </h1>
    </div>
  );
}
