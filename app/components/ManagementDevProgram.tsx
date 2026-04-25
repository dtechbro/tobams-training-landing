import Image from "next/image";

export default function ManagementDevProgram() {
  const programBenefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="py-16 px-6">
      <main className="section flex flex-col lg:flex-row lg:items-center lg:justify-center bg-primary p-4 lg:p-10 rounded-[20px] text-white gap-5 lg:gap-12">
        <h2 className="headings lg:hidden text-[16px]">
          Management Development Program
        </h2>

        <Image
          src="/mgt-dev-program.png"
          alt="image-for-mgt-training"
          width={500}
          height={500}
          className="w-full lg:w-[592px]"
        />

        <div className="flex flex-col gap-4 lg:w-[592px]">
          <h2 className="headings hidden lg:block">
            Management Development Program
          </h2>

          <p className="">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive. <br /> <br /> Our program includes
            workshops, seminars, coaching sessions, online courses, and
            experiential learning opportunities designed to improve leadership,
            strategic thinking, communication, and other essential managerial
            competencies for corporate organisations.
          </p>

          <ul className="py-2 lg:px-4 flex flex-col gap-6">
            {programBenefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-[#8F6182] py-1 px-2 rounded-lg"
              >
                <Image
                  src="white-bolt.svg"
                  alt="blazing"
                  width={18}
                  height={24}
                />
                <p className="font-normal lg:font-semibold">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
