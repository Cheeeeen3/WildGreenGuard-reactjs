import React from "react";

const Chatbox: React.FC = () => {
  return (
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
  );
};

export default Chatbox;
