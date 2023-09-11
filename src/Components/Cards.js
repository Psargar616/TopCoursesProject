import React, { useCallback, useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  // to make individual card for each course we need all courses in one single array
  // console.log(courses)

  // initially all courses will be unliked
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

      console.log(allCourses);
      return allCourses;
    }else{
      // only send single array of courses belonging to specific category such as "development" , "business" etc is passed
      console.log(courses[category]);
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 transition-all duration-300">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
