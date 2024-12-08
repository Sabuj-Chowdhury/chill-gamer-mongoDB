import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import GameWatchList from "../Pages/GameWatchList";
import Login from "../Pages/Login";
import Register from "../Components/Register/Register";
import GameDetails from "../Components/GameDetails/GameDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../Components/MyReviews/MyReviews";

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
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
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
