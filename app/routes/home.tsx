import type { Route } from "./+types/home";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import ProductCard from "~/components/ProductCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Online Store" },
    { name: "description", content: "Product's List" },
  ];
}

export async function loader({ request } : Route.LoaderArgs) {
	const url = new URL(request.url);
	const params = url.searchParams;
}

export default function Home() {
  return (
	<>
	<div>
		<div>
			<p>Sort by</p>
			<ChevronDown></ChevronDown>
		</div>
		<div>
			<p>Showing 1-9 of 100</p>
		</div>
	</div>
	<ul>
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
	</ul>
	<div>
		<button>1</button>
		<button>2</button>
		<button>3</button>
		<button>4</button>
		<button>5</button>
		<button><ChevronRight></ChevronRight></button>
	</div>
	<div>
		<div>
			<p>Categories</p>
			<ul>
				<li>Categorie 1</li>
				<li>Categorie 2</li>
				<li>Categorie 3</li>
				<li>Categorie 4</li>
			</ul>
		</div>
	</div>
	</>
  ); 
}
