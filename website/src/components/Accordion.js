import { useState } from "react";

function Accordion({ datumObj, className }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleIsCollapsed(ev) {
    setIsCollapsed((prev) => !prev);
  }
  return (
    <article className="accordion" onClick={toggleIsCollapsed}>
      <div className={className + " accordion__header"}>
        <p>{datumObj?.title || "Title goes here"}</p>
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.314"
            height="7.657"
            viewBox="0 0 13.314 7.657"
          >
            <path
              id="Union_11"
              data-name="Union 11"
              d="M.293,13.021a1,1,0,0,1,0-1.414l4.95-4.95L.293,1.707A1,1,0,0,1,1.707.293L7.364,5.95a1,1,0,0,1,0,1.415L1.707,13.021a1,1,0,0,1-1.415,0Z"
              transform="translate(13.314 0) rotate(90)"
              fill="#2a99fb"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.314"
            height="7.656"
            viewBox="0 0 13.314 7.656"
          >
            <path
              id="Union_11"
              data-name="Union 11"
              d="M.293,13.021a1,1,0,0,1,0-1.415l4.95-4.95L.293,1.707A1,1,0,0,1,1.707.293L7.364,5.95a1,1,0,0,1,0,1.414L1.707,13.021a1,1,0,0,1-1.414,0Z"
              transform="translate(0 7.657) rotate(-90)"
              fill="#2a99fb"
            />
          </svg>
        )}
      </div>
      <div
        className={
          isCollapsed ? "accordion__body collapsed" : "accordion__body"
        }
      >
        {datumObj?.body || (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod odio non leo pretium pellentesque. Curabitur blandit urna
            cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac
            vulputate sollicitudin, mi urna elementum augue, id tristique arcu
            erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer euismod odio non leo pretium pellentesque. Curabitur
            blandit urna cursus, malesuada erat ut, egestas odio. Quisque
            suscipit, urna ac vulputate sollicitudin, mi urna elementum augue,
            id tristique arcu erat non enim.
          </p>
        )}
      </div>
    </article>
  );
}

export default Accordion;
