import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getRecentPosts(amount = 6) {
  const fileNames = fs.readdirSync(postsDirectory);

  const readFileNames = fileNames.map((file) => {
    const fullPath = path.join(postsDirectory, file);

    const slug = file.replace(".md", "");

    const readFile = fs.readFileSync(fullPath);

    const { data } = matter(readFile);

    const result = { ...data, slug };

    return result;
  });

  const sortedFileNames = readFileNames.sort((a, b) => {
    const aDate = moment(a.date, "DD-MM-YYYY");
    const bDate = moment(b.date, "DD-MM-YYYY");

    if (moment.min(aDate, bDate) === aDate) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedFileNames.slice(0, amount);
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
