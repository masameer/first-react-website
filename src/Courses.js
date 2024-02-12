                                                                                                                         import React, { useState } from "react";import Card from "./Card";
import Sdata from "./Sdata";

const Courses = ({ searchTerm }) => {
  const [filteredData, setFilteredData] = useState(Sdata);

  // Update courses when the search term changes
  React.useEffect(() => {
    const filteredCourses = Sdata.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCourses);
  }, [searchTerm]);

  return (
    <>
      <h1 className="heading_style"> Most Learned Courses </h1>
      {filteredData.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            subtitle={val.subtitle}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default Courses;