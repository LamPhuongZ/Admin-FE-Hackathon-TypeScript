import gifLoading from "../../assets/gifs/gg.gif";

export default function Loading() {
  return (
    <div
      className="fixed t-0 l-0 w-full h-screen bg-[#6da2f139] z-[1000]"
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src={gifLoading} alt="loading" loading="lazy" />
      </div>
    </div>
  );
}
