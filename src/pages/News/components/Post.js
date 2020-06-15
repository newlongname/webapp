import React from "react";

export const Post = (props, index) => {

  //проверяет стейт выделения и изменяет стили
  const verifyCheck = () => {
    if (props.postFocus === props.index) {
      return props.setPostFocus("")
    } else {
      return props.setPostFocus(props.index);
    }
  };

  let classes = ["alert"];

  if (props.postFocus === props.index) {
    classes.push("alert-primary");
  } else {
    classes.push("alert-info");
  }

  return (
    <div
      className={classes.join(" ")}
      role="alert"
      onClick={() => verifyCheck()}
    >
      <h4>{props.post.title}</h4>
      <hr />
      <p>{props.post.body}</p>
    </div>
  );
};
