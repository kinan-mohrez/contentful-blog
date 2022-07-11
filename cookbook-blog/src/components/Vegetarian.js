import React from 'react';

export default function Vegetarian({ article }) {
	console.log({ article });
	const { name, image, description, omnivore } = article.fields;
	if (omnivore === 2) {
		return (
			<div>
				<div>{name}</div>
				<br />
				<br />
				<br />
				<div>
					<img src={image.fields.file.url} alt='' />
				</div>
				<br />
				<br />
				<br />
				<div>{description}</div>
				<br />
				<br />
				<br />
				<div>{omnivore}</div>
				<br />
				<br />
				<br />
			</div>
		);
	}
}
