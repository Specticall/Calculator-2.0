import { HTMLAttributes, useState } from "react";
import { cn } from "../../utils/lib";

type Props = {
  onSelect: (item: string) => void;
};

const topics = ["General", "Bug"] as const;

export default function TopicInput({
  onSelect,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) {
  const [selected, setSelected] = useState<string>("General");

  return (
    <div {...props} className={cn("", props.className)}>
      <p className="col-span-2 text-white mb-2">
        Topic <span className="text-red-200">*</span>
      </p>
      <p className="text-white/50 mb-4">What can I help you today?</p>
      <ul className="flex gap-4">
        {topics.map((topic) => {
          return (
            <li
              className="text-white cursor-pointer group flex items-center group gap-3"
              onClick={() => {
                onSelect(topic);
                setSelected(topic);
              }}
            >
              <div
                className={cn(
                  "h-4 aspect-square border border-white/50 group-hover:border-white/80 transition-all duration-100 ",
                  selected === topic && "bg-yellow-600"
                )}
              ></div>
              <p
                className={cn(
                  "text-white/60 group-hover:text-white/70",
                  selected === topic && "text-white"
                )}
              >
                {topic}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
