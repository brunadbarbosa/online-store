import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
	{ title: "The Online Store" },
	{ name: "description", content: "Welcome to my Online Store!" },
  ];
}

export default function ProductDetail() {
	return (
		<>
			<div>
				<img src="" alt="" />
			</div>
			<div>
				<div>
					<h2>Product Title</h2>
					<h3>Product Price</h3>
					<button>Add to Cart</button>
				</div>
				<div>
					<p>Product Details</p>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos asperiores aut, vitae impedit, porro pariatur omnis similique quis ad fugit atque, error nihil cumque! Dignissimos at maxime quos deleniti labore?</p>
				</div>
			</div>
		</>
	)
}