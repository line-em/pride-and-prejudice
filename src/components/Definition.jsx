"use client";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

function Definition({ children, text }) {
	return (
		<>
			<Tooltip
				target=".tooltip"
				position="top"
				style={{ maxWidth: 250, borderBottom: "solid var(--accent) 3px" }}
			/>
			<span data-pr-tooltip={text} className="tooltip">
				{children}
			</span>{" "}
		</>
	);
}

export default Definition;
