// @ts-nocheck
import { getBlogs } from "../../utils/getBlogs";

export async function load() {

    const projectsByCategory = getBlogs('./src/data/projects');

    if (!projectsByCategory) {
        return { status: 404, error: new Error("No projects yet :(") };
      }

    return { props: {projectsByCategory}};
  }






// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	if (params.slug === 'hello-world') {
// 		return {
// 			title: 'Hello world!',
// 			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
// 		};
// 	}

// 	throw error(404, 'Not found');
// }