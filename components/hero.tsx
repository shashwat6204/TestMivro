"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import Mivro from "@/components/ui/mivro.svg";
import Image from "next/image";
import heroImage from "../public/images/downloadmivro.png";
import Logo from "@/public/images/analysis.png"; // Adjust the path as needed

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
    {theme === "dark" ? (
  <Image
    src={Logo}
    width={40}
    alt="PearAI Logo"
    className="mb-4 mr-2 inline-flex"
  />
) : (
  <Image
    src={Logo}
    width={40}
    alt="PearAI Logo"
    className="mb-4 mr-2 inline-flex"
  />
)}
      <span className="text-primary-700">Mivro: </span>
      Scan It. Know It.
    </div>

    <div className="block items-start sm:hidden">
      <div>
        {theme === "dark" ? (
          <Mivro
            width="20"
            alt="Mivro Logo"
            className="mb-3 mr-2 inline-flex"
          />
        ) : (
          <Mivro alt="Mivro Logo" className="mb-3 mr-2 inline-flex" />
        )}
        <span className="text-primary-700">Mivro </span>
      </div>
      <span className="flex flex-col text-3xl">
        <span>Scan It. Know It.</span>
      </span>
    </div>
  </>
);

const HeroDescription = () => (
  <div className="mt-6 max-w-lg">
    <p
      className="mb-2 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Take control of your health with personalized product insights, wherever
      you shop 🛒
    </p>
    <p
      className="mb-4 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Think it is complicated? Think again—Mivro is simple design ensures you
      are always in control of your nutrition 😌
    </p>
  </div>
);

const HeroButtons = () => (
  <div className="mx-auto flex max-w-sm items-center justify-center sm:max-w-none">
    <div data-aos="fade-up" data-aos-delay="400">
      <Image
        src={heroImage}
        alt="Hero Image"
        width={450} // Adjust the width according to your needs
        height={300} // Adjust the height according to your needs
        className="mx-auto"
      />
    </div>
  </div>
);

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section>
      <div className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative pb-10 pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center pb-12 text-center md:pb-16">
            <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              <HeroTitle theme={theme!} />
            </div>
            <HeroDescription />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
