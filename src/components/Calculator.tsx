import Display from "./Display";
import Inputs from "./Inputs";
import useCalculator from "../hooks/useCalculator";
import History from "./History";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const { handleInput, input, operator, histories } = useCalculator();
  const navigate = useNavigate();

  return (
    <article className="bg-black shadow-sm grid gap-8 grid-cols-[4fr_3fr] rounded-lg p-4 w-full max-w-[35rem]">
      <div>
        <Display numberA={input?.a} numberB={input?.b} operator={operator} />
        <Inputs
          onNavigateToSupport={() => navigate("/support")}
          onInput={handleInput}
        />
      </div>
      <History histories={histories} />
    </article>
  );
}
