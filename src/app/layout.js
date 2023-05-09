import { Lora, Rubik, Literata, Noto_Sans_Mono, Montserrat } from "next/font/google";
import "../styles/typography.css";
import "../styles/grid.css";
import "../styles/globals.css";
import Header from "@/components/Header";

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
				<Header />
				<main>
					<section className="story">{children}</section>
				</main>
				<footer className="center">
					<hr />
					Book by Jane Austen. Coding by Line.
				</footer>
			</body>
		</html>
	);
}
