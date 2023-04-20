import Link from "next/link";
import React from "react";

const fetchRepoContents = async (name) => {
  /* Fake delay - test  */
  await new Promise((res) =>
    setTimeout(() => {
      res();
    }, 1500)
  );

  const res = await fetch(`https://api.github.com/repos/vinherch/${name}/contents`, {
    /* in production build fetched data will be chached (performance)
    the revalidate property in the next object (optional) defines the time sequence for refetching data */
    next: {
      revalidate: 60,
    },
  });
  return res.ok ? await res.json() : null;
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  if (contents) {
    const directories = contents.filter((e) => e.type === "dir");

    return (
      <>
        <h3>Directories</h3>
        <ul>
          {directories.map((d) => (
            <li key={d.path}>
              <Link href={d.html_url} target="_blank">
                {d.path}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default RepoDirs;
