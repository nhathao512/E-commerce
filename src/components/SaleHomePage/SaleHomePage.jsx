import useTranslateXImage from '../hooks/useTranslateXImage';
import Button1 from '@components/Button/Button1';
import styles from './styles.module.scss';

function SaleHomePage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div className={boxImage} style={{ transform: `translateX(${translateXPosition}px)`, transition: 'transform 0.6s ease' }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>
            <div>
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <div className={boxBtn}>
                    <Button1 content={'Read more'} />
                </div>
            </div>
            <div className={boxImage} style={{ transform: `translateX(-${translateXPosition}px)`, transition: 'transform 0.6s ease' }}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
    );
}

export default SaleHomePage;