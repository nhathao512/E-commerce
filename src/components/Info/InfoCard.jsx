import styles from './styles.module.scss'

function InfoCard({ content, des, src }) {
    const { containerCard, containerContent, title, description } = styles;
    return (<div className={containerCard}>
        <img width={40} height={41} src={src} alt="" />

        <div className={containerContent}>
            <div className={title}>[{content}]</div>
            <div className={description}>{des}</div>
        </div>
    </div>
    );

}

export default InfoCard;