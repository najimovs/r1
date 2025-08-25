import "./App.css"
import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { SignIn } from "./pages/SignIn"
import { Error404 } from "./pages/Error404"

export function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/sign-in" element={ <SignIn /> } />
				<Route path="/*" element={ <Error404 /> } />
			</Routes>
		</>
	)
}
