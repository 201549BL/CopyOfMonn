import React from "react";
import Card from "../card";
import FadeIn from "../fade-in";

const RecentPosts = ({ posts, className }) => {
  return (
    <div className={`w-full ${className} p-3 lg:p-0`}>
      <div className={` max-w-[1920px] mx-auto `}>
        <p className="text-xl text-[#C4C4C2]">Nyheter</p>
        <div className="grid grid-flow-row auto-rows-fr grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-14 gap-y-14 lg:gap-y-20">
          {posts.map((item, index) => {
            return (
              <FadeIn key={item.title + index}>
                <Card image={item.image} alt="" href={item.slug} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
