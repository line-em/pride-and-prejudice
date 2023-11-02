import { fetchEntries } from "@/utils/contentful";
import words from "@/data/words";
import {
	RiArrowRightLine,
	RiArrowLeftLine,
	RiArrowRightSLine,
	RiInformationLine,
	RiArrowLeftSLine
} from "react-icons/ri";
import Definition from "@/components/Definition";
import Menu from "@/components/Menu";
import Link from "next/link";

export const metadata = {
	title: "Pride and Prejudice Novel",
	description: "Ebook Study Project"
};

async function page({ params }) {
	const chapter = await getChapter(params.id);
	let currText = chapter?.text.map((item) => item.content[0].value);
	const dictionary = words.map((entry) => entry.word);
	const punctuation = [
		",",
		".",
		"!",
		"?",
		";",
		":",
		"-",
		"—",
		"(",
		")",
		"[",
		"]",
		"{",
		"}"
	];
	return (
		<section className="story">
			<div aria-hidden className="float-nav left mobile-hide">
				{params.id - 1 === 0 ? null : (
					<Link href={`chapters/${Number(params.id) - Number(1)}`}>
						<RiArrowLeftSLine size={45} />
					</Link>
				)}
			</div>
			<div aria-hidden className="float-nav right mobile-hide">
				<Link
					href={`chapters/${Number(params.id) + Number(1)}`}
					className={params.id == 61 && "hide"}
				>
					<RiArrowRightSLine size={45} />
				</Link>
			</div>
			<header className="container">
				<div className="flex space">
					<h1>Chapter {chapter.chapter}</h1>
					<Menu />
				</div>
			</header>
			{currText.map((p, index) => {
				const wordsInParagraph = p.split(" ");
				return (
					<p key={p.slice(0) + index}>
						{wordsInParagraph.map((word, index) => {
							if (
								dictionary.includes(word) ||
								(punctuation.includes(word.slice(-1)) &&
									dictionary.includes(word.slice(0, -1)))
							) {
								const matchingWordObj = words.find(
									(wordObj) =>
										wordObj.word === word.replace(/[^\w\s]/gi, "")
								);
								return (
									<span key={index + word}>
										<Definition text={matchingWordObj.definition}>
											{matchingWordObj.word}
										</Definition>
									</span>
								);
							} else {
								return word + " ";
							}
						})}
					</p>
				);
			})}
			<hr />
			<nav>
				{params.id - 1 === 0 ? null : (
					<Link href={`chapters/${Number(params.id) - Number(1)}`}>
						<RiArrowLeftLine size={18} />
						Previous Chapter
					</Link>
				)}

				<Link
					href={`https://www.litcharts.com/lit/pride-and-prejudice/chapter-${Number(
						params.id
					)}`}
					target="_blank"
					alt="LitCharts Analysis"
				>
					<RiInformationLine size={20} />
					Info
				</Link>

				<Link
					href={
						params.id !== 61
							? `chapters/${Number(params.id) + Number(1)}`
							: `credits`
					}
					className={params.id == 61 && "hide"}
				>
					Next Chapter <RiArrowRightLine size={18} />
				</Link>
			</nav>
		</section>
	);
}

export default page;

export async function getChapter(id) {
	const res = await fetchEntries();
	const chapters = res.map((item) => item.fields);
	const currChapter = Object.assign(
		...chapters.filter((chapter) => chapter.capitulo === Number(id))
	);
	return {
		chapter: currChapter.capitulo,
		text: currChapter.texto.content
	};
}
