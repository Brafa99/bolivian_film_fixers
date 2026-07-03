import "./NumberSection.css";

import {

    useEffect,

    useRef,

    useState

} from "react";

import useLanguage from "../../hooks/useLanguage";

import Counter from "./Counter";

function NumbersSection(){

    const { t } = useLanguage();

    const sectionRef = useRef(null);

    const [startAnimation,setStartAnimation] = useState(false);

    useEffect(()=>{

        const observer = new IntersectionObserver(

            ([entry])=>{

                if(entry.isIntersecting){

                    setStartAnimation(true);

                    observer.disconnect();

                }

            },

            {

                threshold:0.35

            }

        );

        if(sectionRef.current){

            observer.observe(sectionRef.current);

        }

        return ()=>observer.disconnect();

    },[]);

    const numbers=[

        {

            value:1010,

            label:t.numbers.projects

        },

        {

            value:120,

            label:t.numbers.clients

        },

        {

            value:20,

            label:t.numbers.years

        }

    ];

    return(

        <section

            id="numbers"

            className="numbers"

            ref={sectionRef}

        >

            <div className="numbers-overlay"></div>

            <div className="container">

                <div className="section-title light">

                    <h2>

                        {t.numbers.title}

                    </h2>

                    <span>

                        {t.numbers.subtitle}

                    </span>

                  

                    <p>

        {/* {t.numbers.description} */}

    </p>

                </div>

                <div className="numbers-grid">

                    {

                        numbers.map(item=>(

                            <Counter

                                key={item.label}

                                value={item.value}

                                label={item.label}

                                start={startAnimation}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default NumbersSection;