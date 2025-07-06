export interface Repository {
  name: string;
  desc: string;
  url: string;
}

export function ProjectCard({ name, desc, url }: Repository) {
  return (
    <div className="project duration-200 border-2 border-mutebrown rounded-md flex hover:bg-armygreen hover:cursor-pointer hover:-translate-y-1">
      <div class="icon-container bg-mutebrown px-1 flex flex-col justify-center">
        <img
          src="/library-icon.svg"
          class="size-8"
          alt=""
        />
      </div>
      <div className="project-metadata">
        <header class="font-bold ml-2 py-1">
          <a href={url} target="_blank">
            <u>
              {name}
            </u>
          </a>
        </header>
        <p class="font-semibold ml-2 py-1">
          {desc}
        </p>
      </div>
    </div>
  );
}
