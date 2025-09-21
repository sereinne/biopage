import { FunctionComponent, JSX } from "preact";
import { IconOpts } from "./FeatureList.tsx";

interface ProjectCardOpts {
  name: string;
  desc: JSX.Element;
  url: string;
  primColor: string;
  SvgIcon: FunctionComponent<IconOpts>;
  svgIconOpts: IconOpts;
}

export function ProjectCard(
  { name, desc, url, primColor, SvgIcon, svgIconOpts }: ProjectCardOpts,
) {
  return (
    <div
      className="project flex flex-col gap-y-2 justify-center items-center px-2 py-1 border-2 rounded-md"
      style={`border-color:${primColor}`}
    >
      <div className="icon">
        <a href={url}>
          <SvgIcon {...svgIconOpts} />
        </a>
      </div>
      <h1 class="font-baskerville text-gruvbox-dark-bg dark:text-gruvbox-dark-lighten-bg font-semibold text-2xl">
        {name}
      </h1>
      <hr
        class="h-0.5 rounded-full w-full"
        style={`background-color:${primColor}`}
      />
      <p class="font-jetbrains font-semibold text-lg text-center text-gruvbox-dark-bg dark:text-gruvbox-dark-lighten-bg">
        {desc}
      </p>
    </div>
  );
}
