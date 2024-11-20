import { HistoryItem } from "../hooks/useCalculator";
import { formatNumber } from "../utils/lib";

type Props = {
  histories?: HistoryItem[];
};

export default function History({ histories }: Props) {
  return (
    <div className="flex flex-col h-0 min-h-full">
      <p className="text-white self-start mb-8">History</p>
      <ul className="grid gap-6 overflow-auto pr-4 w-full">
        {histories?.map((history, i) => {
          return (
            <li key={i}>
              <p className="text-white/70 whitespace-nowrap text-end">
                {history.operation} =
              </p>
              <p className="text-white/50 text-end mt-1">
                {formatNumber(history.result)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
