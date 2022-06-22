import React, { useEffect } from "react";

const areSameObj = (prev, next) => {
  return JSON.stringify(prev.data) === JSON.stringify(next.data);
};

const Child = ({ data }) => {
  console.log("re-rendered");

  return <div>{data && <h2>Pokemon in Child: {data && data.name}</h2>}</div>;
};

export default React.memo(Child, areSameObj);
