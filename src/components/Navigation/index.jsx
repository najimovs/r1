import { NavLink } from "react-router"
import { Nav, NavUl, NavLi, SignInButton } from "./style.jsx"

export default function Navigation() {

	return (
		<Nav>
			<NavUl $gap="1">
				<NavLi>
					<NavLink to="/" end>Home</NavLink>
				</NavLi>
				<NavLi>
					<NavLink to="/about" end>About</NavLink>
				</NavLi>
				<SignInButton>
					<NavLink to="/sign-in" end>Sign-In</NavLink>
				</SignInButton>
			</NavUl>
		</Nav>
	)
}
