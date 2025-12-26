import { useRouteError, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GoHomeFill } from "react-icons/go";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen px-6 py-12 sm:py-20 max-w-2xl mx-auto text-gray-900 dark:text-gray-100 font-sans flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Oops!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center">Sorry, an unexpected error has occurred.</p>
            <p className="text-gray-500 dark:text-gray-500 font-mono mb-8">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
                <Button
                    size="lg"
                    className="text-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90"
                >
                    <GoHomeFill className="mr-2" />
                    Go Home
                </Button>
            </Link>
        </div>
    );
}
