import React from "react";

function Articles(props) {
  return (
    <article>
      <a
        href={"http://reddit.com" + props.article.permalink}
        target="_blank"
        rel="noreferrer"
      >
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Articles;
