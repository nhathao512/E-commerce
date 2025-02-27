function InfoCart({ title, description, src }) {
  return (
    <div className="flex justify-center items-center gap-[18px] w-[280px] h-[104px] font-robotoMono">
      <img className="w-[40px] h-[41px]" src={src} alt="src" />
      <div className="flex-col flex justify-center items-start gap-[11px] ">
        <div className="text-[17px] text-[#fff] font-normal">{title}</div>
        <div className="text-[16px] text-[#FFFFFFC7]">{description}</div>
      </div>
    </div>
  );
}

export default InfoCart;
