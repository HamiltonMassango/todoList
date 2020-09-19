import React, { useState } from "react";

export default function Projectos({ list }) {
  return (
    <>
      <div className="box">
        {list.map((project) => (
          <div className="item" key={project.name}>
            <input
              type="checkbox"
              name={project.name}
              id={project.name}
              checked={project.state}
              onChange={(project.state = project.state ? true : false)}
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
