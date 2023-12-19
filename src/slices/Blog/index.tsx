import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BlogProps = SliceComponentProps<Content.BlogSlice>;

const Blog = ({ slice }: BlogProps): JSX.Element => {
  const { blogimage, blogtitle, blogmainpara } = slice.primary;

  const isImgRight = slice.variation === "imgRight";

  return (
    <section className="max-w-3xl lg:max-w-6xl mx-auto py-8 px-4">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 light:bg-slate-800">
        <div className={`lg:flex${isImgRight ? "-row-reverse" : ""}`}>
          {slice.variation !== "imgRight" && (
            <div className="lg:w-1/2 flex">
              <PrismicNextImage
                field={blogimage}
                className="mx-3 my-3 w-11/12 h-full object-cover lg:h-auto lg:object-cover rounded-xl"
              />
            </div>
          )}
          <div
            className={`lg:w-1/2 pt-6 md:p-8 text-center md:text-left space-y-4 ${
              isImgRight ? "lg:pr-8" : "lg:pl-8"
            }`}
          >
            <blockquote>
              <p className="text-lg font-medium">
                <PrismicRichText field={blogtitle} />
              </p>
              <p className="mb-8 text-justify">
                <>{blogmainpara}</>
              </p>
              {slice.items.length > 0 && (
                <>
                  <p className="my-3 text-lg font-semibold">
                    Some Frequently Asked Questions:
                  </p>
                  {slice.items.map(
                    (item, index) =>
                      item && (
                        <figcaption key={index} className="font-medium my-3">
                          <div className="text-sky-500 dark:text-sky-400 grid">
                            Question {index + 1}:{" "}
                            <span className="ms-8 text-justify">
                              <PrismicRichText field={item.question} />
                            </span>
                          </div>
                          <div className="text-slate-700 dark:text-slate-500 text-justify">
                            <PrismicRichText field={item.answer} />
                          </div>
                        </figcaption>
                      )
                  )}
                </>
              )}
            </blockquote>
          </div>
          {isImgRight && (
            <div className="lg:w-1/2">
              <PrismicNextImage
                field={blogimage}
                className="w-full h-full object-cover lg:h-auto lg:object-none rounded-xl lg:rounded-none"
              />
            </div>
          )}
        </div>
      </figure>
    </section>
  );
};

export default Blog;
