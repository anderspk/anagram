import React from "react";
import "./errorMessage.scss";

const ErrorMessage = ({ children }) =>
  children ? <div className="error-message">{children}</div> : null;

export default ErrorMessage;
