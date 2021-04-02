// materais-ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
//
import art from './assets/art.jpg';
import cactus from './assets/cactus.jpg';
import analitics from './assets/analitics.jpg';
import lemon from './assets/lemon.jpg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    item: {
        display: 'flex',
        alignItems: 'start',

        // marginLeft: 10,

        '&:not(:last-child)': {
            marginBottom: 30,
        },
    },

    image: {
        height: 100,
    },

    card: {
        padding: 10,
    },
});

const images = {
    art,
    cactus,
    analitics,
    lemon,
};

const ProductsItem = ({ product }) => {
    const classes = useStyles();
    return (
        <li className={classes.item}>
            <CardActionArea className={classes.card__action}>
                <Card className={classes.card}>
                    <p>Товар: {product.name}</p>
                    <p>Цена товара: {product.price}</p>
                    <p>На складе осталось {product.count} шт.</p>
                    <img
                        className={classes.image}
                        src={images[product.img]}
                        alt={product.name}
                    />
                </Card>
            </CardActionArea>
            <IconButton>
                <AddShoppingCartIcon />
            </IconButton>
        </li>
    );
};
export default ProductsItem;
