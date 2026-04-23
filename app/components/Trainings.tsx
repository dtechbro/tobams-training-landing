import Image from "next/image";

export default function Trainings() {
  const corporateTraining = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ];

  const individualTraining = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ];

  const capacityDevelopment = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ];

  return (
    <section>
      <main>
        {/* division for corporate training */}
        <div>
          <Image
            src="/corporate-training.png"
            alt="Corporate Training"
            width={100}
            height={100}
          />

          <div>
            <h2>Corporate Training</h2>
            <p>
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <ul>
              {corporateTraining.map((training) => (
                <li key={training}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={24}
                    height={24}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* division for personal training */}
        <div>
          <Image
            src="/individual-training.png"
            alt="Individual Training"
            width={100}
            height={100}
          />

          <div>
            <h2>Personalised Individual Training</h2>
            <p>
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>
            <ul>
              {individualTraining.map((training) => (
                <li key={training}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={24}
                    height={24}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* division for capacity development */}
        <div>
          <Image
            src="/capacity-development.png"
            alt="Capacity Development"
            width={100}
            height={100}
          />

          <div>
            <h2>Capacity Development</h2>
            <p>
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul>
              {capacityDevelopment.map((training) => (
                <li key={training}>
                  <Image
                    src={"/blazing.svg"}
                    alt="list-icon"
                    width={24}
                    height={24}
                  />
                  <p>{training}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </main>
    </section>
  );
}
