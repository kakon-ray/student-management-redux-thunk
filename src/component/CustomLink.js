import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          'z-index': '2',
          'color': 'var(--bs-list-group-active-color)',
          'background-color': 'var(--bs-list-group-active-bg)',
          'border-color': 'var(--bs-list-group-active-border-color)'
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;