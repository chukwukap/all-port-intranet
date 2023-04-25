import { useState } from "react";
import { NavLink } from "react-router-dom";

function LinkGroupDropdown({ children, title, to }) {
  console.log(title);
  const [dropdownActive, setDropdownActive] = useState(false);
  function handleMouseOver(ev) {
    setDropdownActive(() => true);
  }
  function handleMouseOut(ev) {
    setDropdownActive(() => false);
  }
  // close the link group dropdown when the user navigates on mobile
  function handleClick(ev) {
    setDropdownActive(false);
  }
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className="link-group-dropdown"
    >
      {/* NavLink automatically adds a class of active so i used isActive instead */}
      <NavLink
        className={
          dropdownActive
            ? "link-group-dropdown__btn isActive"
            : "link-group-dropdown__btn"
        }
        to={to || ""}
      >
        {title}
        <LiveCaretIcon
          className="link-group-dropdown__live-caret-icon"
          dependency={dropdownActive}
        />
      </NavLink>
      <section
        className={
          dropdownActive
            ? "link-group-dropdown__body active"
            : "link-group-dropdown__body"
        }
      >
        <div className="link-group-dropdown__content">{children}</div>
      </section>
    </div>
  );
}

export function LinkGroup({ children, title, className }) {
  return (
    <div className={className + "  link-group"}>
      <span className="link-group__title">{title}</span>
      <div className="link-group__body">{children}</div>
    </div>
  );
}

function LiveCaretIcon({ dependency }) {
  return (
    <>
      {dependency === true ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4 6.1">
          <path
            id="Path_2877"
            data-name="Path 2877"
            d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
            transform="translate(11.4 8.1) rotate(180)"
            fill="#133b3a"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4 6.1">
          <path
            id="Path_2887"
            data-name="Path 2887"
            d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
            transform="translate(-2 -2)"
            fill="#8172d5"
          />
        </svg>
      )}
    </>
  );
}
export default LinkGroupDropdown;
