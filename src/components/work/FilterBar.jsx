import "./FilterBar.css";

function FilterBar({ categories, active, onChange }) {

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

                    {category}

                </button>

            ))}

        </div>

    );

}

export default FilterBar;