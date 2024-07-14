import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-4 px-16 py-16 sm:flex-row">
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
      </div>
      <div className="mt-5 block px-16 text-center text-xl [background-color:#e6ebe0] sm:text-3xl">
        It is a website designed to identify invasive plant species in Taiwan,
        featuring a Line Bot platform. It supports Chinese, English, and
        Japanese and provides a user-friendly experience. The “Plant Database”
        lists plant species that can be identified by WildGreenGuard. For any
        inquiries, please refer to the “FAQ” section.
      </div>
    </>
  );
};

export default Home;
