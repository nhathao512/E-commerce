import styles from "./styles.module.scss";
import { dataMenu } from "./constant.js";

function MyFooter() {
  const { container, boxNav } = styles;
  return (
    <div className={container}>
      <div>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
          alt="logo"
          style={{ width: "160px", height: "55px", padding: "50px" }}
        />
      </div>

      <div className={boxNav}>
        {dataMenu.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>

      <div>
        <p style={{ textAlign: "center" }}>Guaranteed safe ckeckout</p>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
          alt=""
        />
      </div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        Copyright © {new Date().getFullYear()} NhatHao theme. Created by NhatHao
      </div>
    </div>
  );
}

export default MyFooter;
