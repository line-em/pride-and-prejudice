"use client";
import Link from "next/link";
import { RiPaintLine, RiMenuLine } from "react-icons/ri";
import Settings from "@/components/Settings";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { useState } from "react";

function Menu() {
	const [visible, setVisible] = useState(false);
	const numOfChapters = Array.from({ length: 61 }, (_, index) => index + 1);
	return (
		<nav>
			<button onClick={() => setVisible(!visible)}>
				<RiPaintLine size={18} /> Styling
			</button>
			<button onClick={() => setVisible(!visible)}>
				<RiMenuLine size={18} /> Chapters
			</button>
			<Sidebar visible={visible} onHide={() => setVisible(false)}>
				<Settings />
				<details role="list" dir="ltf">
					<summary aria-haspopup="listbox" role="link">
						Chapters
					</summary>
					<ul role="listbox">
						{numOfChapters.map((chapter, index) => (
							<li key={index}>
								<button>
									<Link href={`chapters/${chapter}`}>{chapter}</Link>
								</button>
							</li>
						))}
					</ul>
				</details>
			</Sidebar>
		</nav>
	);
}

export default Menu;
