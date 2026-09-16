import type { Route } from "./+types/cart";
import CartItem from "~/components/CartItem";
import CartSummary from "~/components/CartSummary";

export function meta({}: Route.MetaArgs) {
  return [
	{ title: "The Online Store" },
	{ name: "description", content: "Welcome to my Online Store!" },
  ];
}

export default function Cart() {
	return (
		<>
		<div>
			<CartItem/>
			<CartSummary/>
		</div>
		
		</>
	)
}