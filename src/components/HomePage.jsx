import React from 'react'

function HomePage() {
  return (
    <div className="first">
        <header className="flex absolute inset-x-0 -top-2">
          <nav aria-label="Rubik" className="flex items-center justify-between">
            <img alt="" src="src/assets/Asset 1.png" className="pt-2" />
            <img
              src="src/assets/logo-1 1.png"
              className="w-56 h-24 top-3 left-36"
              alt="Logo"
            />
            <div className="flex lg:ml-96 lg:mr-6 lg:space-x-28 z-10">
              <a
                href="#About us"
                className="text-gray-600 hover:text-gray-900 font-rubik "
              >
                <button>About us</button>
              </a>
              <a href="#Service" className="text-gray-600 hover:text-gray-900 font-rubik ">
                Service
              </a>
              <a href="#Teams" className="text-gray-600 hover:text-gray-900 font-rubik ">
                Team
              </a>
              <a href="#Clients" className="text-gray-600 hover:text-gray-900 font-rubik ">
                Clients
              </a>
              <a
                href="#Contact us"
                className="text-gray-600 hover:text-gray-900 font-rubik "
              >
                Contact us
              </a>
            </div>
          </nav>
          <img
            src="src/assets/Asset 2.png"
            className=" absolute inset-y-0  right-0"
            alt=""
          />
        </header>

        <img
          className=" absolute bottom-0 left-32"
          src="src\assets\Vector Smart Object21 1.png"
          alt=""
        />
        <img
          className=" absolute bottom-0 -z-10 "
          src="src\assets\Graphic 1.png"
          alt=""
        />
        <img
          src="src/assets/Assets 3.png"
          className="absolute bottom-0 left-0 w-52 h-2/3 "
          alt=""
        />
        <img
          src="src/assets/Assets 4.png"
          className="absolute bottom-0 right-0 h-48 "
          alt=""
        />
        <text className="absolute text-start text-4xl font-bold right-96 pt-64 font-rubik ">
          Mendleson <br />
          Communication <br />
          and Engagement
        </text>
        <text className="absolute text-start right-72 pt-96 font-rubik ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Malesuada sed ipsum, ut quam volutpat, tortor.
        </text>
      </div>
  )
}

export default HomePage