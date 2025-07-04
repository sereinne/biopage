// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div className="homepage">
      <header>
        <video autoplay loop>
          <source src="/output.mp4" />
        </video>
      </header>
      <footer class="bg-[#121417] font-mono">
        <div className="goodbye flex flex-col gap-y-1 justify-center items-center py-1 px-2 ">
          <p class="copyright text-[#747c86] py-2">
            © 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
          </p>
          <ul className="more-about flex flex-row gap-x-2">
            <li>
              <a href="https://github.com/sereinne">
                <img src="/github.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="mailto:akbarpersonalmode@gmail.com">
                <img src="/mail.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhamnad-akbar-ilman-setijadi-405022246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src="/linkedin.svg" class="size-8" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/akbarilmnn">
                <img src="/instagram.svg" class="size-8" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
