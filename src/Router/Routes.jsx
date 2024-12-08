import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import GameWatchList from "../Pages/GameWatchList";
import Login from "../Pages/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-review",
        element: <AddReview></AddReview>,
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/game-watchlist",
        element: <GameWatchList></GameWatchList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className=" text-center text-4xl bg-red-700 text-white">
        {" "}
        Error:404, Page not found
      </h1>
    ),
  },
]);

export default router;
