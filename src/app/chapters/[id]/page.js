"use client";
import React from "react";
import connectMongo from "@/app/api/connectMongo";
import { Chapter } from "@/app/api/models/models";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Definition from "@/components/Definition";

function page({ params, props }) {
	getChapter(params.id);
	return (
		<article>
			{/* <header>
				<h1 id="chapter">Chapter {props.id}</h1>
			</header>
			<ReactMarkdown>{props.text}</ReactMarkdown> */}
		</article>
	);
}

export async function getChapter(id, req, res) {
	try {
		console.log("CONNECTING");
		await connectMongo();
		// console.log("CONNECTED");

		const chapter = await Chapter.findOne({ id: id });
		const parsed = JSON.parse(JSON.stringify(chapter));

		// const req = await fetch("/api/chapters");
		// const res = await req.json();

		// const filter = res.filter((chapter) => chapter.id === id);

		// console.log(res);
		return {
			props: {
				id: parsed.id,
				text: parsed.text
			}
		};
	} catch (error) {
		console.log(error);
	}
}
export default page;
