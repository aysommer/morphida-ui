import type { ColorScheme } from "./types";
import { BACKGROUND_COLORS, FONT_COLORS } from "./consts";

/**
 * Returns background color by color scheme.
 * @param colorScheme Color scheme.
 */
export function getBackgroundColor(colorScheme: ColorScheme = "gray"): string {
   return BACKGROUND_COLORS[colorScheme];
}

/**
 * Returns font color by color scheme.
 * @param colorScheme Color scheme.
 */
export function getFontColor(colorScheme: ColorScheme = "gray"): string {
   if (colorScheme === "gray") {
      return FONT_COLORS["black"];
   }
   return FONT_COLORS["white"];
}
