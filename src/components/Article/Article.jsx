import React from "react";

import defaultNewsImg from "../../assets/defaultNewsImg.jpeg";

const Article = (props) => {
  const {
    id,
    title,
    url,
    source_name: sourceName,
    img_url: imgUrl,
    created,
  } = props.data;

  const validateImageUrl = (url) => {
    // some of the img urls have `width` parameter specified in them, replace it with some value here (TODO fix in api to not deal with it here)
    if (sourceName === "BBC") {
      return url.replace("{width}", "150");
    }
    return url;
  };

  const getDate = (datetime) => {
    return datetime.split("T")[0];
  };
  return (
    <div
      onClick={() => console.log(props.data)}
      className="card w-full md:w-96 bg-base-300 bg-opacity-20 shadow-xl"
    >
      <div className="card-body" data-tip="asdsd">
        <div className="flex flex-row items-center">
          <div className="flex-none avatar w-16 h-16">
            <img
              src={imgUrl ? validateImageUrl(imgUrl) : defaultNewsImg}
              alt="Article image"
              className="rounded-md float-left bg-base-100"
            />
          </div>
          <p className="ml-4 break-words">{title}</p>
        </div>
        <div className="mt-4 py-1 card-actions justify-center">
          <div
            className="tooltip tooltip-bottom tooltip-secondary"
            data-tip={`${getDate(created)} | ${sourceName}`}
          >
            <a
              href={url}
              className="btn btn-secondary btn-outline btn-wide font-bold"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
