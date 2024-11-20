export default function Success() {
  const randomNumbers = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 9)
  );
  return (
    <div className="bg-black/90 min-h-screen w-full grid place-items-center">
      <div className="bg-black p-12 rounded-lg max-w-[40rem]">
        <p className="text-center text-white mb-4">Support Ticket Form</p>
        <h1 className="text-yellow-400 text-2xl leading-[150%] text-center">
          Thank you for sending us your report, we will track the problem now
        </h1>
        <p className="text-gray-500 text-center mt-4">
          Ticker Number :{" "}
          <span className="text-white">{randomNumbers.join("")}</span>
        </p>
      </div>
    </div>
  );
}
