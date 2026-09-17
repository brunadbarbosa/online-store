export type Product = {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
	images: string[];
	description: string;
	category: string;
};

export type Category = {
	slug: string;
	name: string;
	url: string;
}

type ProductsResponse = {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export async function getProducts(limit = 9, skip = 0, sortBy?: string, order?: "asc" | "desc", categories?: string[]): Promise<ProductsResponse> {

	if (categories && categories.length > 1) {
		const res = await fetch("https://dummyjson.com/products?limit=0");
		if (!res.ok) throw new Response("Failed to load products", {status: res.status});

		const data: ProductsResponse = await res.json();
		let filtered = data.products.filter((p) => categories.includes(p.category));

		if (sortBy) {
			const dir = order === "desc" ? -1 : 1;
			filtered = filtered.sort((a, b) => {
				const av = a[sortBy as keyof Product];
				const bv = b[sortBy as keyof Product];
				if (av < bv) return -1 * dir;
				if (av > bv) return 1 * dir;
				return 0;
			});
		}
		const total = filtered.length;
		const products = filtered.slice(skip, skip + limit);
		return {products, total, skip, limit };
	}

	const category = categories?.[0];
	const base = category ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products`;
	const params = new URLSearchParams({ limit: String(limit), skip: String(skip) });
	if (sortBy) params.set("sortBy", sortBy);
	if (order) params.set("order", order);
	const res = await fetch(`${base}?${params}`);
	return res.json();
}

export async function getProduct(id: string): Promise<Product> {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	if (!res.ok) {
		throw new Response("Product not found", { status: 404 });
	}
	return (res.json());
}

export async function getCategories(): Promise<Category[]> {
	const res = await fetch("https://dummyjson.com/products/categories");
	return (res.json());
}
