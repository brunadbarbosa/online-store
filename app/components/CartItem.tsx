import { Trash } from "lucide-react";

export default function CartItem() {
	return (
		<>
		<div>
			<img src="" alt="" />
			<div>
				<p>Product Name</p>
				<p>$99.99</p>
			</div>
			<div>
				<p>- 1 +</p>
				<Trash/>
			</div>
		</div>
		</>
	)
}