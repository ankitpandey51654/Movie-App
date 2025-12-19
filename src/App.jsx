import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Movie";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MoviesDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";
// import Contact from "./pages/Contact";
import { ContactData } from "./pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: ContactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
