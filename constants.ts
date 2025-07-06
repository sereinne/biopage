import { Repository } from "./components/ProjectCard.tsx";
import { Technology } from "./components/TechStackCard.tsx";

export const repositories: Array<Repository> = [
  {
    name: "gummypy",
    desc: "A simple library that contains wrapper functions for gum CLI tool",
    url: "https://github.com/sereinne/gummypy",
  },
  {
    name: "szlog",
    desc: "simple structured logging library in zig",
    url: "https://github.com/sereinne/szlog",
  },
  {
    name: "manimations",
    desc: "source code for all of my manim animations",
    url: "https://github.com/sereinne/manimations",
  },
];

export const frameworks: Array<Technology> = [
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

export const languages: Array<Technology> = [
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

export const developerTools: Array<Technology> = [
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
