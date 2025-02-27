function Banner() {
  return (
    <div className="min-h-[750px] bg-banner bg-no-repeat bg-cover flex items-center justify-center gap-[0px]">
      <div className="flex items-center justify-center gap-[10px] flex-col">
        <h1 className="my-[15px] text-[42px] text-[#222] font-normal">
          XStore Marseille04 Demo
        </h1>
        <div className="text-[#555] text-[16px] font-normal mb-[25px]">
          Make yours celebrations even more special this years with beautiful.
        </div>
        <button>Go to shop</button>
      </div>
    </div>
  );
}

export default Banner;
