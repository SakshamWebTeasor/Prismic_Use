import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Calendar from "@/components/icons/Calendar";
import Clover from "@/components/icons/Clover";
import BarGraph from "@/components/icons/BarGraph";
import Hourglass from "@/components/icons/Hourglass";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12" >{children}</Heading>),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="md-3 font-medium sm:text-left text-center" >{children}</Heading>),
  paragraph: ({ children }) => (<p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">{ children }</p>)
}

const icons = {
  calendar: <Calendar />,
  clover: <Clover />,
  bargraph: <BarGraph />,
  hourglass: <Hourglass />
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-content-start place-content-center">
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
            {item.icon && (
              <div className="mb-5">{icons[item.icon]}</div>
            )}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
