import React from "react";
import { Suspense } from "react";
import Link from "next/link";

import Repository from "@/app/components/Repository";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params }) => {
  return (
    <div className="card no-hover ">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      {/* Suspense boundary (experimental) prevents waiting until all components has been loaded. 
      As soon as a component is loaded, it is rendered. Fallback will be rendered until data is ready */}
      <Suspense fallback={<div>Loading repositories</div>}>
        <Repository name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
