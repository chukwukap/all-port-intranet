function UpperBar() {
  return (
    <div className="upper-bar">
      <div>Language Dropdown</div>
      <div className="user">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7">
          <path
            d="M0,7V6.125c0-.963,1.575-1.75,3.5-1.75S7,5.162,7,6.125V7ZM1.75,1.75A1.75,1.75,0,1,1,3.5,3.5,1.75,1.75,0,0,1,1.75,1.75Z"
            fill="#758bfd"
          />
        </svg>
        <span>Account</span>
      </div>
    </div>
  );
}
export default UpperBar;
