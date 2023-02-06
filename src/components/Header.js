import React from "react";

function Header({ money, total }) {
  return (
    <div className="header">
      {(total > 0 && (
        <>
          <h3>
            You have <span>${money - total} </span>left to spend!
          </h3>
        </>
      )) || (
        <>
          <h3>
            You have <span>${money}</span> to spend!
          </h3>
        </>
      )}
      <style>
        {`
				.header{
					position: sticky;
					top: 0;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 20px;
					color: green;
					letter-spacing: 1px;
 					background: rgb(172, 209, 196);
				}

				.header span{
					color: #fff;
				}
				`}
      </style>
    </div>
  );
}

export default Header;
