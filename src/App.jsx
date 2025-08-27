import "./App.css"
import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"

const Home = lazy( () => import( "@/pages/Home" ) )
const SignIn = lazy( () => import( "@/pages/SignIn" ) )
const Error404 = lazy( () => import( "@/pages/Error404" ) )

export function App() {

	const result1 = add( 2, 3 )
	console.log( result1 )

	const result2 = add( 2, 3 )
	console.log( result2 )

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

const memo = new Map()

function add( a, b ) {

	const key = `${ a }_${ b }`

	let result = null

	if ( memo.has( key ) ) {

		result = memo.get( key )

		console.info( "from cache" )
	}
	else {

		result = a + b

		memo.set( key, result )
	}

	return result
}
