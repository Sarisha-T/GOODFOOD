import React from "react";

function Load() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status" style={{height:"80px",width:"80px"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Load;
