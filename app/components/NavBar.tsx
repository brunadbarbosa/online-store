import { Link } from "react-router";
import { ShoppingBag, Search, User } from "lucide-react";
import { useCart } from "~/context/CartContext";

export default function NavBar() {
	const { count } = useCart();
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
			<Link to="" className="relative">
				<ShoppingBag />
				{count > 0 && (
					<span className="absolute -top-2 -right-2 bg-[#1F3044] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
						{count}
					</span>
				)}
			</Link>
		</div>
	</nav>
	);
}
	
	
