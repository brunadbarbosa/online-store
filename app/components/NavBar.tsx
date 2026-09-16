import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";


export default function NavBar() {
  return (
	<>	
	<nav className="flex items-center flex-row space-between items-stretch">
		<h1 className="font-heading text-[32px] font-normal">The Online Shop</h1>
		<div>
			<Link to="/">Home</Link>
			<Link to="/">Shop</Link>
			<Link to="/">About</Link>
			<Link to="/">Contact</Link>
			<Link to="/">Blog</Link>
		</div>
		<div>
			<Search/>
			<User/>
			<Link to="/cart"><ShoppingBag/></Link>
		</div>

	</nav>
	</> 
	);
}
	
	
