import { anu } from "./anu";
type PageProps = { name: 'Saurabh' | 'Anurag'; activeURL: '/' | '/anu' }

const styles = `
body {
	font-family: Helvetica;
}
a {
	text-decoration: none;
	color: #000;
	margin: 4px;
}

a.active {
	color: #09f;
}
`

const NavLink = anu<{ activeURL: PageProps['activeURL']; text: PageProps['name']; href: PageProps['activeURL'] }>`
<a
	href="${p => p.href}"
	class="${p => p.activeURL === p.href ? 'active' : ''}"
>
	${p => p.text}'s Page
</a>
`

const Navbar = anu<{activeURL: PageProps['activeURL']}>`
<nav>
	${p => NavLink({ activeURL: p.activeURL, text: 'Saurabh', href: '/' })}
	${p => NavLink({ activeURL: p.activeURL, text: 'Anurag', href: '/anu' })}
</nav>
`

export default anu<PageProps>`
<html>
<head>
	<style>
		${_p => styles}
	</style>
</head>
<body>
	${(p) => Navbar({ activeURL: p.activeURL })}
	<h1>Hi, ${(p) => p.name}</h1>
</body>
</html>
`