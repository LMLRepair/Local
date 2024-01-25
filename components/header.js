import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex flex-col flex-wrap justify-between content-center items-center bg-yellow-300 sm:flex-row p-5">
      <div>
        <Link href="/">
          <Image
            src="/images/favicon.png"
            alt="logo"
            width={100}
            height={100}
            className="w-44"
          />
        </Link>
      </div>

      <div className="flex gap-3 justify-center ">
        <Link href="/" className="text-xl cursor-pointer hover:underline">
          Home
        </Link>
        {/*
        <Link
          href="/products"
          className="text-xl cursor-pointer hover:underline"
        >
          Products
        </Link>
        
           <Link href="/blog" className="text-xl cursor-pointer hover:underline">
          Blogs
        </Link>
        */}

        <Link
          href="/services"
          className="text-xl cursor-pointer hover:underline"
        >
          Services
        </Link>

        <Link
          href="/contact"
          className="text-xl  cursor-pointer hover:underline"
        >
          Contact
        </Link>
        <Link
          href="/bookings"
          className="text-xl  cursor-pointer hover:underline   "
        >
          Bookings
        </Link>
      </div>
    </header>
  );
}

export default Header;
