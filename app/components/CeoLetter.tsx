import Image from "next/image";

export default function CeoLetter() {
  const perks = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section>
      <main>
        <div>
          <h6>Learning With Our CEO:</h6>

          <h2>Transformation Hub With Jite Newton</h2>
        </div>

        <p>
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <div>
          <Image src="/ceo-learning.png" alt="CEO Letter" width={100} height={100} />

          <div>
            {perks.map((perk) => (
              <p key={perk}>{perk}</p>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
