import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Car() {
  const model = useLoader(GLTFLoader, "./models/lambo/scene.gltf");
  console.log(model);
  return <primitive object={model.scene} position-y={2} />;
}
