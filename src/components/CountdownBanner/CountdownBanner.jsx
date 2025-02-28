import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-01-07T00:00:00Z';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'}></Button>
            </div>
        </div>
    );
}

export default CountdownBanner;