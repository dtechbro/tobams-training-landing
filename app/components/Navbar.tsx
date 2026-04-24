import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/", dropdown: true },
    { name: "What we do", href: "#", dropdown: true },
    { name: "Jobs", href: "#", dropdown: true },
    { name: "Projects", href: "#" },
    { name: "TG Academy", href: "#" },
    { name: "Strategic Partnership", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Book a Consultation", href: "#" },
  ];

  return (
    <section>
      <main>
        <div className="max-w-[1312px] mx-auto px-4 flex justify-between items-center">
          <Image src={"/logo.svg"} alt="Logo" width={100} height={100} />

          <div className="flex gap-4">
            <Button>
              <Image src={"/user.svg"} alt="User" width={24} height={24} />
              <p>Account</p>
            </Button>

            <Button className="bg-secondary">Take Assessment</Button>
          </div>
        </div>

        <hr className="border-gray-500" />

        <nav className="max-w-[1312px] mx-auto px-4 flex items-center justify-center gap-3 p-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex gap-1 items-center"
            >
              {link.name}{" "}
              {link.dropdown && (
                <Image
                  src={"/arrow-down.svg"}
                  alt="Arrow Down"
                  width={16}
                  height={16}
                />
              )}
            </Link>
          ))}
        </nav>
      </main>
    </section>
  );
}
