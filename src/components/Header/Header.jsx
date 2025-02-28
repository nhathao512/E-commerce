import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import reloadIcon from "@icon/svgs/reloadIcon.svg";
import heartIcon from "@icon/svgs/heartIcon.svg";
import cartIcon from "@icon/svgs/cartIcon.svg";
import useScrollHandling from "@components/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    menu,
    fixedHeader,
    topHeader,
  } = styles;

  const { scrollPosition } = useScrollHandling();

  const [fixedPosition, setFixedPosition] = useState(false);

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  console.log(isOpen);

  useEffect(() => {
    // if(scrollPosition > 80){
    //     setFixedPosition(true);
    // }else{
    //     setFixedPosition(false);
    // }
    setFixedPosition(scrollPosition > 80 ? true : false);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return (
                <BoxIcon
                  key={index}
                  type={item.type}
                  href={item.href}
                  className={menu}
                />
              );
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return (
                <Menu
                  key={index}
                  content={item.content}
                  href={item.href}
                  className={menu}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img
            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
            alt="logo"
            style={{ width: "153px", height: "53px", cursor: "pointer" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return (
                <Menu
                  key={index + 3}
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt="" />
            <img width={26} height={26} src={heartIcon} alt="" />
            <img width={26} height={26} src={cartIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
