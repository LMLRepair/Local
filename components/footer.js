import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50  shadow px-5 md:px-16   ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="/images/favicon.png" className="h-8" alt="lml Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  home
                </Link>
              </li>
              <li>
                <Link href="products" className="hover:underline me-4 md:me-6">
                  products
                </Link>
              </li>
              <li>
                <Link href="services" className="hover:underline me-4 md:me-6">
                  services
                </Link>
              </li>
              <li>
                <Link href="contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="bookings" className="hover:underline me-4 md:me-6">
                  bookings
                </Link>
              </li>
              <li>
                <Link href="policy" className="hover:underline me-4 md:me-6">
                  policy
                </Link>
              </li>
              <li>
                <Link href="referrals" className="hover:underline me-4 md:me-6">
                  referrals
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-600 sm:text-center dark:text-gray-600">
            © 2024
            <a href="/" className=" ml-2 mr-2 hover:underline">
              LML Repair
            </a>
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
