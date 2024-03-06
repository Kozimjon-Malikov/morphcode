import React from "react";
import c1 from "../images/card/Rectangle.png";
import c2 from "../images/card/Rectangle-1.png";
import c3 from "../images/card/Rectangle-2.png";
import c4 from "../images/card/Rectangle-3.png";
import c5 from "../images/card/Rectangle-4.png";
import c6 from "../images/card/Rectangle-5.png";
const Blogs = () => {
  return (
    <>
      <section className="blogs">
        <h2 className="text-3xl text-stone-700 font-bold my-4">
          From the blog
        </h2>
        <div className="flex flex-wrap">
          <div className="card w-full sm:w-1/2 md:w-1/3">
            <div className="card__img">
              <img src={c1} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
                The power of <br /> interactive tools
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
                Tools augment our problem-solving capacity. We rely on them to
                expand our minds and provide ease, accuracy, and [...]
              </p>
            </div>
          </div>
          {/* c-1  */}
          <div className="card w-full sm:w-1/2 md:w-1/3 ">
            <div className="card__img">
              <img src={c2} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
              The making of <br /> Morphocode Explorer
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
              Over the last year, we’ve been working on a new web tool for interactive data exploration [...]
              </p>
            </div>
          </div>
          {/* c-3  */}
          <div className="card w-full sm:w-1/2 md:w-1/3 ">
            <div className="card__img">
              <img src={c3} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
              Urban performance measures
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
              Urban performance measures help communities make informed decisions and measure results against goals. [...]
              </p>
            </div>
          </div>
          {/* c-4  */}
          <div className="card w-full sm:w-1/2 md:w-1/3 ">
            <div className="card__img">
              <img src={c4} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
              The 5-minute walk
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
              The five-minute walk, also known as the “pedestrian shed” is considered to be the distance people are willing [...]
              </p>
            </div>
          </div>
          {/* c-5  */}
          <div className="card w-full sm:w-1/2 md:w-1/3 ">
            <div className="card__img">
              <img src={c5} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
              Location + time: urban data visualization
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
              The most common ways to visually organize information are based on location and time. In this interactive story, [...]
              </p>
            </div>
          </div>
          {/* c-6  */}
          <div className="card w-full sm:w-1/2 md:w-1/3 ">
            <div className="card__img">
              <img src={c6} alt="img" />
            </div>
            <div className="flex flex-col bg-white relative -top-10  items-start w-full sm:w-7/12 left-0 sm:left-5 rounded-xl">
              <h2 className="font-bold text-stone-700  text-2xl p-3">
              Morphocode in the Best American Infographics
              </h2>
              <hr className="w-14 h-1 bg-stone-200 rounded-2xl my-4" />
              <p>
              We are extremely happy to be included in The Best American Infographics. The third volume in the series [...]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
