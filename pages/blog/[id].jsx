import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getRecentPosts } from "../../lib/posts";
import { RightArrowIcon } from "../../components/icons/RightArrowIcon";
import { Menu } from "@headlessui/react";
import ShareButton from "../../components/share-button";
import RecentPosts from "../../components/recent-posts";

export default function Post({ postData, recentPosts }) {
  return (
    <Layout>
      <div className="mx-auto prose lg:prose-xl 2xl:prose-2xl">
        <h1 className="">{postData.title}</h1>
        <ShareButton className={"pb-4 lg:pb-9 "} />
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
      </div>
      <div className="bg-[#267E71] p-8">
        <RecentPosts posts={recentPosts}></RecentPosts>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  const recentPosts = await getRecentPosts();

  return {
    props: {
      postData,
      recentPosts,
    },
  };
}
