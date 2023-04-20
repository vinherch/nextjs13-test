import React from "react";
import Link from "next/link";
import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa";

const getRepository = async (name) => {
  const res = await fetch(`https://api.github.com/repos/vinherch/${name}`, {
    /* in production build fetched data will be chached (performance)
    the revalidate property in the next object (optional) defines the time sequence for refetching data */
    next: {
      revalidate: 60,
    },
  });
  return res.ok ? await res.json() : null;
};

const Repository = async ({ name }) => {
  const repository = await getRepository(name);

  if (repository) {
    return (
      <>
        <h2>{repository.name}</h2>
        <p>{repository.description}</p>
        <div className="card-stats">
          <div className="card-stat">
            <FaStar />
            <span>{repository.stargazers_count}</span>
          </div>
          <div className="card-stat">
            <FaCodeBranch />
            <span>{repository.forks_count}</span>
          </div>
          <div className="card-stat">
            <FaEye />
            <span>{repository.watchers_count}</span>
          </div>
        </div>
      </>
    );
  }

  return;
};

export default Repository;
