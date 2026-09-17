import type { Product } from "~/server/apiServer";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function SortBy(){
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const sortBy = searchParams.get("sortBy");
	const order = searchParams.get("order");
	const currentValue = sortBy ? `${sortBy}-${order}` : "";

	return (
	<>
		<select
			className="border rounded-lg py-2 px-2 text-[15px]"
			value={currentValue}
			onChange={(e) => {
				const next = new URLSearchParams(searchParams);
				if (e.target.value === "") {
					next.delete("sortBy");
					next.delete("order");
				} else {
					const [sortBy, order] = e.target.value.split("-");
					next.set("sortBy", sortBy);
					next.set("order", order);
				}
				next.delete("page"); // volta para a página 1 ao mudar o sort
				navigate(`?${next}`);
			}}
		>
			<option value="">Sort by</option>
			<option value="price-asc">Preço: ↑ </option>
			<option value="price-desc">Preço: ↓ </option>
			<option value="title-asc">Nome: A-Z</option>
			<option value="title-desc">Nome: Z-A</option>
		</select>
	</>
	);
	}