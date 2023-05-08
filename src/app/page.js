import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
	return (
		<main className="center">
			<Image
				src="/image.jpg"
				width={500}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				height={200}
				style={{
					objectFit: "contain",
					border: "3px var(--accent) solid",
					borderRadius: "4px"
				}}
				alt="Illustration from the book Pride and Prejudice"
				className="w-full h-auto"
			/>
			<hr />
			<h2>Pride and Prejudice</h2>
			<p>novel...</p>
			<hr />
			<h2>Dynamic experience</h2>
			<p>
				Difficult vocabulary is highlighted, pages can be customizable (click on
				the button STYLING), etc
			</p>
			<hr />
			<nav>
				<Link href={`chapters/1`}>
					Begin Reading <RiArrowRightLine size={18} />
				</Link>
			</nav>
		</main>
	);
}
