import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>

        {import.meta.env.DEV && (
          <pre className="mt-4 text-xs text-red-500">
            {error.message}
          </pre>
        )}

        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Retry
          </button>

          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
}

export const router = createRouter({
  routeTree,
  context: {},
  scrollRestoration: true,
  defaultErrorComponent: DefaultErrorComponent,
});
