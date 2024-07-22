import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Home";
import BoookPage from "./pages/book";
import Contact from "./pages/contact";
import LoginPage from "./pages/login";
import Register from "./pages/register";

const Layout = () => {
	return (
		<div className="layout-app">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "book",
				element: <BoookPage />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
