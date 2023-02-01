import { send, shield, star } from "../assets";

const creator = [
  {
    id: "feature-1",
    icon: star,
    title: " Creator Economy",
    content:
      "Back the creators and fast-track the creators to entertainment greatness",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Your Metrics",
    content:
      "We translate your channel metrics into revenue projections for the future.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Reach",
    content:
      "Provide exposure across multiple media platforms and increase potential",
  },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== creator.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        <span className="text-[#FFB81C]"> TUBECASH </span>helps creators grow
        their business and maximize their potential across multiple social media
        platforms.
      </h2>
    </div>

    <div
      className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
    >
      {creator.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
