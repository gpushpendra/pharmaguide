import React from "react";

const Card = (props) => {
  return (
    <div className="card-box">
      <div className="card-icon">
      <a href="/">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-capsule-pill"
            viewBox="0 0 16 16"
          >
            <path d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536 4.607 4.707ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-.5 1.042a3 3 0 0 0 0 5.917V9.042Zm1 5.917a3 3 0 0 0 0-5.917v5.917Z" />
          </svg>
          </a>
        	  <div className="text">
            <h4>{props.feature}</h4>

              	  </div>
  </div>
    </div>
  );
};

export default Card;
