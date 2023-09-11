import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  // onClick event listener is passed with value of clicked button's title i.e. category value to filterHandler function and its category is updated and UI ris rendered again
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    // for each title in the filterData created a button using map()
    <div className="w-11/12 flex flex-wrap justify-center max-w-max space-x-4 gap-y-4 mx-auto py-4">
      {/* created button after each data title i.e. category of course */}
      {filterData.map((data) => (
        <button
          className={`text-lg px-4 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2  transition-all duration-300
          ${
            category === data.title
              ? "bg-opacity-60 bg-white"
              : "bg-opacity-40 border-transparent"
          }`}
          key={data.id}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
