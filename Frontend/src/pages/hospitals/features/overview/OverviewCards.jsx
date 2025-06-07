const colorMap = {
  "blue-500": "bg-blue-500",
  "red-500": "bg-red-500",
  "green-600": "bg-green-600",
  "indigo-600": "bg-indigo-600",
};

function OverviewCards({ heading, color, number }) {
  return (
    <div
      className={`p-5 rounded-lg text-white shadow-xs ${
        colorMap[color] || "bg-gray-300"
      }`}
    >
      <h1 className="text-md font-semibold mb-3">{heading}</h1>
      <p className="font-bold text-2xl">{number}</p>
    </div>
  );
}

export default OverviewCards;
