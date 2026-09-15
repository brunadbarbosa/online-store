export default function CartSummary() {
	return (
		<>
		<div>
			<h3>Cart Summary</h3>
			<div>
				<p>Subtotal</p>
				<p>$409.95</p>
			</div>
			<div>
				<p>Shipping</p>
				<p>$409.95</p>
			</div>
			<div>
				<p>Total</p>
				<p>$409.95</p>
			</div>
			<button>Check Out</button>
			<p>Or pay with PayPal</p>
			<div>
				<p>Promo code</p>
				<div>
					<form action="">Enter code</form>
					<button>Apply</button>
				</div>
			</div>
		</div>
		
		</>
	)
}