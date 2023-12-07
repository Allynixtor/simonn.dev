// @ts-ignore
export async function load({ params }) {
	const post = await import(`../../../data/projects/${params.slug}.svx`);
	const { title, date, completed } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		completed
	};
}