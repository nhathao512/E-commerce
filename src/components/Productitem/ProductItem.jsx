import styles from './styles.module.scss';
import reloadIcon from '@icon/svgs/reloadIcon.svg';
import heartIcon from '@icon/svgs/heartIcon.svg';
import cartIcon from '@icon/svgs/cartIcon.svg';


function ProductItem({ src, preSrc, name, price }) {
    const { boxImg, showImageWhenHover, showFunctionWhenHover, boxIcon, title, priceClass } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt="" />
                <img src={preSrc} alt=""
                    className={showImageWhenHover} />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceClass}>${price}</div>
        </div>
    );
}

export default ProductItem;