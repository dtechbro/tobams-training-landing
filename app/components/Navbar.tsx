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
        <div className="max-w-[1312px] mx-auto px-4 flex justify-between items-center py-6">
          <Image src={"/logo.svg"} alt="Logo" width={165} height={64} />

          <div className="hidden lg:flex gap-4">
            <Button>
              <Image src={"/user.svg"} alt="User" width={24} height={24} />
              
              <span className="flex gap-1">
                <p>Account</p>
                <Image
                  src={"/arrow-down.svg"}
                  alt="Arrow Down"
                  width={16}
                  height={16}
                  color="white"
                />
              </span>
            </Button>

            <Button className="bg-secondary">Take Assessment</Button>
          </div>

          <Image
            src={"menu.svg"}
            alt="menu-icon"
            width={32}
            height={32}
            className="lg:hidden"
          />
        </div>

        <hr className="border border-black/10 hidden lg:block" />

        <nav className="max-w-[1312px] mx-auto px-4 hidden lg:flex items-center justify-center gap-8 py-5 ">
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
