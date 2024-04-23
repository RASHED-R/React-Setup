import { useAppDispatch, useAppSelector } from "../config/redux/hooks/hooks";
import { decrementByAmount, incrementByAmount } from "../features/counter/counterSlice";

const Counter = () => {

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Total count: {count}</h1>
            <button style={{ marginRight: '10px' }} onClick={() => dispatch(incrementByAmount(5))}>Increment</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>Decrement</button>
        </>
    )
}

export default Counter;