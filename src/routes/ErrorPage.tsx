import { Link, useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error:any = useRouteError()
    console.log(error)

  return (
    <>
    <div className="flex flex-col w-full min-h-96 max-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold text-red-600">{error.status} {error.statusText}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Return to <Link to="/">Home</Link></p>
    </div>
    </>
  )
}

export default ErrorPage