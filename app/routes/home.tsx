import type { Route } from "./+types/home";
import { Link } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductCard from "~/components/ProductCard";
import { getProducts } from "~/server/apiServer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Online Store" },
    { name: "description", content: "Product's List" },
  ];
}

export async function loader({ request } : Route.LoaderArgs) {
	const url = new URL(request.url);
	const page = Number(url.searchParams.get("page") ?? "1");
	const limit = 9;
	const skip = (page - 1) * limit;
	const info = await getProducts(limit, skip);
	return { products: info.products, total: info.total, page, limit };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { products, total, page, limit } = loaderData;
	const totalPages = Math.ceil(total / limit);
	const start = (page - 1) * limit + 1;
	const end = Math.min(page * limit, total);

	return (
	<>
	<div>
		<div>
			<p>Sort by</p>
			<ChevronDown />
		</div>
		<div>
			<p>Showing {start} - {end} of {total} </p>
		</div>
	</div>
	<ul>
		{products.map((product) => (
			<ProductCard key={product.id} product={product} />
		))}
	</ul>
	<div>
		{Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => ( 
			<Link key={n} to={`?page=${n}`} > {n} </Link>))}
		{page < totalPages && (
			<Link to={`?page=${page + 1}`}> <ChevronRight/> </Link>
		)}
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
