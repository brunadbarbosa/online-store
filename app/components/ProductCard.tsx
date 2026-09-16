import { Link } from "react-router";
import type { Product } from "~/server/apiServer";

export default function ProductCard( { product }: { product: Product }) {
   return (
 	<>
	<Link to={`/products/${product.id}`} >
		<img src={product.thumbnail} alt={product.title} />
		<div>
			<p>{product.title}</p>
			<p>${product.price}</p>
		</div>
	</Link>
 	</> );
}