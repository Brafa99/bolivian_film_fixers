import {

    useEffect,

    useState,

    useRef

} from "react";

function useCounter(

    end,

    duration = 2200,

    start = false

){

    const [count,setCount] = useState(0);

    const started = useRef(false);

    useEffect(()=>{

        if(!start) return;

        if(started.current) return;

        started.current = true;

        let startTime;

        function animate(timestamp){

            if(!startTime){

                startTime = timestamp;

            }

            const progress = Math.min(

                (timestamp-startTime)/duration,

                1

            );

            setCount(

                Math.floor(progress*end)

            );

            if(progress<1){

                requestAnimationFrame(animate);

            }

        }

        requestAnimationFrame(animate);

    },[start,end,duration]);

    return count;

}

export default useCounter;