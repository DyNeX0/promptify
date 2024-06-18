import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="green_gradiant">{type}</span> Post
      </h1>
      <p className="desc text-left max-w-d">
        {type} and share prompts with the world, Let the AI-power platform take
        you imagination to infinity and beyond!!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 mb-2">
            You AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Enter prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 mb-2">
            Tag
            <span className="font-normal">(#productFocused, #webD, #UI)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-300 text-sm rounded-full">
            Cancel
          </Link>
          <button
            type="submit"
            className=" bg-rose-500 px-5 py-1.5 text-sm rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
