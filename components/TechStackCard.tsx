export interface Technology {
  iconPath: string;
  desc: string;
  url: string;
}

export function TechStackCard({ iconPath, desc, url }: Technology) {
  return (
    <a href={url} target="_blank">
      <div className="programming-language flex flex-col justify-center align-center gap-x-2 border-4 rounded-md border-mutebrown duration-200 hover:bg-armygreen hover:text-lightbeige hover:-translate-y-1">
        <img
          src={iconPath}
          class="size-6 lg:size-8 mx-auto my-0.5"
        />
        <footer class="text-center text-sm lg:text-md font-semibold bg-mutebrown text-lightbeige">
          {desc}
        </footer>
      </div>
    </a>
  );
}
