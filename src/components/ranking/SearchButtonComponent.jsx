const SearchButtonComponent = ({ onClick, label }) => (
  <div className="button-container">
  <button className="btn"onClick={onClick} >
    {label}
  </button>
  </div>
);

export default SearchButtonComponent;