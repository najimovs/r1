import "./App.css"
import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"

const Home = lazy( () => import( "@/pages/Home" ) )
const SignIn = lazy( () => import( "@/pages/SignIn" ) )
const Error404 = lazy( () => import( "@/pages/Error404" ) )

export function App() {

	return (
		<Suspense fallback={ <>loading...</> }>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/sign-in" element={ <SignIn /> } />
				<Route path="/*" element={ <Error404 /> } />
			</Routes>
		</Suspense>
	)
}
