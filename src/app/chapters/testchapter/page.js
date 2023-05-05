import React from "react";
import Chapone from "./Ch01";
import Chaptwo from "./Ch02";

async function page({ params }) {
	if (!params.testchapter) {
		console.log(params);
		return <>Loading...</>;
	}
	const entry = await getChapter(params.testchapter);
	console.log(params);
	return <>{entry}</>;
}

async function getChapter(id) {
	console.log(id);
	if (id === "1") return <Chapone />;
	if (id === "2") return <Chaptwo />;
}

export default page;

// export async function generateStaticParams() {
// 	// const posts = await fetch("https://.../posts").then((res) => res.json());

// 	// return posts.map((post) => ({
// 	// 	slug: post.slug
// 	// }));
//     return {
//         params:
//     }
// }
