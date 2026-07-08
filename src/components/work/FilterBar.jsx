import "./FilterBar.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function FilterBar({ categories, active, onChange }) {

    const { t } = useContext(LanguageContext);

    return (

        <div className="filter-bar">

            {categories.map(category => (

                <button
                    key={category}
                    className={`filter-button ${
                        active === category ? "active" : ""
                    }`}
                    onClick={() => onChange(category)}
                >

                    {t.categories?.[category] || category}

                </button>

            ))}

        </div>

    );

}

export default FilterBar;