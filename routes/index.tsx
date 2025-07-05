export default function Home() {
  type technology = {
    iconPath: string;
    desc: string;
    url: string;
  };

  const technologies: Array<technology> = [
    {
      iconPath: "/linux.svg",
      desc: "Linux",
      url: "https://github.com/torvalds/linux",
    },
    {
      iconPath: "/nodejs.svg",
      desc: "NodeJS",
      url: "https://nodejs.org",
    },
    {
      iconPath: "/deno.svg",
      desc: "Deno",
      url: "https://deno.com",
    },
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
      iconPath: "/bash.svg",
      desc: "Bash",
      url: "https://ftp.gnu.org/gnu/bash",
    },
    {
      iconPath: "/git.svg",
      desc: "Git",
      url: "https://git-scm.com",
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
          <source src="/output.mp4" />
        </video>
      </header>
      <main class="bg-[#EDCB96] mx-4 my-2 font-montserrat grid grid-cols-3 gap-y-1 gap-x-3">
        <div className="introduction">
          <header class="font-bold text-4xl text-center">
            Brief introduction
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <p class="text-center text-lg font-semibold leading-tight">
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
          <div className="projects-grid flex flex-col gap-y-2">
            <div className="project-grid rounded-md border-4 border-[#524632]">
              <header class="text-center font-semibold text-[#EDCB96] bg-[#524632] py-1">
                Szlog
              </header>
              <p class="text-center ">
                simple structured logging library in zig
              </p>
            </div>
          </div>
        </div>
        <div className="tech-stacks">
          <header class="font-bold text-4xl text-center">
            Technologies
          </header>
          <hr class="bg-[#524632] h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="tech-stack-grid grid gap-2 grid-cols-3">
            {technologies.map((tech) => {
              return (
                <a href={tech.url}>
                  <div className="tech-stack flex flex-col justify-center align-center gap-x-2 border-4 rounded-md border-[#524632] duration-200 hover:bg-[#468c49] hover:text-[#EDCB96] hover:-translate-y-1">
                    <img src={tech.iconPath} class="size-8 mx-auto my-0.5" />
                    <footer class="text-center font-semibold bg-[#524632] text-[#edcb96]">
                      {tech.desc}
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
