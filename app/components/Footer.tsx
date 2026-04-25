import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  const footerNav = [
    {
      heading: "What we do",
      navigations: [
        "Sustainability Services",
        "Strategy Planning and Implementation",
        "Tech Talent Solutions",
        "Training and Development",
        "IT Consulting Services",
        "Social Impact",
        "Talent Recruitment",
      ],
    },
    {
      heading: "Company",
      navigations: [
        "About",
        "Jobs",
        "Projects",
        "Our Founder",
        "Business Model",
        "The Team",
        "Contact Us",
        "Blog",
        "FAQs",
        "Testimonials",
      ],
    },
    {
      heading: "Solutions",
      navigations: [
        "Tobams Group Academy",
        "Help a Tech Talent",
        "Campus Ambassadors Program",
        "Join Our Platform",
        "Pricing",
        "Book a Consultation",
        "Join Our Slack Community",
      ],
    },
  ];

  return (
    <section className="text-white">
      <div className=" bg-[#1D0617]">
        <div className="section flex flex-col lg:flex-row gap-6 justify-between lg:items-center p-6 lg:py-10">
          <div className="flex flex-col gap-4">
            <p>Ready to be a part of something extraordinary?</p>

            <p className="font-semibold text-[20px] lg:text-[32px]">
              Let&apos;s work together to create a difference.
            </p>
          </div>

          <Button>Get in Touch</Button>
        </div>
      </div>

      <footer className="bg-[#11040E] py-8 ">
        <main className="section flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-32">
            <div className="flex gap-6 flex-col">
              <Image
                src={"/logo.svg"}
                alt="tobams-logo"
                width={188}
                height={100}
              />

              <p className="text-[16px] text-[#F8F8F8]">
                Tobams Group is an innovative consultancy firm reshaping the
                future of tech talent development in Africa, specializing in
                talent acquisition, internships, and skill development with a
                global perspective.
              </p>

              {/* div for social icons */}
              <div className="flex gap-5">
                <Link href="/">
                  <Image
                    src={"/linkedin.svg"}
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href="/">
                  <Image
                    src={"/instagram.svg"}
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    src={"/twitter-x.svg"}
                    alt="twitter-x"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>

            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-20">
              {footerNav.map((nav) => (
                <div key={nav.heading} className="flex flex-col gap-4">
                  <h3 className="font-bold text-lg lg:text-[20px]">
                    {nav.heading}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {nav.navigations.map((navItem) => (
                      <li key={navItem}>
                        <Link
                          href="#"
                          className="text-sm lg:text-[16px] text-nowrap"
                        >
                          {navItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-around bg-[#FFFFFF0F] p-4 lg:p-6 rounded-lg gap-6 h-fit">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg lg:text-[20px] font-bold">
                Registered Offices
              </h3>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-wrap">
                <div>
                  <h4 className="font-semibold text-secondary text-sm lg:text-[16px]">
                    United Kingdom
                  </h4>
                  <p className="text-[16px]">
                    07451196 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                <Image
                  src={"/s-line.svg"}
                  alt="s-line-icon"
                  width={1}
                  height={76}
                  className="h-[76px] w-auto hidden lg:block"
                />

                <div>
                  <h4 className="font-semibold text-secondary text-sm lg:text-[16px]">
                    Nigeria
                  </h4>
                  <p className="text-[16px]">
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                    <br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={"/line.svg"}
              alt="line-icon"
              width={1}
              height={133}
              className="h-full hidden lg:block"
            />

            <div className="flex flex-col gap-4 lg:mr-6">
              <h3 className="text-[20px] font-bold">Contact Information</h3>

              <div className="text-[16px] flex flex-col gap-2.5">
                <span className="flex gap-4 items-center">
                  <Image src="/email.svg" alt="email" width={20} height={20} />
                  <p>theteam@tobamsgroup.com</p>
                </span>

                <span className="flex gap-4 items-center">
                  <Image src="/phone.svg" alt="phone" width={20} height={20} />
                  <p>+447886600748</p>
                </span>
              </div>
            </div>
          </div>

          <hr />

          {/* footer base containing copyright and policies  */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-3">
            <p className="font-light">
              Copyright ⓒ Tobams Group, 2024. All rights reserved.
            </p>

            <div className="flex justify-around flex-wrap gap-6">
              <Link href="#" className="underline font-light">
                Terms and Conditions
              </Link>
              <Link href="#" className="underline font-light">
                Privacy Policy
              </Link>
              <Link href="#" className="underline font-light">
                Cookies Policy
              </Link>
            </div>
          </div>
        </main>
      </footer>
    </section>
  );
}
