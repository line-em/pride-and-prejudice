"use client";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Settings from "@/components/Settings";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { useState } from "react";

function Menu() {
	const [visible, setVisible] = useState(false);
	return (
		<nav>
			<button onClick={() => setVisible(!visible)}>{HiOutlineMenuAlt2}</button>
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
