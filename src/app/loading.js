import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

function loading() {
	return (
		<div>
			<ProgressSpinner strokeWidth="8" fill="var(--accent)" />
		</div>
	);
}

export default loading;
