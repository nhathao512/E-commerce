import InputComMon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";


function Login() {
    const { container, title, boxRememberMe, LostPw, LoginAccess } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputComMon label="Username or email" type="text" isRequired/>
      <InputComMon label="Password" type="password" isRequired/>
      <div className={boxRememberMe}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <button className={LoginAccess}>LOGIN</button>

      <div className={LostPw}>Lost your password</div>
    </div>
  );
}

export default Login;
