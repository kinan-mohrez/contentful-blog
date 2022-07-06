import React from 'react';

export default function Post({ article }) {
	console.log({ article });
	const { name, image, description } = article.fields;
	return (
		<div>
			<div>{name}</div>
			<br />
			<br />
			<br />
			<div>
				<img src={image.fields.file.url} />
			</div>
			<br />
			<br />
			<br />
			<div>{description}</div>
			<br />
			<br />
			<br />
		</div>
	);
}
