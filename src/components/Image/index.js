import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customerFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customerFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
