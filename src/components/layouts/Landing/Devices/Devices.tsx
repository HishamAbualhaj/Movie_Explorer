import React from "react";

import {
  Smartphone,
  Tablet,
  Tv,
  Laptop,
  Gamepad2,
  Headset,
} from "lucide-react";
import LandingTitle from "@/components/ui/LandingTitle";

const devices = [
  {
    icon: Smartphone,
    title: "Smartphones",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: Tablet,
    title: "Tablet",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: Tv,
    title: "Smart TV",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: Laptop,
    title: "Laptops",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: Gamepad2,
    title: "Gaming Consoles",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: Headset,
    title: "VR Headsets",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

function Devices() {
  return (
    <div className="container-wrapper pb-40">
      <LandingTitle
        title="We Provide you streaming experience across various devices."
        subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {devices.map((device, i) => (
          <div
            key={i}
            style={{
              background:
                "linear-gradient(35deg,rgba(229, 0, 0, 0) 55%, rgba(224, 0, 0, 0.09) 100%)",
            }}
            className="border border-bg-light p-6 rounded-lg bg-[#0F0F0F]"
          >
            <div className="flex items-center gap-3">
              <div className="text-primary bg-bg-light p-3 rounded-lg border border-bg-light">
                {<device.icon />}
              </div>
              <div className="font-medium text-white text-2xl">
                {device.title}
              </div>
            </div>
            <div className="mt-5 text-text-muted">{device.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Devices;
