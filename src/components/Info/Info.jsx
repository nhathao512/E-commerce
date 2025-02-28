import InfoCard from "@components/Info/InfoCard";
import { dataInfo } from './constants';
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss'

function Info() {
    const { container } = styles;

    return (

        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return <InfoCard content={item.title} des={item.descripstion} src={item.src} />;
                })}
            </div>
        </MainLayout>

    );
}

export default Info;