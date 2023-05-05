import { Lora, Rubik, Literata, Noto_Sans_Mono, Montserrat } from "next/font/google";
import "../styles/grid.css";
import "./globals.css";
import "../styles/typography.css";
import Nav from "@/components/Nav";
import Settings from "@/components/Settings";
import Link from "next/link";

export const lora = Lora({
	subsets: ["latin"],
	variable: "--serif2",
	fallback: ["georgia", "times new roman", "serif"]
});

export const mono = Noto_Sans_Mono({
	subsets: ["latin"],
	variable: "--mono",
	fallback: ["georgia", "times new roman", "serif"]
});

export const rubik = Rubik({
	subsets: ["latin"],
	variable: "--sans",
	fallback: ["arial", "helvetica", "sans-serif"]
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--sans2",
	fallback: ["arial", "helvetica", "sans-serif"]
});

export const literata = Literata({
	subsets: ["latin"],
	variable: "--serif",
	fallback: ["georgia", "times new roman", "serif"]
});

export const metadata = {
	title: "Pride and Prejudice Novel",
	description: "Language learning and etc"
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${literata.variable} ${rubik.variable} ${montserrat.variable} ${mono.variable} ${lora.variable}`}
		>
			<body className={literata.className}>
				<Nav />
				<main className="grid">
					<aside className="column">
						<Settings />
						<details role="list" dir="ltf">
							<summary aria-haspopup="listbox" role="link">
								Chapters
							</summary>
							<ul role="listbox">
								<li>
									<Link href="./Ch01">Chapter 01</Link>
								</li>
							</ul>
						</details>
					</aside>
					<section className="story">{children}</section>
				</main>
				<footer>Book by Jane Austen etc. Coding by Line</footer>
			</body>
		</html>
	);
}
