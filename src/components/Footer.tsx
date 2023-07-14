// LIBRARIES
import Link from "next/link";
// COMPONENTS
import NeffreyLogo from "~/components/svgs/NeffreyLogo";

// MENU
const menuItems = [
  { title: "Link 1", link: "/#" },
  { title: "Link 2", link: "/#" },
  { title: "Link 3", link: "/#" },
];

const Footer = () => {
  return (
    <div
      // Row Container
      className="flex w-full items-center justify-between border-t-4 border-solid border-neutral-50 bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-3 shadow-xl"
    >
      <h3 className="text-lg font-semibold lowercase tracking-widest text-white text-center w-full">
        Made with love by{" "}
        <Link
          href="https://neffrey.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neffrey
        </Link>
      </h3>
    </div>
  );
};

export default Footer;
