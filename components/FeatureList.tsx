export default function FeaturedProjects() {
  return (
    <div className="featured-projects flex flex-col gap-y-3 bg-gruvbox-light-bg dark:bg-gruvbox-dark-bg py-12">
      <h1 class="text-gruvbox-dark-yellow font-baskerville font-bold text-6xl text-center">
        Featured Projects <span>&#x1F3AF;</span>
      </h1>
      <div className="three-fav-projects flex flex-row gap-x-5 px-12 py-5">
        <div className="gummypy-project flex flex-1 flex-col justify-center items-center px-2 py-1">
          <div className="icon">
            <a href="https://github.com/sereinne/gummypy">
              <img src="/cli-blue.svg" alt="" class="size-12 lg:size-16" />
            </a>
          </div>
          <h1 class="font-baskerville text-gruvbox-dark-aqua font-semibold text-2xl">
            gummypy
          </h1>
          <p class="font-jetbrains font-semibold text-lg text-center text-gruvbox-dark-green">
            A small library that contains wrapper functions around the{" "}
            <a
              href="https://github.com/charmbracelet/gum"
              target="_blank"
            >
              <span class="text-gruvbox-dark-red underline">gum</span>
            </a>{" "}
            CLI tool.
          </p>
        </div>
        <div className="koentji-project flex flex-1 flex-col justify-center items-center px-2 py-1">
          <div className="icon">
            <a href="https://github.com/sereinne/koentji">
              <img src="/shieldlock.svg" alt="" class="size-12 lg:size-16" />
            </a>
          </div>
          <h1 class="font-baskerville text-gruvbox-light-green font-semibold text-2xl">
            koentji
          </h1>
          <p class="font-jetbrains font-semibold text-lg text-center text-gruvbox-dark-green">
            Free open source password manager built using{" "}
            <a href="https://github.com/tauri-apps/tauri" target="_blank">
              <span class="text-gruvbox-dark-red underline">tauri</span>
            </a>
          </p>
        </div>
        <div className="zigcli-project flex flex-1 flex-col justify-center items-center px-2 py-1">
          <div className="icon">
            <a href="https://github.com/sereinne/zigcli">
              <img src="/cli-orange.svg" alt="" class="size-12 lg:size-16" />
            </a>
          </div>
          <h1 class="font-baskerville text-gruvbox-dark-orange font-semibold text-2xl">
            zigcli
          </h1>
          <p class="font-jetbrains font-semibold text-lg text-center text-gruvbox-dark-green">
            A library to create CLI apps in{" "}
            <a href="https://github.com/ziglang/zig">
              <span class="text-gruvbox-dark-red underline">zig</span>
            </a>{" "}
            easily!
          </p>
        </div>
      </div>
    </div>
  );
}
