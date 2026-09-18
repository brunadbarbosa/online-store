import type { Route } from "./+types/home";
import { Link, useNavigate, useSearchParams } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductCard from "~/components/ProductCard";
import SortBy from "~/components/SortBy";
import Categories from "~/components/Categories";
import Pagination from "~/components/Pagination";
import { getProducts, getCategories } from "~/server/apiServer";
import { use } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Online Store" },
    { name: "description", content: "Product's List" },
  ];
}

export async function loader({ request } : Route.LoaderArgs) {
	const url = new URL(request.url);
	const page = Number(url.searchParams.get("page") ?? "1");
	const sortBy = url.searchParams.get("sortBy") ?? undefined;
	const order = (url.searchParams.get("order") as "asc" | "desc") ?? undefined;
	const selectedCategories = url.searchParams.getAll("category");
	const limit = 9;
	const skip = (page - 1) * limit;

	const [info, categories] =await Promise.all([
		getProducts(limit, skip, sortBy, order, selectedCategories),
		getCategories()
	]);
	return { products: info.products, total: info.total, page, limit, sortBy, order, categories };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { products, total, page, limit } = loaderData;
	const totalPages = Math.ceil(total / limit);
	const start = (page - 1) * limit + 1;
	const end = Math.min(page * limit, total);
	const [searchParams] = useSearchParams();

	function pageLink(n: number) {
		const next = new URLSearchParams(searchParams);
		next.set("page", String(n));
		return `?${next}`;
	}

	return (
	<>
	<div className="flex flex-col gap-12 px-4 sm:flex-row md:flex-row">
		<div className="basis-4/5 px-12">
			<div className="flex items-center flex-row justify-between py-4">
				<SortBy />
				<div>
					<p className="text-[15px]">Showing {start} - {end} of {total} </p>
				</div>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{products.map((product) => (
					<li key={product.id} className="w-full h-full">
						<ProductCard product={product} />
					</li>
				))}
			</ul>
			<div className="flex flex-row-reverse">
				<Pagination page={page} total={total} limit={limit}/>				
			</div>

		</div>
		<div className="flex items-start flex-row justify-between basis-1/5">
			<Categories categories={loaderData.categories} />
		</div>
	</div>
	</>
  ); 
}
