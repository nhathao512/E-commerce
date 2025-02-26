import fbIcon from "@icons/svgs/fbicon.svg";
import insIcon from "@icons/svgs/insicon.svg";
import ytbIcon from "@icons/svgs/ytbicon.svg";

function BoxIcon({ type, href }) {
  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon;
      case "ytb":
        return ytbIcon;
    }
  };
  return (
    <div className="flex justify-center items-center rounded-full bg-[#333] w-[26px] h-[26px] ">
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
