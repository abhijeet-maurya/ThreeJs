import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute flex flex-col item-center top-11 left-1/2 -translate-x-1/2">
        <h1 className="multicolor text-7xl tracking-tighter font-[400]">Macbook Pro.</h1>
        <h3 className="text-white text-center">oh.. so pro!</h3>
      </div>
      <div className="w-full h-screen">
        <Canvas camera={{ fov: 16, position: [0, -8, 120] }}>
          <OrbitControls/>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/rural_asphalt_road_4k.hdr",
            ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
