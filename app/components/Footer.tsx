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
        <div className="section flex justify-between items-center py-10">
          <div>
            <p>Ready to be a part of something extraordinary?</p>

            <p className="font-semibold text-[32px]">
              Let&apos;s work together to create a difference.
            </p>
          </div>

          <Button>Get in Touch</Button>
        </div>
      </div>

      <footer className="bg-[#11040E] py-8 ">
        <main className="section flex flex-col gap-10">
          <div className="flex gap-32">
            <div className="flex gap-6 flex-col">
              <Image
                src={"/logo.svg"}
                alt="tobams-logo"
                width={188}
                height={100}
              />

              <div>
                <p className="text-[16px] text-[#F8F8F8]">
                  Tobams Group is an innovative consultancy firm reshaping the
                  future of tech talent development in Africa, specializing in
                  talent acquisition, internships, and skill development with a
                  global perspective.
                </p>

                <div>
                  <Link href="/">Home</Link>
                </div>
              </div>
            </div>

            <nav className="flex gap-20">
              {footerNav.map((nav) => (
                <div key={nav.heading} className="flex flex-col gap-4">
                  <h3 className="font-bold text-[20px]">{nav.heading}</h3>
                  <ul>
                    {nav.navigations.map((navItem) => (
                      <li key={navItem}>
                        <Link href="#" className="text-[16px] text-nowrap">
                          {navItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex bg-[#FFFFFF0F] p-6 rounded-lg gap-6">
            <div>
              <h3 className="text-[20px] font-bold">Registered Offices</h3>

              <div className="flex gap-6 text-[16px] text-wrap">
                <div>
                  <h4 className="font-semibold text-secondary">
                    United Kingdom
                  </h4>
                  <p>
                    07451196 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                <Image
                  src={"/line.svg"}
                  alt="line-icon"
                  width={2}
                  height={10}
                  className="h-fit"
                />

                <div>
                  <h4 className="font-semibold text-secondary">Nigeria</h4>
                  <p>
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
              width={2}
              height={10}
              className="h-fit"
            />

            <div>
              <h3 className="text-[20px] font-bold">Contact Information</h3>

              <div className="text-[16px]">
                <span className="flex gap-1.5 items-center">
                  <Image src="/email.svg" alt="email" width={20} height={20} />
                  <p>theteam@tobamsgroup.com</p>
                </span>

                <span className="flex gap-1.5 items-center">
                  <Image src="/phone.svg" alt="phone" width={20} height={20} />
                  <p>+447886600748</p>
                </span>
              </div>
            </div>
          </div>

          <hr />

          {/* footer base containing copyright and policies  */}
          <div className="flex justify-between">
            <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookies Policy</Link>
            </div>
          </div>
        </main>
      </footer>
    </section>
  );
}
