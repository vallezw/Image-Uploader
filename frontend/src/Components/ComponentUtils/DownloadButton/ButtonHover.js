import React from "react";
import PropTypes from "prop-types";
import "./ButtonStyles.css";

export const ButtonHover = props => {
    const {
        className, onClick, label, isDisabled
    } = props;


    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image." + e.target.href.split('.')[1]); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
        }

    return (
        <a href="http://localhost:5000/upload/CZakY4b0V.jpg" download onClick={e => download(e)}        >
        <button onClick={onClick}>
            <span className={className} disabled={isDisabled}>
                <span className="label">{label}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10" className="filter-white">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </span>
        </button>
        </a>
    )
};

ButtonHover.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ButtonHover.defaultProps = {
    className: "cta_download",
    onClick: null,
    label: "Download it",
    isDisabled: false
};

export default ButtonHover;