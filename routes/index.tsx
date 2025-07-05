export default function Home() {
  type technology = {
    iconPath: string;
    desc: string;
    url: string;
  };

  const frameworks: Array<technology> = [
    {
      iconPath: "/logo.svg",
      desc: "Fresh",
      url: "https://fresh.deno.dev",
    },
    {
      iconPath: "/tailwindcss.svg",
      desc: "TailwindCSS",
      url: "https://tailwindcss.com",
    },
  ];

  const languages: Array<technology> = [
    {
      iconPath: "/rust.svg",
      desc: "Rust",
      url: "https://rust-lang.org/",
    },
    {
      iconPath: "/python.svg",
      desc: "Python",
      url: "https://python.org",
    },
    {
      iconPath: "/zig.svg",
      desc: "Zig",
      url: "https://ziglang.org/",
    },
    {
      iconPath: "/js.svg",
      desc: "JavaScript",
      url: "https://developer.mozilla.org",
    },
    {
      iconPath: "/ts.svg",
      desc: "TypeScript",
      url: "https://typescriptlang.org",
    },
    {
      iconPath: "/html.svg",
      desc: "HTML",
      url: "https://w3schools.com",
    },
    {
      iconPath: "/css.svg",
      desc: "CSS",
      url: "https://w3schools.com",
    },
  ];

  const developerTools: Array<technology> = [
    {
      iconPath: "/linux.svg",
      desc: "Linux",
      url: "https://github.com/torvalds/linux",
    },
    {
      iconPath: "/deno.svg",
      desc: "Deno",
      url: "https://deno.com",
    },
    {
      iconPath: "/nodejs.svg",
      desc: "NodeJS",
      url: "https://nodejs.org",
    },

    {
      iconPath: "/bash.svg",
      desc: "Bash/zsh/fish",
      url: "https://ftp.gnu.org/gnu/bash",
    },
    {
      iconPath: "/git.svg",
      desc: "Git",
      url: "https://git-scm.com",
    },
    {
      iconPath: "/docker.svg",
      desc: "Docker",
      url: "https://docker.com",
    },
  ];

  return (
    <div className="homepage bg-[#EDCB96]">
      <header>
        <video autoplay loop>
          <source src="/new-output.mp4" />
        </video>
      </header>
      <main class="bg-[#EDCB96] mx-4 my-10 font-montserrat grid grid-cols-3 gap-y-9 gap-x-3">
        <div className="introduction">
          <header class="font-bold text-4xl text-center">
            Brief introduction
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <p class="text-center text-md font-semibold leading-tight">
            My name is Muhammad Akbar Ilman Setijadi. I'm 19 years old, majoring
            Information Systems at Institut Teknologi Sepuluh Nopember (10th
            Nopember Institute of Technology), Surabaya. I'm Currently refining
            my skill on many technologies out there in order to be versatile.
          </p>
        </div>
        <div className="projects">
          <header class="font-bold text-4xl text-center">
            Projects
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
        </div>
        <div className="contributions">
          <header class="font-bold text-4xl text-center">
            Contributions
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
        </div>
        <div className="dev-tools">
          <header class="font-bold text-4xl text-center">
            Developer Tools
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="dev-tools-grid grid gap-2 grid-cols-3">
            {developerTools.map((devtool) => {
              return (
                <a href={devtool.url}>
                  <div className="dev-tool flex flex-col justify-center align-center gap-x-2 border-4 rounded-md border-[#524632] duration-200 hover:bg-[#468c49] hover:text-[#EDCB96] hover:-translate-y-1">
                    <img src={devtool.iconPath} class="size-8 mx-auto my-0.5" />
                    <footer class="text-center font-semibold bg-[#524632] text-[#edcb96]">
                      {devtool.desc}
                    </footer>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="programming-languages">
          <header class="font-bold text-4xl text-center">
            Languages
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="programming-languages-grid grid gap-2 grid-cols-3">
            {languages.map((language) => {
              return (
                <a href={language.url}>
                  <div className="programming-language flex flex-col justify-center align-center gap-x-2 border-4 rounded-md border-[#524632] duration-200 hover:bg-[#468c49] hover:text-[#EDCB96] hover:-translate-y-1">
                    <img
                      src={language.iconPath}
                      class="size-8 mx-auto my-0.5"
                    />
                    <footer class="text-center font-semibold bg-[#524632] text-[#edcb96]">
                      {language.desc}
                    </footer>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="frameworks">
          <header class="font-bold text-4xl text-center">
            Frameworks
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="frameworks-grid grid gap-2 grid-cols-3">
            {frameworks.map((framework) => {
              return (
                <a href={framework.url}>
                  <div className="framework-grid flex flex-col justify-center align-center gap-x-2 border-4 rounded-md border-[#524632] duration-200 hover:bg-[#468c49] hover:text-[#EDCB96] hover:-translate-y-1">
                    <img
                      src={framework.iconPath}
                      class="size-8 mx-auto my-0.5"
                    />
                    <footer class="text-center font-semibold bg-[#524632] text-[#edcb96]">
                      {framework.desc}
                    </footer>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <footer class="bg-[#EDCB96] font-montserrat">
        <div className="goodbye flex flex-col gap-y-1 justify-center items-center py-1 px-2 ">
          <p class="copyright text-[#524632] font-semibold py-2">
            © 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
          </p>
          <ul className="more-about flex flex-row gap-x-3">
            <li>
              <a href="https://github.com/sereinne">
                <img src="/github.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="mailto:akbarpersonalmode@gmail.com">
                <img src="/mail.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhamnad-akbar-ilman-setijadi-405022246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src="/linkedin.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/akbarilmnn">
                <img src="/instagram.svg" class="size-8" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
