import useCounter from "../../hooks/useCounter";

function Counter({

    value,

    label,

    start

}){

    const number = useCounter(

        value,

        2200,

        start

    );

    return(

        <div className="number-card">

            <h3>

                {number}+

            </h3>

            <p>

                {label}

            </p>

        </div>

    );

}

export default Counter;