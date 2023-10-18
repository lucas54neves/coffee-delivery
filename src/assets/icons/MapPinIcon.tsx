import { MapPin, MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

export const MapPinIcon = (type: "fill" | "line" = "fill") =>
  type === "fill" ? (
    <MapPin weight="fill" color={defaultTheme["base-text"]} />
  ) : (
    <MapPinLine weight="thin" color={defaultTheme["base-text"]} />
  );
