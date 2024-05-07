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
        <div>
          <h1>Plant Database</h1>
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
        <div>
          <ul>
              <li>
                <img
                  src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                  alt="Spiny Pigweed"
                />
                <a href="#SpinyPigweed">Spiny Pigweed</a>
              </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img
                src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                alt="Spiny Pigweed"
              />
              <p>
                <h3><b>Pilose Beggarticks</b></h3>
                Native Species
                <br />
                The plant reaches a height of approximately 30 to 100 cm. The
                flower color is green. It is distributed throughout Taiwan,
                particularly commonly found around cultivated fields.
              </p>
            </li>
            <li>
              <img
                src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                alt="Spiny Pigweed"
              />
              <p>
                <h3><b>Pilose Beggarticks</b></h3>
                Native Species
                <br />
                The plant reaches a height of approximately 30 to 100 cm. The
                flower color is green. It is distributed throughout Taiwan,
                particularly commonly found around cultivated fields.
              </p>
            </li>
            <li>
              <img
                src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                alt="Spiny Pigweed"
              />
              <p>
                <h3 id="SpinyPigweed"><b>Pilose Beggarticks</b></h3>
                Native Species
                <br />
                The plant reaches a height of approximately 30 to 100 cm. The
                flower color is green. It is distributed throughout Taiwan,
                particularly commonly found around cultivated fields.
              </p>
            </li>
          </ul>
        </div>
      </body>
    </>
  );
}

export default App;
