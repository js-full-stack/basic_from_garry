import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    counterItem: {
        paddingBottom: 10,
    },
    btnDelete: {
        marginLeft: 10,
    },
    btnIncrement: {
        marginLeft: 5,
    },
    btnDecrement: {
        marginRight: 5,
    },
});
const CounterItem = ({ onIncrement, onDecrement, counter, onDelete }) => {
    const classes = useStyles();

    const handleDecrement = () => onDecrement(counter.id);
    const handleIncrement = () => onIncrement(counter.id);
    const handleDeleteCounter = () => onDelete(counter.id);

    return (
        <li className={classes.counterItem}>
            <button className={classes.btnDecrement} onClick={handleDecrement}>
                -
            </button>
            <span>{counter.value}</span>
            <button className={classes.btnIncrement} onClick={handleIncrement}>
                +
            </button>
            <button className={classes.btnDelete} onClick={handleDeleteCounter}>
                Delete
            </button>
        </li>
    );
};

export default CounterItem;
