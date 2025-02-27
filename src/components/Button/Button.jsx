function Button({ content }) {
  return (
    <button className="w-[176px] h-[42px] rounded-[3px] bg-[#333] text-[#fff] font-normal cursor-pointer text-[14px] hover:bg-[#fff] hover:text-[#333] hover:bg-transparent hover:transition-bg duration-300 rounded-[3px] border border-[#333333]">
      {content}
    </button>
  );
}

export default Button;
