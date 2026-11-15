"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/firstTouch";

/**
 * Records where the visitor came from (utm_source and the referring site) on
 * their first page view. Lives in the root layout, which stays mounted across
 * client-side navigation, so this runs once per full page load. Renders nothing.
 */
export function FirstTouch() {
  useEffect(() => captureFirstTouch(), []);
  return null;
}
