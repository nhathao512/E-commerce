import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/Logo-retina.png";
import reloadIcon from "@icons/svgs/reloadicon.svg";
import heartIcon from "@icons/svgs/hearticon.svg";
import cartIcon from "@icons/svgs/carticon.svg";

function MyHeader() {
  return (
    <div className="flex justify-center items-center gap-[0px] bg-[#f5f5f5]">
      <div className="flex w-[1250px] items-center justify-between h-[83px]">
        <div className="flex justify-center items-center gap-[20px] cursor-pointer">
          <div className="flex justify-center items-center gap-[10px]">
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className="flex justify-center items-center gap-[40px]">
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            className="w-[153px] h-[53px] cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="flex justify-center items-center gap-[20px] cursor-pointer">
          <div className="flex justify-center items-center gap-[40px] ">
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <img
              className="w-[26px] h-[26px]"
              src={reloadIcon}
              alt="reloadIcon"
            />
            <img
              className="w-[26px] h-[26px]"
              src={heartIcon}
              alt="heartIcon"
            />
            <img className="w-[26px] h-[26px]" src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
