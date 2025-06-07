import { GoDotFill } from "react-icons/go";

const bgColorMap = {
  high: "bg-red-600",
  medium: "bg-gray-900",
  low: "bg-gray-200",
};

const textColorMap = {
  high: "text-white",
  medium: "text-white",
  low: "text-black",
};

function OverviewActivityCards({ text, time, priority }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 mb-2">
      <div>
        <GoDotFill className="text-blue-500" />
      </div>
      <div className="flex flex-col">
        <div className="text-main-text text-lg font-medium">{text}</div>
        <div className="text-xs text-normal-text">{time}</div>
      </div>
      <div
        className={`${bgColorMap[priority]} ${textColorMap[priority]} p-1 px-2 rounded-lg font-semibold`}
      >
        {priority}
      </div>
    </div>
  );
}

export default OverviewActivityCards;
