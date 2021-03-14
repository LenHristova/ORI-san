export interface IGearWheelImageProps {
  size: number;
  direction: "left" | "right";
  uniteTitle: string;
  unit: string;
  rotate?: number;
  onPress?: () => void;
}
