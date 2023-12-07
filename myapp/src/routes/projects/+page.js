// Pre=rendering/loading blogs before svelte page is rendered
// @ts-nocheck
export async function load() {

  // grab blogs
  //  default: SvelteComponent; metadata: Record<string, any>
  const glob_import = import.meta.glob('../../data/projects/*.svx',
    {
      eager: true
    }
  );


  /* 
  writings: [
    [blog1],
    [blog2]
  ]

  blog: [
    "path",  (eg. "../../data/projects/security/advent_of_code.svx")
    {
      "default": {},
      "metadata": {
        "title": "COMP6841 CTF 2023",
        "description": "Check out how I came equal first place in my first CTF that was created for the UNSW COMP6841 security course.",
        "category": "security",
        "image": "/assets/images/blog_posts/security/comp6841_ctf.png",
        "blog": "/src/data/projects/security/comp6841_ctf.mdx",
        "date": "2023-12-02"
      }
    }
  ]
  */


  const writings = Object.entries(glob_import);

  const categories = ['security', 'teaching', 'web-dev'];

  let data = {};
  data['categories'] = categories;




  // console.log(JSON.stringify(writings, 0, 2));
  // console.log({ writings });

  // Starting with acc = {}, create a new object with each category as a key, and value of an empty array
  // to store all the metadata of blogs in that category
 let projectsByCategory = categories.reduce((acc, category) => {
  // @ts-ignore
    acc[category] = [];
    return acc;
 }, {});

 writings.forEach((blogGlob) => {
  const blogObj = blogGlob[1];
  const metadata = blogObj.metadata;
  projectsByCategory[metadata.category].push(metadata);
 });

 // Sort blogs in each category by date
 Object.keys(projectsByCategory).forEach((category) => {
  projectsByCategory[category].sort((blog1, blog2) => {
    return new Date(blog2.date).getTime() - new Date(blog1.date).getTime();
  })
 })

 data['projectsByCategory'] = projectsByCategory;

  return data;
}