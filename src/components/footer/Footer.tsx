import { AudioLines } from "lucide-react";

const FooterCols = () => {
  const firstCol = ["SUPPORT", "CARRERS", "NEWS", "KNOWLEDGE BASE"];

  const secondCol = [
    "Downloads",
    "Pink Screamer",

    "Solar Beamer",
    "Cosmisc Cryer",
    "Emerald Echo",
    "Crimson Fuzz",
  ];

  const thirdCol = [
    "Bender TW-20",
    "Box AC-20",
    "Shalmar TW-20",
    "Find a dealer",
  ];

  const fourthCol = ["Artists", "Discord", "Forum"];
  const lastCol = [
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
    "Terms of Use Cortex Cloud",
    "Digital Millennium Copyright Act (DMCA)",
    "Quad Cortex Warranty Policy",
  ];
  return (
    <>
      <div className="text-left">
        <ul className="flex flex-col gap-4">
          {firstCol.map((col, index) => (
            <a key={index} className="text-2xl">
              {col}
            </a>
          ))}
        </ul>
      </div>
      <div className="text-left">
        <ul className="flex flex-col gap-4">
          <h4 className="text-md uppercase font-bold">Plugins</h4>
          {secondCol.map((col, index) => (
            <a
              href="#"
              key={index}
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              {col}
            </a>
          ))}
        </ul>
      </div>
      <div className="text-left">
        <ul className="flex flex-col gap-4">
          <h4 className="text-md uppercase font-bold">Hardware</h4>
          {thirdCol.map((col, index) => (
            <a
              href="#"
              key={index}
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              {col}
            </a>
          ))}
        </ul>
      </div>
      <div className="text-left">
        <ul className="flex flex-col gap-4">
          <h4 className="text-md uppercase font-bold">Community</h4>
          {fourthCol.map((col, index) => (
            <a
              href="#"
              key={index}
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              {col}
            </a>
          ))}
        </ul>
      </div>
      <div className="text-left">
        <ul className="flex flex-col gap-4">
          <h4 className="text-md uppercase font-bold">Legal</h4>
          {lastCol.map((col, index) => (
            <a
              href="#"
              key={index}
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              {col}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full mt-12 ">
      <div className="flex bg-foreground w-full col-span-5 items-center justify-center">
        <AudioLines height={80} className="text-background" />
      </div>
      <div className="grid justify-center  sm:grid-cols-2 lg:grid-cols-5 max-w-7xl container my-12 gap-8 md:gap-2 ">
        <FooterCols />
      </div>
    </footer>
  );
};
