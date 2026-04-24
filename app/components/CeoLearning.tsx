import Image from "next/image";
import Button from "./Button";

export default function CeoLearning() {
  const perks = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="bg-white py-16">
      <main className="section flex flex-col gap-6 bg-[#EF435333] p-10 rounded-2xl">
        <div className="flex flex-col gap-3 ">
          <h6 className="text-[#1671D9] italic font-semibold text-[20px]">
            Learning With Our CEO:
          </h6>

          <h2 className="text-primary font-semibold text-[32px] italic">
            Transformation Hub With Jite Newton
          </h2>
        </div>

        <p className="text-lg">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance
          your leadership skills, the Transformation Hub provides a
          transformative learning experience to unlock your full potential and
          drive success in your endeavours.
        </p>

        <div className="flex items-center gap-8">
          <Image
            src="/ceo-learning.png"
            alt="CEO Letter"
            width={560}
            height={500}
            className="h-full"
          />

          <div className="bg-[#FFFFFF4D] rounded-lg py-8 px-5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {perks.map((perk) => (
                <span
                  key={perk}
                  className="flex items-center gap-2.5 bg-white p-4 rounded-xl"
                >
                  <Image
                    src="/learning-bolt.svg"
                    alt="bolt-icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-lg">{perk}</p>
                </span>
              ))}
            </div>

            <Button>
              <p>Learn More</p>
              <Image
                src="/arrow-up-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}
