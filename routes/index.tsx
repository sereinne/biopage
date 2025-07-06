import { ProjectCard } from "../components/ProjectCard.tsx";
import { TechStackCard } from "../components/TechStackCard.tsx";
import {
  developerTools,
  frameworks,
  languages,
  repositories,
} from "../constants.ts";

export default function Home() {
  return (
    <div className="homepage bg-lightbeige">
      <header>
        <video autoplay loop>
          <source src="/new-output.mp4" />
        </video>
      </header>
      <main class="bg-lightbeige mx-4 my-10 font-montserrat grid grid-cols-3 gap-y-9 gap-x-3">
        <div className="introduction">
          <header class="font-bold text-4xl text-center">
            Brief introduction
          </header>
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
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
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="projects-container flex flex-col gap-y-3">
            {repositories.map((repo) => {
              return (
                <ProjectCard name={repo.name} desc={repo.desc} url={repo.url} />
              );
            })}
          </div>
        </div>
        <div className="contributions">
          <header class="font-bold text-4xl text-center">
            Contributions
          </header>
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="contributions-grid">
            <div className="contribution">
              <img
                src="/coming-soon.svg"
                class="size-16 mx-auto block my-5"
                alt=""
              />
              <p class="font-bold text-4xl text-center">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>
        <div className="dev-tools">
          <header class="font-bold text-4xl text-center">
            Developer Tools
          </header>
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="dev-tools-grid grid gap-2 grid-cols-3">
            {developerTools.map((devtool) => {
              return (
                <TechStackCard
                  iconPath={devtool.iconPath}
                  desc={devtool.desc}
                  url={devtool.url}
                />
              );
            })}
          </div>
        </div>
        <div className="programming-languages">
          <header class="font-bold text-4xl text-center">
            Languages
          </header>
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="programming-languages-grid grid gap-2 grid-cols-3">
            {languages.map((language) => {
              return (
                <TechStackCard
                  iconPath={language.iconPath}
                  desc={language.desc}
                  url={language.url}
                />
              );
            })}
          </div>
        </div>
        <div className="frameworks">
          <header class="font-bold text-4xl text-center">
            Frameworks
          </header>
          <hr class="bg-mutebrown h-0.5 rounded-md border-0 my-2 mx-1" />
          <div className="frameworks-grid grid gap-2 grid-cols-3">
            {frameworks.map((framework) => {
              return (
                <TechStackCard
                  iconPath={framework.iconPath}
                  desc={framework.desc}
                  url={framework.url}
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer class="bg-lightbeige font-montserrat">
        <div className="goodbye flex flex-col gap-y-1 justify-center items-center py-1 px-2 ">
          <p class="copyright text-mutebrown font-semibold py-2">
            © 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
          </p>
          <ul className="more-about flex flex-row gap-x-3">
            <li>
              <a href="https://github.com/sereinne" target="_blank">
                <img src="/github.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="mailto:akbarpersonalmode@gmail.com" target="_blank">
                <img src="/mail.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhamnad-akbar-ilman-setijadi-405022246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img src="/linkedin.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/akbarilmnn" target="_blank">
                <img src="/instagram.svg" class="size-8" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
