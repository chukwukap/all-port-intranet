function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-bar__input" type="text" placeholder="Search" />
      <div className="search-bar__icon">
        <svg
          id="Search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.76 11.76"
        >
          <path
            id="Path_2"
            data-name="Path 2"
            d="M1.47,5.145A3.639,3.639,0,0,1,5.145,1.47,3.639,3.639,0,0,1,8.82,5.145,3.639,3.639,0,0,1,5.145,8.82,3.639,3.639,0,0,1,1.47,5.145Zm9.041,6.395a.728.728,0,0,0,1.029-1.029L9.261,8.232A5.032,5.032,0,0,0,10.29,5.145,5.113,5.113,0,0,0,5.145,0,5.113,5.113,0,0,0,0,5.145,5.113,5.113,0,0,0,5.145,10.29,5.032,5.032,0,0,0,8.232,9.261Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
