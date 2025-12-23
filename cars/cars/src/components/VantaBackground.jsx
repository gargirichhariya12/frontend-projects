import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,

      color: 0xa855f7,
      backgroundColor: 0x000000,
      
      points: 12.0,
      maxDistance: 18.0,
      spacing: 15.0,
      showDots: false,
    });

    return () => effect.destroy();
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      style={{
        filter: 'hue-rotate(250deg) saturate(2)',
        
      }}
    />
  );
}