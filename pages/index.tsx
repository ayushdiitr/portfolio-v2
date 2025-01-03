import type { GetStaticProps, NextPage } from "next";

import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
// import BlogPosts from "@/components/Home/BlogPosts";

import hashnodeData from "@/data/hashnode.json";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import Skills from "@/components/Home/Hero/Skills";

interface HomePageProps {
  blogPosts: HashnodePostWithPlaceHolderImage[];
}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = hashnodeData.posts;

  const allProjectsWithPlaceholerImages = [];

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage);
    allProjectsWithPlaceholerImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { blogPosts: allProjectsWithPlaceholerImages },
  };
};

export default HomePage;
