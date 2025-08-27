import "./App.css"
import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"

// import HomeD from "@/pages/Home"
// import SignInD from "@/pages/SignIn"
// import Error404D from "@/pages/Error404"

const Home = lazy( () => import( "@/pages/Home" ) )
const SignIn = lazy( () => import( "@/pages/SignIn" ) )
const Error404 = lazy( () => import( "@/pages/Error404" ) )

export function App() {

	return <AppLazy />
}

function AppLazy() {

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

// function AppDefault() {

// 	return (
// 		<Routes>
// 			<Route path="/" element={ <HomeD /> } />
// 			<Route path="/sign-in" element={ <SignInD /> } />
// 			<Route path="/*" element={ <Error404D /> } />
// 		</Routes>
// 	)
// }
