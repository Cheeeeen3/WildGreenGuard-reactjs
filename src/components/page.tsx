<div className="relative ml-3">
  <div onClick={handleClick}>
    <button
      type="button"
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      aria-expanded={`${animation === "animate-open-menu" ? "true" : "false"}`}
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="user-icon"
      />
    </button>
  </div>

  <div
    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${animation}`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabIndex={-1}
  >
    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-0"
    >
      Your Profile
    </a>
    <hr />
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-1"
    >
      Settings
    </a>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-2"
    >
      Sign out
    </a>
  </div>
</div>;

<label className="swap">
  <input type="checkbox" />
  <div className="swap-on" onClick={handleClick}>
    ON
  </div>
  <div className="swap-off" onClick={handleClick}>
    OFF
  </div>
</label>;

<div className="drawer mx-auto flex flex-col px-4 py-4 sm:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <span className="mx-4 text-left text-2xl font-bold text-indigo-600">
    Dashboard
  </span>
  <label
    htmlFor="my-drawer-3"
    aria-label="open sidebar"
    className="btn btn-square btn-ghost"
  >
    history
  </label>
  <hr className="my-4" />

  <div className="flex flex-row gap-4 sm:divide-x">
    {/* history component */}
    <div className="drawer-side hidden w-60 grow-0 space-y-4 px-2 sm:flex sm:flex-col">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <span className="text-center text-xl font-semibold text-indigo-500">
        History
      </span>
      <button className="rounded-md bg-gray-200 hover:outline-blue-500 hover:ring-2 hover:ring-offset-1">
        {/* <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
                alt="Flossflower"
                className="size-8 rounded-full"
              />
              <span className="px-4">Flossflower</span>
            </div>
            <div className="absolute mt-1 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
              <div className="flex cursor-pointer items-center px-2 py-2 hover:bg-indigo-100">
                <img
                  src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
                  alt="Flossflower"
                  className="mr-2 h-8 w-8 rounded-full"
                />
                Flossflower
              </div>
            </div> */}
      </button>
      {/* <input type="text" className="rounded-md bg-gray-200 hover:ring-2 hover:outline-blue-500 hover:ring-offset-1" /> */}
      <figure className="flex flex-row space-x-1 rounded-md bg-slate-200 hover:bg-indigo-300">
        <img
          src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
          alt="Flossflower"
          className="order-1 size-14 rounded-lg"
        />
        <figcaption className="order-2 flex flex-col space-y-1 px-6">
          <h4>Flossflower</h4>
          <i className="text-sm">2024-06-06</i>
        </figcaption>
      </figure>
    </div>
    {/* chat component */}
    <div className="flex h-dvh grow flex-col flex-nowrap px-2">
      <div className="flex h-5/6 w-auto flex-col space-y-4 rounded-lg border-2 border-solid bg-indigo-50 px-2 pt-2 shadow-md">
        <div className="chat-message">
          <div className="flex items-end">
            <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
              <div>
                <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                  Thanks for your message David. I thought I'm alone with this
                  issue. Please, ? the issue to support it :)
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-1 h-6 w-6 rounded-full"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
              <div>
                <span className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white">
                  Run this command sudo chown -R `whoami` /Users/
                  your_user_profile /.npm-global/ then install the package
                  globally without using sudo
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="order-2 h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 my-4 flex justify-around space-x-2">
        <button className="h-12 w-1/3 rounded-md bg-slate-300 text-lg outline outline-1 hover:bg-indigo-700 hover:text-white hover:outline-2 hover:outline-offset-2 hover:outline-cyan-500">
          How To Use
        </button>
        <button className="h-12 w-1/3 rounded-md bg-slate-300 text-lg outline outline-1 hover:bg-lime-700 hover:text-white hover:outline-2 hover:outline-offset-2 hover:outline-green-500">
          Predict Image
        </button>
      </div>
    </div>
  </div>
</div>;

<div className="flex h-dvh grow flex-col flex-nowrap px-2">
  <div className="flex h-5/6 w-auto flex-col space-y-4 rounded-lg border-2 border-solid bg-indigo-50 px-2 pt-2 shadow-md">
    <div className="chat-message">
      <div className="flex items-end">
        <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
          <div>
            <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
              Thanks for your message David. I thought I'm alone with this
              issue. Please, ? the issue to support it :)
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="order-1 h-6 w-6 rounded-full"
        />
      </div>
    </div>
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
          <div>
            <span className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white">
              Are you using sudo?
            </span>
          </div>
          <div>
            <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white">
              Run this command sudo chown -R `whoami` /Users/ your_user_profile
              /.npm-global/ then install the package globally without using sudo
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="order-2 h-6 w-6 rounded-full"
        />
      </div>
    </div>
  </div>
  <div className="mx-4 my-4 flex justify-around space-x-2">
    <button className="h-12 w-1/3 rounded-md bg-slate-300 text-lg outline outline-1 hover:bg-indigo-700 hover:text-white hover:outline-2 hover:outline-offset-2 hover:outline-cyan-500">
      How To Use
    </button>
    <button className="h-12 w-1/3 rounded-md bg-slate-300 text-lg outline outline-1 hover:bg-lime-700 hover:text-white hover:outline-2 hover:outline-offset-2 hover:outline-green-500">
      Predict Image
    </button>
  </div>
</div>;
