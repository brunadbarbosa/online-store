import { Link } from "react-router";
import { ShoppingBag, Search, User } from "lucide-react";

export default function NavBar() {
  return (
	<nav className="flex flex-col items-center justify-between px-7 py-1 m-2 shadow-md gap-4 lg:flex-row lg:gap-8">
		<h1 className="flex font-heading text-[32px] font-normal tracking-wide whitespace-nowrap">The Online Shop</h1>
		<div className="flex items-center flex-row gap-13 p-3">
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
	);
}
	
	
