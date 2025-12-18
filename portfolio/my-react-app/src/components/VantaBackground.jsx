import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET.default({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        color: 0x7c3aed,
        backgroundColor: 0x000000,
        points: 8,
        maxDistance: 18,
        spacing: 15,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-20" />
      <div className="fixed inset-0 bg-black/60 -z-10" />
    </>
  );
}
