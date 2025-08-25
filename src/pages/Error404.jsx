import { NavLink } from "react-router"
import { Page } from "./Page"

export function Error404() {

	return <Page $jcc>
		<h1>Not Found.</h1>
		<NavLink to="/">Go to home</NavLink>
	</Page>
}
