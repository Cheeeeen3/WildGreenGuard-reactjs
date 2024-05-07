// import LogoIcon from "./components/NavBar.tsx";
// import axios from 'axios'

function App() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        {/* <LogoIcon /> */}
        {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span> */}
        {/* </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            >
              Plants Database
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            >
              Developers
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
      <body>
        <section>
          <h1 className="flex items-center">Plant Database</h1>
          <div>
            <ul className="flex border-b">
              <li className="-mb-px mr-1">
                <a
                  className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                  href="#"
                >
                  Invasive Plants
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                  href="#"
                >
                  Native Plants
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <ul className="list-none mx-8 my-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <li>
              <a href="#Flossflower">
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
                    alt="Flossflower"
                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-400"
                  />
                  <p>Flossflower</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#Spiny Pigweed">
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                    alt="Spiny Pigweed"
                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-400"
                  />
                  <p>Spiny Pigweed</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#Pilose Beggarticks">
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/green01/plant/Pilose%20Beggarticks.jpg"
                    alt="Pilose Beggarticks"
                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-400"
                  />
                  <p>Pilose Beggarticks</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none mx-auto my-12 flex flex-col items-center gap-4">
            <li id="Flossflower" className="min-w-72 flex flex-row items-center border border-solid border-gray-400 [background-color:#e6ebe0] py-6 px-2 rounded">
              <img
                src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
                alt="Flossflower"
                className="w-60 h-60 rounded-md mx-4"
              />
              <p className="flex flex-col my-10 ml-2">
                <h2 className="text-5xl mb-4">
                  <b>Flossflower</b>
                </h2>
                <h6 className="text-2xl text-slate-500">Invasive Species</h6>
                <br />
                It is an annual plant with a height ranging from 30 to 100 cm.
                The leaves are ovate to triangular-ovate, with a length of 2 to
                7 cm, having a blunt apex and a shallow heart-shaped base. The
                edges of the leaves are serrated. It is distributed in regions
                with an elevation of up to 1,300 m.
              </p>
            </li>
            <li id="Spiny Pigweed" className="min-w-72 flex flex-row items-center border border-solid border-gray-400 bg-lime-100 py-6 px-2 rounded">
              <img
                src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                alt="Spiny Pigweed"
                className="w-60 h-60 rounded-md mx-4"
              />
              <p className="flex flex-col my-10">
                <h2>
                  <b>Spiny Pigweed</b>
                </h2>
                <h6>Native Species</h6>
                <br />
                The plant reaches a height of approximately 30 to 100 cm. The
                flower color is green. It is distributed throughout Taiwan,
                particularly commonly found around cultivated fields.
              </p>
            </li>
            <li id="Pilose Beggarticks" className="min-w-72 flex flex-row items-center border border-solid border-gray-400 bg-lime-100 py-6 px-2 rounded">
              <img
                src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                alt="Pilose Beggarticks"
                className="w-60 h-60 rounded-md mx-4"
              />
              <p className="flex flex-col my-10">
                <h2>
                  <b>Pilose Beggarticks</b>
                </h2>
                <h6>Invasive Species</h6>
                <br />
                The plant reaches a height of 2m, blooms throughout the year,
                and is highly resistant to natural disasters. It is distributed
                in low-altitude areas throughout Taiwan, up to an elevation of
                1,000 m.
              </p>
            </li>
          </ul>
        </div>
      </body>
    </>
  );
}

export default App;
