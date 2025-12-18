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
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
  {
    icon: Tablet,
    title: "Tablet",
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
  {
    icon: Laptop,
    title: "Laptops",
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Consoles",
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
  {
    icon: Headset,
    title: "VR Headsets",
    desc: "StreamVibe is designed to present detailed movie and TV show information across different platforms, offering a consistent and accessible browsing experience.",
  },
];

function Devices() {
  return (
    <div className="container-wrapper pb-40" id="devices">
      <LandingTitle
        title="Explore Movies and Shows Across Various Devices."
        subtitle="With StreamVibe, you can explore movies and TV shows anytime, anywhere. The platform is built to work seamlessly across multiple devices, allowing you to browse details, summaries, and related information without limitations."
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
