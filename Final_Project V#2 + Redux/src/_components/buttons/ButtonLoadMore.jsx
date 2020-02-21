import React, { Fragment } from "react";

const ButtonLoadMore = props => {
  return (
    <Fragment>
      {props.isLoading ? (
          <div className="loader-wrapper">
             <div className="lds-roller center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> 
          </div>
          
      ) : props.error ? (
        <p className="text-center text-uppercase text-danger">
          Something went wrong
        </p>
      ) : (
        <button
          href="#"
          className="btn btn-info btn-block btn-lg"
          onClick={props.click}
        >
          Load More
        </button>
      )}
    </Fragment>
  );
};

export default ButtonLoadMore;
