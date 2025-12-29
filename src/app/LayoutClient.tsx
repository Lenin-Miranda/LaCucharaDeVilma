"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function LayoutClient() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return null;
}
