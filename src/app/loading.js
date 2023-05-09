"use client";
import { ProgressSpinner } from "primereact/progressspinner";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-dark-purple/theme.css";

function loading() {
	return (
		<>
			<ProgressSpinner strokeWidth="5" />
		</>
	);
}

export default loading;
