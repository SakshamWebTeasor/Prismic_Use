import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { createClient } from "@/prismicio";
import { Children } from "react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-10" >{children}</Heading>),
  paragraph: ({ children }) => (<p className="text-xl md:text-2xl font-normal font-body mb-8 text-slate-600 emptyClassText">{children}</p>)
}
/**
 * Props for `TEstimonials`.
 */
export type TEstimonialsProps = SliceComponentProps<Content.TEstimonialsSlice>;

/**
 * Component for "TEstimonials" Slices.
 */
const TEstimonials = async ({ slice }: TEstimonialsProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
        return client.getByUID("testimonial", item.testimonial.uid)
      }
    })
  );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {testimonials.map((item, index) => item && (
          <div key={index} className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <PrismicRichText field={null} components={components} />
            <p className={clsx(components.paragraph?.toString())}>{item.data.quote}</p>
            <div className="flex">
              <PrismicNextImage field={item.data.avatar} height={56} width={56} className="rounded-full mr-4" imgixParams={{ ar: "1,1", fit: "crop" }} />
              <div>
                <p className="text-base font-medium text-slate-700">
                  {item.data.name}
                </p>
                <p className="text-base text-slate-600">
                  {item.data.job_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default TEstimonials;
