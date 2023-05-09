import Menu from "@/components/Menu";
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
					// border: "3px var(--accent) solid",
					borderRadius: "4px"
				}}
				alt="Illustration from the book Pride and Prejudice"
				className="w-full h-auto"
			/>
			<hr />
			<h2>Pride and Prejudice</h2>
			<p>
				Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel
				follows the character development of Elizabeth Bennet, the dynamic
				protagonist of the book who learns about the repercussions of hasty
				judgments and comes to appreciate the difference between superficial
				goodness and actual goodness.
			</p>
			<p>
				Mr. Bennet, owner of the Longbourn estate in Hertfordshire, has five
				daughters, but his property is entailed and can only be passed to a male
				heir. His wife also lacks an inheritance, so his family faces becoming
				poor upon his death. Thus, it is imperative that at least one of the
				daughters marries well to support the others, which is a motivation that
				drives the plot. Pride and Prejudice has consistently appeared near the
				top of lists of "most-loved books" among literary scholars and the reading
				public.
			</p>
			<p>
				It has become one of the most popular novels in English literature, with
				over 20 million copies sold, and has inspired many derivatives in modern
				literature. For more than a century, dramatic adaptations, reprints,
				unofficial sequels, films, and TV versions of Pride and Prejudice have
				portrayed the memorable characters and themes of the novel, reaching mass
				audiences.
			</p>
			<hr />
			<h2>Dynamic experience</h2>
			<p>
				Difficult vocabulary is highlighted, pages can be customizable (click on
				the button STYLING), etc
			</p>
			<hr />
			<nav>
				<Link href="/credits">Credits and Further Reading</Link>
				<Link href={`chapters/1`}>
					Begin Reading <RiArrowRightLine size={18} />
				</Link>
			</nav>
			<nav>
				<Menu />
			</nav>
		</main>
	);
}
