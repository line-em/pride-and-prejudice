import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="center">
			<hr />
			Book by Jane Austen. Coding by Line. Special thanks to
			<Link
				href="https://standardebooks.org/"
				className="no-button flex"
				style={{ fontSize: ".8rem" }}
				target="_blank"
			>
				Standardebooks
			</Link>{" "}
			and{" "}
			<Link
				href="https://gutenberg.org/"
				className="no-button flex"
				style={{ fontSize: ".8rem" }}
				target="_blank"
			>
				Project Gutenberg.
			</Link>
		</footer>
	);
};

export default Footer;
