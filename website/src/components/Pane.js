function Pane({ className, datumObj }) {
  return (
    <div className={className + "   pane"}>
      {" "}
      <h1 className="pane__title paragraph-">
        {datumObj.title || "took highlight"}
      </h1>
      <svg
        className="pane__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7.41 12"
      >
        <path
          id="ic_chevron_right_24px"
          d="M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z"
          transform="translate(-8.59 -6)"
          fill="#8172d5"
        />
      </svg>
    </div>
  );
}

export default Pane;
