import ProductItem from './ProductItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    list: {
        margin: 0,
        listStyle: 'none',
        '&not:(last-child)': {
            marginBottom: 100,
        },
    },
});

const ProductsList = ({ products }) => {
    const classes = useStyles();
    return (
        <ul className={classes.list}>
            {products.map(
                product =>
                    !!product.count && (
                        <ProductItem
                            key={product.id}
                            /*Пример другого ключа: `${product.name}_${product.price}` */
                            product={product}
                        />
                    ),
            )}
        </ul>
    );
};

export default ProductsList;
