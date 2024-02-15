import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { HOME_URL, TABLE_URL } from "../constants/UrlConstants";

import StarWarsTable from "../components/StarWarsTable";
import Login from "../components/Login";
import NotFound from "../components/NotFound";


export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME_URL} element={<Login />} errorElement={<NotFound />} />
      <Route path={TABLE_URL} element={<StarWarsTable />} />
    </>
  )
);