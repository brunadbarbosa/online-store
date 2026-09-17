import { Link } from "react-router";
import type { Product } from "~/server/apiServer";

export default function ProductCard( { product }: { product: Product }) {
   return (
 	<>
	<Link className="block max-w-[336px] gap-4" to={`/products/${product.id}`} >
		<img className="w-full h-full size-[336px]" src={product.thumbnail} alt={product.title} />
		<div>
			<p className="text-[15px]">{product.title}</p>
			<p className="text-[15px]">${product.price.toFixed(2)}</p>
		</div>
	</Link>
 	</> );
}