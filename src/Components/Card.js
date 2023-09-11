import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // pehele se hi like hua hai course 'likedCourses' array me to abhi use remove karte hai

      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // added clicked courses id to the liked courses list
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Succesfully");
    }
  }
  return (
    
    <div className="w-[350px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden relative">
      <div className=" object-cover relative ">
       
        <img src={course.image.url} />

        <div
          className="absolute w-[40px] h-[40px] bg-white rounded-full right-[3%] bottom-[-9%] grid place-items-center"
        >
          {/* link btn */}
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-white font-bold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 200) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
