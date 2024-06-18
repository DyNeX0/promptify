import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full pageflex-center flex-col">
      <h1 className="head_text text-center">
        Explore, Collaborate and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI Prompts </span>
      </h1>
      <p className="desc text-center  ">
        Promptify is an open-source AI prompt tool for the world to explore,
        collaborate and share unique prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
