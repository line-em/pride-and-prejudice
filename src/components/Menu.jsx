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
	return (
		<nav>
			<button onClick={() => setVisible(!visible)}>
				<RiPaintLine /> Styling
			</button>
			<button onClick={() => setVisible(!visible)}>
				<RiMenuLine /> Chapters
			</button>
			<Sidebar visible={visible} onHide={() => setVisible(false)}>
				<Settings />
				<details role="list" dir="ltf">
					<summary aria-haspopup="listbox" role="link">
						Chapters
					</summary>
					<ul role="listbox">
						<li>
							<Link href="/chapters/1">Chapter 01</Link>
							<Link href="/chapters/2">Chapter 02</Link>
						</li>
					</ul>
				</details>
			</Sidebar>
		</nav>
	);
}

export default Menu;
