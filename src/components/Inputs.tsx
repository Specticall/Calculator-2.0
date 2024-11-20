import { cn } from "../utils/lib";

const buttons = [
  { value: "AC" },
  { value: "DEL" },
  { value: "?", type: "secondary" },
  { value: "/", type: "accent" },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: "X", type: "accent" },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: "-", type: "accent" },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: "+", type: "accent" },
  { value: "" },
  { value: 0 },
  { value: "," },
  { value: "=", type: "accent" },
] as const;

type Props = {
  onInput: (value: string | number) => void;
  onNavigateToSupport: () => void;
};

const types = {
  accent: "bg-yellow-500",
  secondary: "bg-zinc-700",
};

export default function Inputs({ onInput, onNavigateToSupport }: Props) {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {buttons.map((item, i) => {
        return (
          <p
            key={i}
            className={cn(
              "aspect-square bg-gray-500 hover:opacity-70 transition-all duration-100 cursor-pointer rounded-md flex items-center text-white justify-center font-semibold text-lg ",
              "type" in item && types[item.type]
            )}
            onClick={() => {
              if (item.value === "?") {
                onNavigateToSupport();
              } else {
                onInput(item.value);
              }
            }}
          >
            {item.value}
          </p>
        );
      })}
    </ul>
  );
}
