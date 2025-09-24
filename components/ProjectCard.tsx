import { FunctionComponent, VNode } from "preact";
import { IconOpts } from "./FeatureList.tsx";

export interface ProjectCardOpts {
  name: string;
  desc: VNode;
  url: string;
  SvgIcon: FunctionComponent<IconOpts>;
  iconOpts: IconOpts;
}

export default function ProjectCard(
  { name, desc, url, SvgIcon, iconOpts }: ProjectCardOpts,
) {
  return (
    <div class="project-card border-1 rounded-lg border-light-rose flex">
      <div className="icon justify-self-center self-center">
        <a href={url} target="_blank">
          <SvgIcon {...iconOpts} />
        </a>
      </div>
      <div className="meta-data border-l-2 border-light-rose px-2 py-1 flex flex-col gap-y-1">
        <h1 class="font-inter font-bold text-3xl text-light-rose flex justify-between">
          {name}
          <div className="hosted flex gap-x-1 justify-center items-center gap-y-1">
            <p class="flex font-jetbrains text-light-rose text-sm">
              hosted on:
            </p>
            <img src="/github.svg" class="size-4 lg:size-4" alt="" />
          </div>
        </h1>
        <hr class="border-none w-full h-0.5 rounded-full bg-light-rose" />
        <p class="font-jetbrains font-semibold text-lg text-light-rose">
          {desc}
        </p>
      </div>
    </div>
  );
}
