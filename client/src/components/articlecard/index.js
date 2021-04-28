import React from "react";

function ArticleCard({ icon, title, link, children }) {
  return (
    <div className="card w-75">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" />
            <a href={link}>{title}</a>
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default ArticleCard;
