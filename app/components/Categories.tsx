import { useNavigate, useSearchParams } from "react-router";
import type { Category } from "~/server/apiServer";

export default function Categories({ categories }: { categories: Category[] }) {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const activeCategories = searchParams.getAll("category");

	function toggleCategory(slug: string) {
		const next = new URLSearchParams(searchParams);
		next.delete("page");

		const current = next.getAll("category");
		next.delete("category");
		if (current.includes(slug)) {
			current.filter((c) => c !== slug).forEach((c) => next.append("category", c));
		}
		else {
			[...current, slug].forEach((c) => next.append("category", c));
		}
		navigate(`?${next}`);
	}

	return (
		<div className="flex items-start flex-col gap-4 p-4" >
			<p className="text-[15px]">Categories</p>
			<div className="flex flex-col gap-2 text-[15px]">
				{categories.map((cat) => (
					<label key={cat.slug} className="flex items-center gap-2">
						<input type="checkbox" checked={activeCategories.includes(cat.slug)} onChange={() => toggleCategory(cat.slug)} className="accent-[#1F3044]" />
						{cat.name}
					</label>
				))}
			</div>
		</div>
	);
}