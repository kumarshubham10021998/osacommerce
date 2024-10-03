export const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Flex container for desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Osa Commerce Logo" className="h-8" />
            </div>
            <p className="text-sm">
              About Osa Commerce. Osa is built for the future. We are on a mission
              to tackle the data chaos in the supply chain.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/osa-commerce/"
                className="text-purple-500 hover:text-purple-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zm-46.44-323.77A53.69 53.69 0 11107.53 70 53.64 53.64 0 0153.84 124.23zm394.08 323.76h-92.68V302.4c0-34.74-12.42-58.5-43.44-58.5-23.66 0-37.76 15.92-43.96 31.27-2.26 5.52-2.84 13.2-2.84 20.92v151.9h-92.64V148.9h92.64v40.78h1.32c12.92-20.46 35.7-49.72 86.98-49.72 63.44 0 111.08 41.6 111.08 131.18z"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-purple-500 hover:text-purple-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 256 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27h-27c-14.9 0-27-12.1-27-27v-27c0-14.9 12.1-27 27-27h27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9s-57.6-34.5-92.9-36.2c-36.6-2.1-146.5-2.1-183.1 0-35.3 1.7-66.7 9.9-92.9 36.2s-34.5 57.6-36.2 92.9c-2.1 36.6-2.1 146.5 0 183.1 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c36.6 2.1 146.5 2.1 183.1 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c2.1-36.6 2.1-146.5 0-183.1zm-48.1 224c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-purple-500 hover:text-purple-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.659-24.846-42.243-48.526-48.526C465.131 64 288 64 288 64s-177.131 0-213.129 11.557c-23.66 6.282-42.244 24.867-48.525 48.526C16 160.063 16 256 16 256s0 95.937 10.346 131.917c6.281 23.66 24.865 42.244 48.525 48.526C110.869 448 288 448 288 448s177.131 0 213.129-11.557c23.681-6.281 42.244-24.867 48.526-48.526C560 351.937 560 256 560 256s0-95.937-10.345-131.917zM232 334.4V177.6l142.6 78.4L232 334.4z"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-purple-500 hover:text-purple-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S262.59 0 233.95 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h89.7v224h107.8V288z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Technology Section */}
          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Product Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Osa Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    )
}
