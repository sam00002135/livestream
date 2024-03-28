import { Suspense } from "react";

import { Results, ResultsSkeleton } from "./_components/results";

export default function Page() {
  return (
    <div className="bg-background h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </div>
  );
};
