import React from "react";
import { BiBookHeart } from "react-icons/bi";
import "../styles/nav.css";
import Link from "next/link";

function Header() {
	return (
		<nav className="padding-block">
			<section>
				<Link href="/" className="no-button">
					<h2 className="flex">
						<BiBookHeart color="var(--accent)" />
						Pride and Prejudice
					</h2>
				</Link>
				<h4>Online reading + Vocabulary builder</h4>
			</section>
			<section>Github</section>
		</nav>
	);
}

export default Header;
