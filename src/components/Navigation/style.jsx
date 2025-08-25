import { styled } from "styled-components"

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
`

export const NavUl = styled.ul`
	display: flex;
	gap: ${ props => `${ props.$gap }rem` };
	list-style-type: none;
	padding: ${ props => `${ props.$gap }rem` }
`

export const NavLi = styled.li`
	a {
		color: white;
		display: flex;
		padding: 0.5rem;
		border: 1pt solid transparent;
	}
	a:hover {
		color: yellow;
	}
`

export const SignInButton = styled( NavLi )`
	a {
		border-color: white;
	}
`
