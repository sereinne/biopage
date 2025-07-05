export default function Home() {
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
          <div className="tech-stack-grid">
            <a href="https://git-scm.com">
              <div className="tech-stack border-4 rounded-md border-[#524632] px-2 py-1 inline-block hover:bg-[#7ee8fa] hover:-top-px">
                <header>
                  <img src="/git.svg" class="size-8" />
                </header>
                <footer class="text-center font-semibold">
                  Git
                </footer>
              </div>
            </a>
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
