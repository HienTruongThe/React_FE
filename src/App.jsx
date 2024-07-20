import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/login";

const Layout = () => {
	return <>Main Page</>;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>404 Not Found</div>,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
