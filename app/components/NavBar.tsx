import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";


export default function NavBar() {
  return (
	<>	<nav>
		<h1>The Online Shop</h1>
		<div>
			<Link to="/">Home</Link>
			<Link to="/">Shop</Link>
			<Link to="/">About</Link>
			<Link to="/">Contact</Link>
			<Link to="/">Blog</Link>
		</div>
		<div>
			<Search></Search>
			<User></User>
			<ShoppingBag></ShoppingBag>
		</div>

	</nav>
	</> );
}
	
	
