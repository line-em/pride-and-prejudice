"use client";

import React from "react";
import { fetchEntries } from "@/utils/contentful";
import words from "@/data/words";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// desinstalar um desses
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Definition from "@/components/Definition";

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
			<h1>Chapter {chapter.chapter}</h1>
			<h2>TRANSFORMAR EM SSR NOVAMENTE</h2>
			{currText.map((p) => {
				const wordsInParagraph = p.split(" ");
				return (
					<p>
						{wordsInParagraph.map((word) => {
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
									<Definition text="oi">
										{matchingWordObj.word}
									</Definition>
								);
							} else {
								return word + " ";
							}
						})}
					</p>
				);
			})}
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
	// console.log(currChapter.texto.content[0].content);
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
