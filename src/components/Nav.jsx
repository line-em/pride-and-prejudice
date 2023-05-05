import React from "react";
import { BiBookHeart } from "react-icons/bi";
import "../styles/nav.css";

function Nav() {
	return (
		<nav className="padding-block">
			<h2 className="flex">
				<BiBookHeart color="var(--accent)" />
				Pride and Prejudice
			</h2>
			<h4>Online reading + Vocabulary builder</h4>
		</nav>
	);
}

export default Nav;
