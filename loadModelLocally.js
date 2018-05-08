import * as THREE from 'three';

export const loadModelLocally = (url, name) => {
  let loader = new THREE.JSONLoader();
  var loadedObject = "";
  return new Promise(function(resolve, reject) {
    loader.load(url, function ( geometry ) {
      if (true) {
        loadedObject = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({
            vertexColors : THREE.FaceColors,
        }));
        resolve({[name]: loadedObject})
      } else {
        reject({[name]: loadedObject})
      }
    })
  })
}
