import { Link, useSearchParams } from "react-router";
import { useState} from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Pagination({ page, total, limit }: { page: number; total: number; limit: number }) {
	const totalPages = Math.ceil(total / limit);
	const [searchParams] = useSearchParams();
	const  [visibleCount, setVisibleCount] = useState(Math.max(5, page));
	const windowSize = 5;
	let startPage = Math.max(1, page - Math.floor(windowSize / 2));
	let endPage = startPage + windowSize - 1;
	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - windowSize + 1);
	}

	function pageLink(n: number) {
		const next = new URLSearchParams(searchParams);
		next.set("page", String(n));
		return `?${next}`;
	}

	const visiblePages = Array.from(
		{ length: endPage - startPage + 1 },
		(_, i) => startPage + i
	);

	return (
		<div className="flex items-center gap-3 py-5">
			{page > 1 && (
				<Link to={pageLink(page - 1)}>
					<ChevronLeft />
				</Link>
			)}
			{visiblePages.map((n) => (
				<Link
					key={n}
					to={pageLink(n)}
					className={n === page ? "bg-[#1f3044] text-white px-3 py-1 rounded-lg font-light" : "text-[#e1F3044]"}
				>
					{n}
				</Link>
			))}
			{page < totalPages && (
				<Link to={pageLink(page + 1)}>
					<ChevronRight />
				</Link>
			)}
		</div>
	);
}