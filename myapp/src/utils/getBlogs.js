/* 
Extracts front matter data from each mdx blog post
Returns an object with different project categories, and an array of blog post objects 
for each category.

eg)

{
    security: [
        {
            title: ...,
            description: ...,
            image: ...,
            blog: ...,
            date: ....
        }, {
            title: ...,
            description: ...,
            image: ...,
            blog: ...,
            date: ....
        }
    ],

    teaching: [
        {
            title: ...,
            description: ...,
            image: ...,
            blog: ...,
            date: ....
        }
    ]
}

*/

/*
Vite doesn't allow client-side processing using
node.js modules such as fs and path. 

eg) 
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');


Instead, to use Node.js modules, we have to adapt the code
to perform server-side processing 

*/

import { readdirSync, readFileSync} from 'fs';
import { join } from 'path';
import matter from 'gray-matter';


// @ts-ignore
export function getBlogs(root) {
    //const blogsRoot = '/src/data/projects';
    // readdirSync returns an array of strings for the filenames in specified directory/route
    const categories = readdirSync(root);

    // reduce ((accumlator, currValue))
    // @ts-ignore
    const postsByCategory = categories.reduce((result, category) => {
        const categoryPath = join(root, category);
        const files = readdirSync(categoryPath);
    
        // @ts-ignore
        const categoryPosts = files.map((file) => {
          const filePath = join(categoryPath, file);
          const content = readFileSync(filePath, 'utf8');
          const { data } = matter(content);
    
          return {
            title: data.title || '',
            description: data.description || '',
            image: data.image || '',
            blog: content,
            date: data.date || '',
          };
        });
    
        // @ts-ignore
        result[category] = orderPostsByDate(categoryPosts);
    
        return result;
      }, {});
    
      return postsByCategory;
}

// @ts-ignore
function orderPostsByDate(categoryPosts) {
    // @ts-ignore
    return categoryPosts.sort((a, b) => {
        new Date(a.date).getTime() > new Date(b.date).getTime()
            ? -1
            : new Date(a.date).getTime() < new Date(b.date).getTime()
            ? 1
            : 0
    })
}