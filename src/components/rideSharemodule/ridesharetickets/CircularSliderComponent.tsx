"use client"; // Ensures it runs on the client side in Next.js

import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const CircularSliderComponent = () => {
  const [value, setValue] = useState(1); // Default to 1 month

  const handleChange = (newValue) => {
    if (newValue + 1 <= 12) {
      setValue(newValue + 1); // Adjust for 1-based value
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-4 font-semibold">When’s your trip?</h1>

      <CircularSlider
        label="Months"
        min={1}
        max={12}
        labelColor="#005a58"
        labelBottom={true}
        knobColor="#ff005a"
        knobSize={50}
        progressColorFrom="#ff0066"
        progressColorTo="#ff99aa"
        progressSize={18}
        trackColor="#eeeeee"
        trackSize={10}
        // trackDraggable={false}
        onChange={handleChange} // Prevent exceeding max value
      />

      <p className="mt-4 text-lg font-semibold">
        Selected Duration: <span className="text-blue-600">{value} Months</span>
      </p>
    </div>
  );
};

export default CircularSliderComponent;