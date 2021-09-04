import React from "react";
import { Link } from "react-router-dom";
export default function Back() {
  return (
    <div className="ml-auto back mr-2">
      <Link to="/">Back To Home</Link>
    </div>
  );
}
