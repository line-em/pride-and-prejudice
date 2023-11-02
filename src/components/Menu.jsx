"use client";
import Link from "next/link";
import { RiPaintLine, RiMenuLine } from "react-icons/ri";
import Settings from "@/components/Settings";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { useState } from "react";

function Menu() {
	const [visibleL, setVisibleLeft] = useState(false);
	const [visibleR, setVisibleRight] = useState(false);
	const numOfChapters = Array.from({ length: 61 }, (_, index) => index + 1);
	return (
		<nav>
			<button onClick={() => setVisibleLeft(!visibleL)}>
				<RiPaintLine size={18} /> Styling
			</button>
			<button onClick={() => setVisibleRight(!visibleR)}>
				<RiMenuLine size={18} /> Chapters
			</button>
			<Sidebar
				visible={visibleL}
				onHide={() => setVisibleLeft(false)}
				position="left"
			>
				<Settings />
			</Sidebar>
			<Sidebar
				visible={visibleR}
				onHide={() => setVisibleRight(false)}
				position="right"
				className="p-10"
			>
				<h3>Chapters</h3>
				<hr />
				<p>More chapters will be added in the future.</p>
				<section role="listbox" className="flex config auto-grid">
					{numOfChapters.map((chapter, index) => (
						<Link href={`chapters/${chapter}`} key={index} className="btn">
							{chapter}
						</Link>
					))}
				</section>
			</Sidebar>
		</nav>
	);
}

export default Menu;
