import { Suspense } from "react";
import Categories from "../news/Categories";
import Loading from "../shared/Loading";

export default function LeftAside() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
    </div>
  );
}
