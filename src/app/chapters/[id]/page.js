import { fetchEntries } from "@/utils/contentful";
import words from "@/data/words";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import Definition from "@/components/Definition";
import Menu from "@/components/Menu";
import Link from "next/link";

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
			<div className="container">
				<header className="flex space">
					<h1>Chapter {chapter.chapter}</h1>
					<Menu />
				</header>
			</div>
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
				>
					LitCharts Analysis
				</Link>

				{params.id + 1 === 62 ? null : (
					<Link href={`chapters/${Number(params.id) + Number(1)}`}>
						Next Chapter <RiArrowRightLine size={18} />
					</Link>
				)}
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

// "use client";
// function page({ params }) {
// const chapter = await getChapter();
// return (
// 	<article>
{
	/* <header>
				<h1 id="chapter">Chapter {chapter?.id}</h1>
			</header>
			<ReactMarkdown>{chapter?.text}</ReactMarkdown> */
}
// </article>
// );
// }

// export async function getChapter() {
// 	const res = await fetchEntries();
// const posts = res.map((p) => {
// 	return p.fields;
// });
// console.log(posts);
// 	return {
// 		chapter: 1,
// 		text: "oi"
// 	};
// }

// export async function getChapter(id, req, res) {
// 	try {
// 		console.log("CONNECTING");
// 		await connectMongo();
// console.log("CONNECTED");

// const chapter = await Chapter.findOne({ id: id });
// const parsed = JSON.parse(JSON.stringify(chapter));

// const req = await fetch("/api/chapters");
// const res = await req.json();

// const filter = res.filter((chapter) => chapter.id === id);

// 		return {
// 			id: parsed.id,
// 			text: parsed.text
// 		};
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// export default page;
