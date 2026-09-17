import { Link } from "react-router";
import type { Product } from "~/server/apiServer";

export default function ProductCard( { product }: { product: Product }) {
   return (
 	<>
	<Link className="block shadow-md rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow" to={`/products/${product.id}`} >
		<img className="w-full h-full size-[336px]" src={product.thumbnail} alt={product.title} />
		<div className="flex flex-col gap-2 p-3">
			<p className="text-[16px] line-clamp-1">{product.title}</p>
			<p className="text-[16px]">${product.price.toFixed(2)}</p>
		</div>
	</Link>
 	</> );
}