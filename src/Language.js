import React from "react";
import "./Language.css";

function Language({ src, name }) {
  const defaultSrc = (e) => {
    e.target.src =
      "https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip";
  };

  return (
    <div className="language">
      <p>{name}</p>
      <img src={src} alt="" onError={defaultSrc} />
    </div>
  );
}

export default Language;
