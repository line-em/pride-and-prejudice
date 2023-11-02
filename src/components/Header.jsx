import React from "react";
import { BiBookHeart } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import "../styles/nav.css";
import Link from "next/link";

function Header() {
	return (
		<nav className="padding-block">
			<section>
				<Link href="/" className="no-button">
					<h2 className="flex no-wrap">
						<BiBookHeart color="var(--accent)" />
						Pride and Prejudice
					</h2>
				</Link>
				<h4 className="mobile-hide">Online reading + Vocabulary builder</h4>
			</section>
			<Link
				href="https://github.com/line-em"
				className="no-button flex"
				style={{ fontSize: ".8rem" }}
				target="_blank"
			>
				<FaGithubAlt size={24} title={"Code Repository on Github"} />
			</Link>
		</nav>
	);
}

export default Header;
