const SearchComponent = ({
  value,
  handleChange,
  options = [],
  placeholder,
  type = "select",
}) => {
  if (type === "input") {
    return (
      <div className="">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="input-container">
        <div>
          <select
            className="filter"
            value={value}
            onChange={handleChange}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.id} value={option.name || option.year}>
                {option.name || option.year}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
};

export default SearchComponent;
