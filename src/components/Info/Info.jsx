import MainLayout from "../Layout/Layout";
import { dataInfo } from "./constants";
import InfoCart from "./InfoCart/InfoCart";

function Info() {
  return (
    <MainLayout className="font-robotoMono">
      <div className="flex justify-between items-center relative z-50 gap-[0px] h-[144px] bg-[#333] mt-[-75px] py-[20px] px-[55px] ">
        {dataInfo.map((item) => {
          return (
            <InfoCart
              title={item.title}
              description={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
