import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import HomePage from "../../pages/Customer/HomePage";
import { Login } from "../../pages/Customer/Login";
import { DefaultLayout } from "../../components/Customer/DefaultLayout";

export const customerRouters = [];

export const publicRouters = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/login",
    name: "customer-login",
    component: Login,
  },
];

export const privateRouters = [
  // {
  //     path: '/profile',
  //     name: 'user-profile',
  //     component: Profile,
  //     layout: LayoutWithoutFilter,
  // },
];

export const adminRouters = [];
export const managerRouters = [];

//Scroll Top when clicked another page
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
