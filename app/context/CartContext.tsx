import { createContext, useContext, useState, type ReactNode } from "react";

type CartContextType = {
	count: number;
	addToCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);

	function addToCart() {
		setCount((c) => c + 1);
	}

	return (
		<CartContext.Provider value={{ count, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) throw new Error("Context not found");
	return (context);
}
