// LIBRARIES
import Link from "next/link";
// COMPONENTS
import NeffreyLogo from "~/components/svgs/NeffreyLogo";

// MENU
const menuItems = [
  { label: "Link 1", href: "/#" },
  { label: "Link 2", href: "/#" },
  { label: "Link 3", href: "/#" },
];

const NavBar = () => {
  return (
    <div
      // Row Container
      className="flex w-full items-center justify-between border-b-4 border-solid border-neutral-50 bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-3 shadow-xl"
    >
      <div
        // Logo Container
        className="h-12 w-12 cursor-pointer fill-white"
      >
        <NeffreyLogo />
      </div>

      <div className="flex items-center justify-between gap-5 text-lg font-semibold lowercase tracking-widest text-white">
        {menuItems.map((item) => {
          return (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
