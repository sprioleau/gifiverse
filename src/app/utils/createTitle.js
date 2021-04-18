// Adapted from: https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js

import React from "react";

const createTitle = (titleObject) => {
	const { tag, title, className } = titleObject;

	React.createElement(tag, {
		dangerouslySetInnerHTML: { __html: title },
		className,
	});
};

export default createTitle;
