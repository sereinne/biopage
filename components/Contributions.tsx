export default function Contributions() {
  return (
    <div className="contributions bg-gruvbox-light-bg dark:bg-gruvbox-dark-bg h-screen">
      <hr class="w-full border-gruvbox-light-green dark:border-gruvbox-dark-green rounded-full border-1" />
      <div className="wrapper flex justify-center items-center py-15">
        <div className="coming-soon font-baskerville text-gruvbox-light-yellow dark:text-gruvbox-dark-yellow font-bold text-6xl text-end px-15">
          Work in Progress... <span>&#x1F6E0;&#xFE0F;</span>
        </div>
        <h1 className="font-baskerville text-gruvbox-light-yellow dark:text-gruvbox-dark-yellow font-bold text-6xl text-end px-15">
          Contributions <span>&#x1F91D;</span>
        </h1>
      </div>
    </div>
  );
}
