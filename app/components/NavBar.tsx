import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";

export default function NavBar() {
  return (
	<>	
	<nav className="px-7 py-1 m-2 flex items-center flex-row justify-between items-stretch border-b-1 border-black">
		<h1 className="font-heading text-[32px] font-normal tracking-wide">The Online Shop</h1>
		<div className="flex items-center flex-row gap-13">
			<Link className="gap-5 justify-items-start" to="/">Home</Link>
			<Link className="gap-5 justify-items-start" to="/">Shop</Link>
			<Link className="gap-5 justify-items-start" to="/">About</Link>
			<Link className="gap-5 justify-items-start" to="/">Contact</Link>
			<Link className="gap-5 justify-items-start" to="/">Blog</Link>
		</div>
		<div className="flex items-center flex-row space-between gap-6">
			<Search/>
			<User/>
			<button><ShoppingBag /></button>
			{/* <Link to="/cart"><ShoppingBag/></Link> */}
		</div>

	</nav>
	</> 
	);
}
	
	
