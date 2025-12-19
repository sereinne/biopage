import { hydrate, prerender as ssr } from "preact-iso";

import { useScramble } from "use-scramble";

import "./style.css";

type Credential = {
  url: string;
  imgSource: string;
  btnName: string;
};

function Contact({ url, imgSource, btnName }: Credential) {
  return (
    <a href={url}>
      <div class="instagram flex gap-x-2 text-sleek-gray bg-sleek-red text-sleek font-semibold border-2 px-2 py-2 rounded-lg cursor-pointer">
        <img src={imgSource} class="size-6" />
        <p>
          {btnName}
        </p>
      </div>
    </a>
  );
}

function Contacts() {
  return (
    <div class="contacts flex gap-x-2">
      <Contact
        url="https://instagram.com/akbarilmnn"
        imgSource="/src/assets/instagram.svg"
        btnName="Instagram"
      />
      <Contact
        url="https://github.com/sereinne"
        imgSource="/src/assets/github.svg"
        btnName="Github (main)"
      />
      <Contact
        url="https://github.com/akbarilmnn"
        imgSource="/src/assets/github.svg"
        btnName="Github (secondary)"
      />
      <Contact
        url="mailto:akbarilman@proton.me"
        imgSource="/src/assets/email.svg"
        btnName="Mail"
      />
      <Contact
        url="https://linkedin.com/in/akbarilmnn"
        imgSource="/src/assets/linkedin.svg"
        btnName="Linkedin"
      />
    </div>
  );
}

function Introduction() {
  const { ref } = useScramble({
    text: "Muhammad Akbar Ilman Setijadi",
    speed: 0.5,
    tick: 2,
    step: 3,
    scramble: 4,
    seed: 0.5,
  });
  return (
    <main class="portfolio bg-sleek-gray h-screen flex flex-col">
      <div class="introduction flex flex-col justify-center items-center my-auto">
        <div class="introduction-heading flex flex-col items-center gap-y-8">
          <div class="intro-wrapper-waving-hand flex gap-x-5 items-center">
            <p class="text-sleek-red text-8xl font-bold font-sleek text-center">
              Hi!
            </p>
            <img src="/src/assets/wave.svg" class="size-18" />
          </div>
          <code class="text-4xl text-sleek-grayer font-bold">
            I'm
          </code>
          <p
            ref={ref}
            class="text-sleek-red text-7xl font-bold font-sleek text-center"
          >
          </p>
          <Contacts />
        </div>
      </div>
    </main>
  );
}

function ReworkFeature() {
  return (
    <div class="feature h-screen bg-sleek-gray border-t-5 border-sleek-red border-dashed">
      <p>
      </p>
    </div>
  );
}

function Ending() {
  return (
    <div class="ending bg-sleek-red py-2 px-1">
      <p class="copyright text-lg font-sleek text-black text-center">
        © 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
      </p>
    </div>
  );
}

export function App() {
  return (
    <>
      <Introduction />
      <ReworkFeature />
      <Ending />
    </>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
