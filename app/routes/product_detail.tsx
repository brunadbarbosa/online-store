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
		<div className="flex items-start">			
			<div className="flex  items-center flex-col p-4 basis-4/5">
				<img src={product.images[0]} alt={product.title} className="w-auto h-auto"/>
			</div>
			<div className="flex flex-col content-start basis-2/5">
				<div className="flex flex-col gap-4 p-4">
					<div className="font-[Ubuntu] text-[28px] font-bold">
						<h2>{product.title}</h2>
						<h3>${product.price}</h3>						
					</div>
					<button className="w-full bg-[#1f3044] text-white px- py-2 font-light font-[Roboto_Mono]">Add to Cart</button>
				</div>
				<div className="flex flex-col gap-2 p-4">
					<p>Product Details</p>
					<p className="flex-wrap">{product.description}</p>
				</div>
			</div>
		</div>
	)
}