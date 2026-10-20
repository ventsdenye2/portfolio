interface TechToolIcon {
  src: string;
  monochrome?: boolean;
}

export const techToolIcons: Readonly<Record<string, TechToolIcon>> = {
  Unity: { src: "/content-media/tech-icons/unity.svg", monochrome: true },
  "Unreal Engine": { src: "/content-media/tech-icons/unrealengine.svg", monochrome: true },
  Blender: { src: "/content-media/tech-icons/blender.svg" },
  SolidWorks: { src: "/content-media/tech-icons/solidworks.png" },
  Godot: { src: "/content-media/tech-icons/godot.svg" },
};
