import React from "react";
import { BiBookHeart } from "react-icons/bi";
import "../styles/nav.css";
import Menu from "./Menu";

function Header() {
	return (
		<nav className="padding-block">
			<section>
				<h2 className="flex">
					<BiBookHeart color="var(--accent)" />
					Pride and Prejudice
				</h2>
				<h4>Online reading + Vocabulary builder</h4>
			</section>
			<section>
				<Menu />
			</section>
		</nav>
	);
}

export default Header;
