import React from "react";

export default function Loading() {
  return (
    <Delayed>
      <div className="loading center"></div>
    </Delayed>
  );
}

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShow(true);
    }, wait);
    return () => window.clearTimeout(timeout);
  });
  return show === true ? children : null;
}
