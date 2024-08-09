"use client";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "./locomotive-scroll.css";

export default function Business() {
/*  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);*/
  return (
      <div data-scroll-container>
        <div data-scroll-section>
          <h1 data-scroll>Hey adpfgjpeohgrjpnsadvpuerhp</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            Whats up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
  );
}
