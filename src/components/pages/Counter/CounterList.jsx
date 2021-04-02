import CounterItem from './CounterItem';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    counterList: {
        listStyle: 'none',
    },
});

const CounterList = ({ counters, onIncrement, onDecrement, onDelete }) => {
    const classes = useStyles();
    return (
        <ul className={classes.counterList}>
            {counters.map(counter => (
                <CounterItem
                    key={counter.id}
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default CounterList;
