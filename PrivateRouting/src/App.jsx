import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";
import Contact from "./Components/Contact";
import UserDetails from "./Components/UserDetails";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
	return (
		<div>
			<h1>React Routing</h1>
			<Navbar />
			<Routes>
				{/* keep all the components */}
				<Route path="/" element={<Home />} />
				<Route
					path="/about"
					element={
						<ProtectedRoute>
							<About />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/users"
					element={
						<ProtectedRoute>
							<Users />
						</ProtectedRoute>
					}
				/>

				<Route path="/contact" element={<Contact />} />
				<Route
					path="/users/:userId"
					element={
						<ProtectedRoute>
							<UserDetails />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;

// Routes