import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const getRepos = async () => {
  const res = await fetch("https://api.github.com/users/vinherch/repos", {
    /* in production build fetched data will be chached (performance)
    the revalidate property in the next object (optional) defines the time sequence for refetching data */
    next: {
      revalidate: 60,
    },
  });
  const repos = res.ok ? await res.json() : null;
  return repos;
};

const ReposPage = async () => {
  const repos = await getRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((r) => (
          <li key={r.id}>
            <Link href={`/code/repos/${r.name}`}>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {r.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {r.forks_count}
                </span>
                <span>
                  <FaEye /> {r.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
