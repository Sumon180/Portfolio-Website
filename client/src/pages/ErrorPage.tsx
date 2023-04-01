import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-emerald-300">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="text-2xl font-medium">Sorry, an unexpected error has occurred.</p>
          <p>
            <i className=" font-semibold">{error.statusText || error.message}</i>
          </p>
          <Link to="/">
            <button>Go Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
}
