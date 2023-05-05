import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div>
				<p>Get started by editing&nbsp;</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />

			<a
				href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
					Docs <span>-&gt;</span>
				</h2>
				<p>Find in-depth information about Next.js features and API.</p>
			</a>

			<a
				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
					Learn <span>-&gt;</span>
				</h2>
				<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
			</a>
		</main>
	);
}
