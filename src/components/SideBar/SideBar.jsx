import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { TfiClose } from 'react-icons/tfi';
import Login from "@components/ContentSideBar/Login/Login";
function SideBar() {
  const { overlay, container, sideBar, slideSideBar, boxIcon } = styles;

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

//   const handleRenderContent = () => {
//     switch (type) {
//       case "login":
//         return <Login />;
//       case "compare":
//         return <Compare />;
//       case "wishlist":
//         return <WishList />;
//       case "cart":
//         return <Cart />;
//       case "detail":
//         return <DetailProduct />;

//       default:
//         return <Login />;
//     }
//   };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        <Login />
        {/* {handleRenderContent()} */}
      </div>
    </div>
  );
}

export default SideBar;
