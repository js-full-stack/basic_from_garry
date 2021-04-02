import { useState, useEffect } from 'react';
import SingleCounter from './SingleCounter';
import CounterList from './CounterList';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    btnAddCounter: {
        marginLeft: 38,
    },
});

const Counter = () => {
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('counters'));

        setCounters(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('counters', JSON.stringify(counters));
    }, [counters]);

    const addCounter = () =>
        setCounters(prevState => [
            ...prevState,
            {
                id: Date.now(),
                value: 0,
            },
        ]);

    const deleteCounter = id =>
        setCounters(prevState =>
            prevState.filter(counter => counter.id !== id),
        );

    const handleIncrement = id =>
        setCounters(prevState =>
            prevState.map(counter =>
                counter.id === id
                    ? {
                          ...counter,
                          value: counter.value + 1,
                      }
                    : counter,
            ),
        );

    const handleDecrement = id =>
        setCounters(prevState =>
            prevState.map(counter =>
                counter.id === id
                    ? {
                          ...counter,
                          value: counter.value - 1,
                      }
                    : counter,
            ),
        );

    const classes = useStyles();

    return (
        <div className="todos">
            {' '}
            <h2>Counter</h2>
            <button className={classes.btnAddCounter} onClick={addCounter}>
                + Add Counter
            </button>
            <CounterList
                counters={counters}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={deleteCounter}
            />
            <hr />
            <SingleCounter initialValue={5} />
        </div>
    );
};

export default Counter;
