import Link from "next/link";
import React from "react";

const credits = () => {
	return (
		<section>
			<h1>Credits</h1>
			<hr />
			<h2>Further Reading</h2>
			<ul>
				<li>
					<Link
						href="https://www.sparknotes.com/lit/pride/section1/"
						target="_blank"
					>
						Spark Notes
					</Link>
				</li>
				<li>
					<Link
						href="https://www.litcharts.com/lit/pride-and-prejudice/"
						target="_blank"
					>
						Lit Chart
					</Link>
				</li>
				<li>
					<Link
						href="https://www.shmoop.com/study-guides/literature/pride-and-prejudice/summary"
						target="_blank"
					>
						Shmoop Study Guide
					</Link>
				</li>
			</ul>
			<hr />
			<h2>Dictionaries</h2>
			<ul>
				<li>
					<Link href="https://www.definitions.net/" target="_blank">
						Definitions
					</Link>
				</li>
				<li>
					<Link href="https://www.oed.com/" target="_blank">
						Oxford Dictionary
					</Link>
				</li>
				<li>
					<Link href="https://www.merriam-webster.com/" target="_blank">
						Merriam Webster
					</Link>
				</li>
				<li>
					<Link href="https://www.wordsapi.com/" target="_blank">
						Words API
					</Link>
				</li>
			</ul>
			<hr />
			<h2>Novel / ePub</h2>
			<ul>
				<li>
					<Link
						href="https://www.janeausten.org/pride-and-prejudice/chapter-2.php"
						target="_blank"
					>
						JaneAusten.org
					</Link>
				</li>
				<li>
					<Link href="https://www.gutenberg.org/" target="_blank">
						Project Gutenberg
					</Link>
				</li>
				<li>
					<Link
						href="https://prideandprejudice.bib.bz/chapter-1"
						target="_blank"
					>
						Online Book
					</Link>
				</li>
				<li>
					<Link
						href="https://www.livros-digitais.com/jane-austen/orgulho-e-preconceito"
						target="_blank"
					>
						PT-BR Book
					</Link>
				</li>
			</ul>
			<hr />
			<h2>Tech Stack</h2>
			<ul>
				<li>Next.JS</li>
				<li>Zustand</li>
				<li>Contentful</li>
				<li>MongoDB/Mongoose (not currently)</li>
				<li>React-Icons</li>
				<li>Prime UI (Sidebar and Tooltip)</li>
			</ul>
			<hr />
			<nav>
				<Link href="/">Home</Link>
			</nav>
		</section>
	);
};

export default credits;

// JSON escape https://www.lambdatest.com/free-online-tools/json-escape
// https://allnovel.net/pride-and-prejudice/page-3.html
