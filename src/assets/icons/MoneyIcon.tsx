import { Money } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

export const MoneyIcon = () => (
  <Money weight="regular" color={defaultTheme["base-text"]} />
);
