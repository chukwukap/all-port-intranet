const { Link } = require("react-router-dom");

function QuickLinks({ className }) {
  return (
    <div className={"quick-links " + className}>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.021 35.391">
          <path
            id="ic_account_balance_24px"
            d="M5.371,16.168v11.8h5.056v-11.8Zm10.112,0v11.8h5.056v-11.8ZM2,36.391H34.021V31.335H2ZM25.594,16.168v11.8H30.65v-11.8ZM18.01,1,2,9.426V12.8H34.021V9.426Z"
            transform="translate(-2 -1)"
            fill="#758bfd"
          />
        </svg>

        <span className="quick-links__name paragraph-3">Policy</span>
      </Link>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.447 26.965">
          <path
            id="ic_cloud_done_24px"
            d="M32.61,14.179A12.627,12.627,0,0,0,9.016,10.809a10.108,10.108,0,0,0,1.1,20.156H32.021a8.4,8.4,0,0,0,.59-16.786ZM16.853,25.909l-5.9-5.9,2.376-2.376,3.522,3.505,8.73-8.713L27.959,14.8Z"
            transform="translate(0 -4)"
            fill="#758bfd"
          />
        </svg>

        <span className="quick-links__name paragraph-3">Software</span>
      </Link>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.706 33.706">
          <path
            id="ic_face_24px"
            d="M13.8,18.432A2.107,2.107,0,1,0,15.9,20.538,2.107,2.107,0,0,0,13.8,18.432Zm10.112,0a2.107,2.107,0,1,0,2.107,2.107A2.107,2.107,0,0,0,23.909,18.432ZM18.853,2A16.853,16.853,0,1,0,35.706,18.853,16.859,16.859,0,0,0,18.853,2Zm0,30.335A13.5,13.5,0,0,1,5.371,18.853,13.664,13.664,0,0,1,5.455,17.4a16.957,16.957,0,0,0,8.78-9.05,16.809,16.809,0,0,0,13.752,7.129,16.449,16.449,0,0,0,3.792-.438A13.462,13.462,0,0,1,18.853,32.335Z"
            transform="translate(-2 -2)"
            fill="#758bfd"
          />
        </svg>
        <span className="quick-links__name paragraph-3">Directory</span>
      </Link>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.447 33.706">
          <path
            id="ic_important_devices_24px"
            d="M38.762,17.185l-8.426-.017a1.69,1.69,0,0,0-1.685,1.685V34.021a1.69,1.69,0,0,0,1.685,1.685h8.426a1.69,1.69,0,0,0,1.685-1.685V18.853A1.676,1.676,0,0,0,38.762,17.185Zm0,15.151H30.335v-11.8h8.426ZM33.706,2H3.371A3.359,3.359,0,0,0,0,5.371V25.594a3.37,3.37,0,0,0,3.371,3.371h11.8v3.371H11.8v3.371H25.279V32.335H21.909V28.965h3.371V25.594H3.371V5.371H33.706V13.8h3.371V5.371A3.37,3.37,0,0,0,33.706,2ZM20.173,13.8,18.538,8.741,16.9,13.8H11.8l4.163,2.966-1.584,4.9,4.163-3.034L22.7,21.667l-1.584-4.9L25.279,13.8Z"
            transform="translate(0 -2)"
            fill="#758bfd"
          />
        </svg>

        <span className="quick-links__name paragraph-3">Hardware</span>
      </Link>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.447 30.335">
          <path
            id="ic_contact_mail_24px"
            d="M35.391,11.426V9.741l-5.056,3.371L25.279,9.741v1.685L30.335,14.8ZM37.077,3H3.371A3.381,3.381,0,0,0,0,6.371V29.965a3.381,3.381,0,0,0,3.371,3.371H37.077a3.366,3.366,0,0,0,3.354-3.371l.017-23.594A3.38,3.38,0,0,0,37.077,3ZM13.482,8.056a5.056,5.056,0,1,1-5.056,5.056A5.049,5.049,0,0,1,13.482,8.056ZM23.594,28.279H3.371V26.594c0-3.371,6.741-5.224,10.112-5.224s10.112,1.854,10.112,5.224ZM37.077,18.168H23.594V8.056H37.077Z"
            transform="translate(0 -3)"
            fill="#758bfd"
          />
        </svg>
        <span className="quick-links__name paragraph-3">Office</span>
      </Link>
      <Link className="quick-links__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.335 33.706">
          <path
            id="ic_event_available_24px"
            d="M25.8,17.954l-1.786-1.786-8.224,8.224-3.573-3.573-1.786,1.786,5.359,5.359L25.8,17.954ZM29.965,4.371H28.279V1H24.909V4.371H11.426V1H8.056V4.371H6.371A3.355,3.355,0,0,0,3.017,7.741L3,31.335a3.37,3.37,0,0,0,3.371,3.371H29.965a3.38,3.38,0,0,0,3.371-3.371V7.741A3.38,3.38,0,0,0,29.965,4.371Zm0,26.965H6.371V12.8H29.965Z"
            transform="translate(-3 -1)"
            fill="#758bfd"
          />
        </svg>
        <span className="quick- paragraph-3">Event</span>
      </Link>
    </div>
  );
}

export default QuickLinks;
