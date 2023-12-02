// @ts-nocheck
import { getBlogs } from "../../utils/getBlogs";

//params is the value of slug [category]
export async function load({ params }) {
  const { category } = params;
  const mdxFiles = getBlogs(`/src/data/projects/${category}`);

  return { props: { category, projects: mdxFiles[category] } };
}