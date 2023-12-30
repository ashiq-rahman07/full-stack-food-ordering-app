import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={""} className="text-primary text-2xl font-semibold">
        ST PIZZA
      </Link>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary text-white px-4 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};
