import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    buttons: {
        display: 'flex',
        paddingBottom: 20,
        paddingLeft: 15,
    },
    value: {
        fontSize: 20,
    },
});

const limit = 500;

const SingleCounter = ({ initialValue = 0 }) => {
    const classes = useStyles();
    const [value, setValue] = useState(initialValue);
    const [step, setStep] = useState(1);

    const handleIncrement = () =>
        setValue(prevState =>
            prevState + step > limit ? limit : prevState + step,
        );

    const handleDecrement = () =>
        setValue(prevState => (prevState - step < 0 ? 0 : prevState - step));

    const hanleChangeStep = event => {
        setStep(Number(event.target.value));
    };

    useEffect(() => {
        console.log('value:', value);
    }, [value]);

    return (
        <>
            <h3 className={classes.title}>Single Counter</h3>
            <label>
                <span>step</span>
                <select value={step} onChange={hanleChangeStep}>
                    <option value="1">1</option>
                    <option value="5">5</option>

                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </label>

            <div className={classes.buttons}>
                {' '}
                <br />
                <button onClick={handleIncrement}>+</button>
                <p className={classes.value}>{value}</p>
                <button onClick={handleDecrement}>-</button>
            </div>
        </>
    );
};

export default SingleCounter;
