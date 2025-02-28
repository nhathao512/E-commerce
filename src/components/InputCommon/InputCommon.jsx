import styles from "./styles.module.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

function InputComMon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, container, boxIcon } = styles;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const isShowText = type === "password" && isShowPassword ? "text" : type;

  const isPassword = type === "password";
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowText} />
        {isPassword && (
          <div className={boxIcon}>
            {isShowPassword ? (
              <FiEyeOff onClick={() => setIsShowPassword(false)} />
            ) : (
              <FiEye onClick={() => setIsShowPassword(true)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputComMon;
