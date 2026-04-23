import Image from "next/image";
import Link from "next/link";

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
  ];

  return (
    <section>
      <div>
        <div>
          <p>Ready to be a part of something extraordinary?</p>

          <p>Let&apos;s work together to create a difference</p>
        </div>

        <Link href={"#"}>Get in Touch</Link>
      </div>

      <footer className="">
        <div>
          <div>
            <Image
              src={"/logo.svg"}
              alt="tobams-logo"
              width={100}
              height={100}
            />

            <div>
              <p>
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

          <nav>
            {footerNav.map((nav) => (
              <div key={nav.heading}>
                <h3>{nav.heading}</h3>
                <ul>
                  {nav.navigations.map((navItem) => (
                    <li key={navItem}>{navItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div>
          <div>
            <h3>Registered Offices</h3>

            <div>
              <div>
                <h4>United Kingdom</h4>
                <p>
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>

              <div>
                <h4>Nigeria</h4>
                <p>
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3>Contact Information</h3>

            <div>
              <span>
                <Image src="/email.svg" alt="email" width={20} height={20} />
                <p>theteam@tobamsgroup.com</p>
              </span>

              <span>
                <Image src="/phone.svg" alt="phone" width={20} height={20} />
                <p>+447886600748</p>
              </span>
            </div>
          </div>
        </div>

        <hr />

        {/* footer base containing copyright and policies  */}
        <div>
          <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>

          <div>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookies Policy</Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
