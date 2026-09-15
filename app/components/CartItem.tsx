import { Trash } from "lucide-react";

export default function CartProduct() {
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
				<Trash></Trash>
			</div>
		</div>
		</>
	)
}