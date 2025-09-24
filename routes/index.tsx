import { define } from "../utils.ts";
import FeaturedProjects from "../components/FeatureList.tsx";
import Contributions from "../components/Contributions.tsx";

export default define.page(function Home(ctx) {
  // the flex is added in .space-header>h1 in order for the emoji to be align horizontally
  return (
    <div className="homepage h-screen">
      <video autoplay loop class="max-w-full">
        <source
          src="/introduction_vid.mp4"
          type="video/mp4"
        />
      </video>
      <main class="content flex flex-col gap-x-3 justify-around bg-rhino h-screen">
        <div className="introduction flex gap-x-3">
          <div className="spacer-header justify-self-center self-center px-15">
            <h1 class="font-inter flex gap-x-3 text-6xl font-bold text-gruvbox-light-yellow text-center dark:text-gruvbox-dark-yellow">
              Introduction <span class="align-middle">&#x1F44B;</span>
            </h1>
          </div>
          <div className="spacer-paragraph justify-self-center self-center px-15 py-10">
            <p class="text-rose font-jetbrains font-bold text-lg">
              My name is Muhammad Akbar Ilman Setijadi, and I am currently
              majoring in Information Systems at Institut Teknologi Sepuluh
              Nopember. I enjoy building libraries and cross-platform apps with
              little to no dependencies in order to better understand how they
              work in detail. At the moment, I’m developing a password manager
              app called{" "}
              <a
                href="https://github.com/sereinne/koentji"
                class="underline text-gruvbox-dark-red"
                target="_blank"
              >
                <span>&nbsp;</span>Koentji
              </a>
              , a GUI password manager based on{" "}
              <a
                href="https://passwordstore.org"
                target="_blank"
                class="underline text-gruvbox-dark-red"
              >
                <span>&nbsp;</span>pass
              </a>. If you’d like to contact me or take a look at the projects
              I’ve worked on, feel free to scroll down and follow the links.
            </p>
          </div>
        </div>
      </main>
      <FeaturedProjects />
      <Contributions />
      <footer className="bg-light-rhino font-jetbrains flex flex-col justify-center items-center py-3 gap-y-3">
        <ul class="flex flex-row gap-x-3">
          <li class="gh-btn">
            <a href="https://github.com/sereinne" target="_blank">
              <img src="/github.svg" class="size-6 lg:size-8" />
            </a>
          </li>
          <li class="mail-btn">
            <a href="mailto:akbarpersonalmode@gmail.com" target="_blank">
              <img src="/mail.svg" class="size-6 lg:size-8" />
            </a>
          </li>
          <li class="linkedin-btn">
            <a
              href="https://www.linkedin.com/in/muhamnad-akbar-ilman-setijadi-405022246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img src="/linkedin.svg" class="size-6 lg:size-8" />
            </a>
          </li>
          <li class="insta-btn">
            <a href="https://instagram.com/akbarilmnn" target="_blank">
              <img src="/instagram.svg" class="size-6 lg:size-8" />
            </a>
          </li>
        </ul>
        <p class="text-sm text-center text-rose font-semibold">
          © 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
        </p>
      </footer>
    </div>
  );
});
