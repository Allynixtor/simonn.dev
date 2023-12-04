// @ts-ignore
export async function load({ params }) {
    console.log(`../../../data/projects/${params.slug}.svx`);
	const post = await import(`../../../data/projects/${params.slug}.svx`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}