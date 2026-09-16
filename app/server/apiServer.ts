export type Product = {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
	description: string;
};

type ProductsResponse = {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export async function getProducts(limit = 9, skip = 0): Promise<ProductsResponse> {
	const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
	return (res.json());
}

export async function getProduct(id: string): Promise<Product> {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	if (!res.ok) {
		throw new Response("Product not found", { status: 404 });
	}
	return (res.json());
}
