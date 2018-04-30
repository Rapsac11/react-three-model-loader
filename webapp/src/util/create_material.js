// simple method that parses a Threejs material into a component (to be extended with other types of material)
import React from 'react';

export default function createMaterial(material){
  let m;
  switch(material.type){
    case 'MeshBasicMaterial':
      m = (
        <meshBasicMaterial
          color={material.color}
        />
      );
      break;
    case 'MeshLambertMaterial':
      m = (
        <meshLambertMaterial
          transparent={material.transparent}
          alphaTest={material.alphaTest}
          side={material.side}
          opacity={material.opacity}
          visible={material.visible}
          color={material.color}
          emissive={material.emissive}
          wireframe={material.wireframe}
          wireframeLinewidth={material.wireframeLinewidth}
        />
      );
      break;
    default:
      m = null;
  }

  return m;
}
