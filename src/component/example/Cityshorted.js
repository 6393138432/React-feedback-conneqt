import React from "react";

const Cityshorted = () => {
  const cities = ["Pune", "Ahmedabad", "Rajkot", "Mumbai", "Delhi", "Kanpur"];

  // Step 1: Reverse the array
  const reversedCities = [...cities].reverse();

  // Step 2: Split into chunks
  const groupedCities = reversedCities.reduce((pro, city, index) => {
    if (index === 0) {
      pro.push([city]); // First chunk with 1 element
    } 
    else if (index <= 2) {
      pro[1] = pro[1] || []; 
      // Initialize second chunk
      pro[1].push(city);
    } 
    else {
      pro[2] = pro[2] || []; // Initialize third chunk
      pro[2].push(city);
    }
    return pro;
  }, []);

  return (
    <div>
      <h2> Cities</h2>
      <div>
        {groupedCities.map((group, i) => (
          <div key={i}>
            {JSON.stringify(group)}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Cityshorted;
