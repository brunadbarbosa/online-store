import type { Route } from "./+types/product_detail";
import { getProduct } from "~/server/apiServer";

export async function loader({ params }: Route.LoaderArgs) {
	const product = await getProduct(params.productId);
	return { product };
}

export function meta({ loaderData }: Route.MetaArgs) {
	const { product } = loaderData;
  return [
	{ title: `${product.title}` },
	{ name: "description", content: "Product detail" },
  ];
}

export default function ProductDetail({ loaderData }: Route.ComponentProps) {
	const { product } = loaderData;
	return (
		<>
			<div>
				<img src={product.thumbnail} alt={product.title} />
			</div>
			<div>
				<div>
					<h2>{product.title}</h2>
					<h3>${product.price}</h3>
					<button>Add to Cart</button>
				</div>
				<div>
					<p>Product Details</p>
					<p>{product.description}</p>
				</div>
			</div>
		</>
	)
}