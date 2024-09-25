import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import MiddlewareLayout from "./layouts/MiddlewareLayout";
import { ErrorPage, Login, Logout, ProtectedRoute, Register, Root } from "./routes";
import Discover from "./routes/Discover";
import Tournament from "./routes/Tournament";
import Sponsor from "./routes/Sponsor";
import Player from "./routes/Player";

const routes = createRoutesFromElements(
  <Route element={<MiddlewareLayout />} errorElement={<ErrorPage/>}>

    <Route element={<Logout />} errorElement={<ErrorPage />}>
      <Route path="login" element={<Login />}  errorElement={<ErrorPage/>}/>
      <Route path="register" element={<Register />}  errorElement={<ErrorPage/>}/>
    </Route>
    
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
      <Route index element={<Root />}  errorElement={<ErrorPage/>}/>

      <Route element={<ProtectedRoute />} errorElement={<ErrorPage/>}>
        <Route path="discover" element={<Discover />} errorElement={<ErrorPage/>}/>
        <Route path="sponsor" element={<Sponsor />} errorElement={<ErrorPage/>}/>
        <Route path="player" element={<Player />} errorElement={<ErrorPage/>}/>
      </Route>

      <Route path="tournament">
        <Route path=":id" element={<Tournament />} errorElement={<ErrorPage/>}/>
      </Route>

    <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage/>} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
