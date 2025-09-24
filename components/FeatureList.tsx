import { Fragment } from "preact";
import ProjectCard from "./ProjectCard.tsx";

export interface IconOpts {
  color: string;
}

function CliIcon({ color }: IconOpts) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      class="size-12 lg:size-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
      </g>
      <g id="SVGRepo_iconCarrier">
        <rect width="24" height="24" fill="none"></rect>{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.29291 14.2929C6.90238 14.6834 6.90238 15.3166 7.29291 15.7071C7.68343 16.0976 8.31659 16.0976 8.70712 15.7071L11.2071 13.2071C11.8738 12.5404 11.8738 11.4596 11.2071 10.7929L8.70712 8.29289C8.3166 7.90237 7.68343 7.90237 7.29291 8.29289C6.90238 8.68342 6.90238 9.31658 7.29291 9.70711L9.5858 12L7.29291 14.2929ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H13ZM22 7.93418C22 7.95604 22 7.97799 22 8.00001L22 16.0658C22.0001 16.9523 22.0001 17.7161 21.9179 18.3278C21.8297 18.9833 21.631 19.6117 21.1213 20.1213C20.6117 20.631 19.9833 20.8297 19.3278 20.9179C18.7161 21.0001 17.9523 21.0001 17.0658 21L6.9342 21C6.0477 21.0001 5.28388 21.0001 4.67222 20.9179C4.0167 20.8297 3.38835 20.631 2.87869 20.1213C2.36902 19.6117 2.17028 18.9833 2.08215 18.3278C1.99991 17.7161 1.99995 16.9523 2 16.0658L2 7.9342C1.99995 7.0477 1.99991 6.28388 2.08215 5.67221C2.17028 5.0167 2.36902 4.38835 2.87869 3.87868C3.38835 3.36902 4.0167 3.17028 4.67222 3.08215C5.28388 2.99991 6.04769 2.99995 6.93418 3L17 3.00001C17.022 3.00001 17.044 3 17.0658 3C17.9523 2.99995 18.7161 2.99991 19.3278 3.08215C19.9833 3.17028 20.6117 3.36902 21.1213 3.87869C21.631 4.38835 21.8297 5.0167 21.9179 5.67221C22.0001 6.28387 22.0001 7.04769 22 7.93418Z"
          fill={color}
        >
        </path>
      </g>
    </svg>
  );
}

function ShieldIcon({ color }: IconOpts) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="size-12 lg:size-16"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
      </g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM13.5 15C13.5 15.5523 13.0523 16 12.5 16H11.5C10.9477 16 10.5 15.5523 10.5 15V13.5987C9.6033 13.0799 9 12.1104 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.1104 14.3967 13.0799 13.5 13.5987V15Z"
          fill={color}
        >
        </path>
      </g>
    </svg>
  );
}

export default function FeaturedProjects() {
  const gumDesc = (
    <p class="font-jetbrains font-semibold  text-light-rose">
      A simple library that contains wrapper functions for{" "}
      <a
        href="https://github.com/charmbracelet/gum"
        target="_blank"
      >
        <span class="text-gruvbox-dark-red underline">gum</span>
      </a>{" "}
      CLI tool
    </p>
  );
  const koentjiDesc = (
    <p class="font-jetbrains font-semibold  text-light-rose">
      Free open source passwords manager built using{" "}
      <a
        href="https://github.com/tauri-apps/tauri"
        target="_blank"
      >
        <span class="text-gruvbox-dark-red underline">tauri</span>
      </a>
    </p>
  );
  const zigcliDesc = (
    <p class="font-jetbrains font-semibold text-light-rose">
      a library to create CLI apps in{" "}
      <a
        href="https://github.com/tauri-apps/tauri"
        target="_blank"
      >
        <span class="text-gruvbox-dark-red underline">zig</span>
      </a>{" "}
      easily!
    </p>
  );
  return (
    <div className="featured-projects flex justify-center items-center gap-y-3 bg-light-rhino h-screen">
      <h1 class="text-gruvbox-dark-yellow flex-2 font-inter font-bold text-6xl text-center">
        Featured Projects <span>&#x1F3AF;</span>
      </h1>
      <div className="three-fav-projects flex flex-1 flex-col gap-y-3 h-full overflow-scroll py-3 pr-3">
        <ProjectCard
          name="gummypy"
          url="https://github.com/sereinne/gummypy"
          desc={gumDesc}
          SvgIcon={CliIcon}
          iconOpts={{ color: "#ffaabb" }}
        />
        <ProjectCard
          name="koentji"
          url="https://github.com/sereinne/koentji"
          desc={koentjiDesc}
          SvgIcon={ShieldIcon}
          iconOpts={{ color: "#ffaabb" }}
        />
        <ProjectCard
          name="zigcli"
          url="https://github.com/sereinne/zigcli"
          desc={zigcliDesc}
          SvgIcon={CliIcon}
          iconOpts={{ color: "#ffaabb" }}
        />
      </div>
    </div>
  );
}

//const tmp = (
//	<>
//	<ProjectCard
//          name="gummypy"
//          // desc={gumDesc}
//          primColor="#458588"
//          SvgIcon={CliIcon}
//          svgIconOpts={{ color: "#F7B4AA" }}
//          url="https://github.com/sereinne/gummypy"
//        />
//        <ProjectCard
//          name="koentji"
//          // desc={koentjiDesc}
//          primColor="#1db954"
//          SvgIcon={ShieldIcon}
//          svgIconOpts={{ color: "#1db954" }}
//          url="https://github.com/sereinne/koentji"
//        />
//        <ProjectCard
//          name="zigcli"
//          // desc={zigcliDesc}
//          primColor="#fe8019"
//          SvgIcon={CliIcon}
//          svgIconOpts={{ color: "#fe8019" }}
//          url="https://github.com/sereinne/zigcli"
//        />
//      </div>
//	</>
//)
