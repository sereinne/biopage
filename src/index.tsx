import { hydrate, prerender as ssr } from "preact-iso";

import { useScramble } from "use-scramble";

import "./style.css";

type Credential = {
	url: string;
	imgSource: string;
	btnName: string;
};

type RepoBtnContent = {
	repoUrl: string;
	repoName: string;
	repoDesc: string;
};

function RepoBtn({ repoUrl, repoName, repoDesc }: RepoBtnContent) {
	return (
		<a href={repoUrl} draggable={false}>
			<div class="repo border-3 rounded-lg border-sleek-red bg-sleek-red px-2 py-1">
				<div class="repo-wrapper-header flex items-center justify-between">
					<p class="repo-title font-semibold text-3xl text-sleek-gray">
						{repoName}
					</p>
					<div class="hosted-on flex gap-x-2">
						<code class="text-sleek-gray font-semibold text-xs">
							Hosted on
						</code>
						<img src="/assets/github.svg" class="size-4" />
					</div>
				</div>
				<code class="repo-description font-semibold text-sm text-sleek-gray">
					{repoDesc}
				</code>
			</div>
		</a>
	);
}

type ContribBtnContent = {
	contribName: string;
	contribUrl: string;
};

function ContribBtn({ contribName, contribUrl }: ContribBtnContent) {
	return (
		<a href={contribUrl} draggable={false}>
			<div class="contrib-btn bg-sleek-red flex items-center gap-x-5 px-2 py-1 rounded-lg">
				<p class="font-sleek text-sleek-gray font-semibold text-xl">
					{contribName}
				</p>
				<div class="hosted-on flex gap-x-2">
					<code class="text-sleek-gray font-semibold text-xs">
						Hosted on
					</code>
					<img src="/assets/github.svg" class="size-4" />
				</div>
			</div>
		</a>
	);
}

function Contact({ url, imgSource, btnName }: Credential) {
	return (
		<a href={url} draggable={false}>
			<div class="instagram flex gap-x-2 text-sleek-gray bg-sleek-red text-sleek font-semibold border-2 px-2 py-2 rounded-lg cursor-pointer">
				<img src={imgSource} class="size-6" />
				<p>
					{btnName}
				</p>
			</div>
		</a>
	);
}

function Contacts() {
	return (
		<div class="contacts flex gap-x-2">
			<Contact
				url="https://instagram.com/akbarilmnn"
				imgSource="/assets/instagram.svg"
				btnName="Instagram"
			/>
			<Contact
				url="https://github.com/sereinne"
				imgSource="/assets/github.svg"
				btnName="Github (main)"
			/>
			<Contact
				url="https://github.com/akbarilmnn"
				imgSource="/assets/github.svg"
				btnName="Github (secondary)"
			/>
			<Contact
				url="mailto:akbarilman@proton.me"
				imgSource="/assets/email.svg"
				btnName="Mail"
			/>
			<Contact
				url="https://linkedin.com/in/akbarilmnn"
				imgSource="/assets/linkedin.svg"
				btnName="Linkedin"
			/>
		</div>
	);
}

function Introduction() {
	const { ref } = useScramble({
		text: "Muhammad Akbar Ilman Setijadi",
		speed: 0.5,
		tick: 2,
		step: 3,
		scramble: 4,
		seed: 0.5,
	});
	return (
		<main class="portfolio bg-sleek-gray h-screen flex flex-col">
			<div class="introduction flex flex-col justify-center items-center my-auto">
				<div class="introduction-heading flex flex-col items-center gap-y-5">
					<img src="/assets/calligraphy.svg" class="w-96 h-96" />
					<div class="intro-wrapper-waving-hand flex gap-x-5 items-center">
						<p class="text-sleek-red text-8xl font-bold font-sleek text-center">
							Hi!
						</p>
						<img src="/assets/wave.svg" class="size-18" />
					</div>
					<code class="text-4xl text-sleek-grayer font-bold">
						I'm
					</code>
					<p
						ref={ref}
						class="text-sleek-red text-7xl font-bold font-sleek text-center"
					>
					</p>
					<Contacts />
				</div>
			</div>
		</main>
	);
}

function ReworkFeature() {
	return (
		<div class="features h-screen bg-sleek-gray border-t-5 border-dashed border-sleek-red">
			<div class="wrapper-repo-contrib flex justify-around mt-5">
				<div class="repositories flex flex-col gap-y-5">
					<div class="repo-header-wrapper flex justify-center items-center gap-x-3">
						<p class="font-sleek text-sleek-gray bg-sleek-red font-semibold text-5xl px-2 pt-1 pb-2 rounded-lg">
							Repositories
						</p>
						<img
							src="/assets/repo.svg"
							class="size-14 bg-sleek-red px-2 py-1 rounded-lg"
						/>
					</div>
					<div class="repo-list flex flex-col gap-y-5">
						<RepoBtn
							repoName="gummypy"
							repoUrl="https://github.com/sereinne/gummypy"
							repoDesc="A simple library that contains wrapper functions for gum CLI tool"
						/>
						<RepoBtn
							repoName="odoo-10-for-macos"
							repoUrl="https://github.com/sereinne/odoo-10-for-macos"
							repoDesc="how to set a docker container for running odoo version 10 in MacOS"
						/>
						<RepoBtn
							repoName="manimations"
							repoUrl="https://github.com/sereinne/manimations"
							repoDesc="source code for all of my manim animations"
						/>
					</div>
				</div>
				<div class="contributions flex flex-col gap-y-5">
					<div class="contrib-header-wrapper flex justify-center items-center gap-x-3">
						<p class="font-sleek text-sleek-gray bg-sleek-red font-semibold text-5xl px-2 pt-1 pb-2 rounded-lg">
							Contributions
						</p>
						<img
							src="/assets/pull.svg"
							class="size-14 bg-sleek-red px-2 py-1 rounded-lg"
						/>
					</div>
					<div class="contrib-list flex flex-col gap-y-5">
						<ContribBtn
							contribName="DSA Final Project Contribution"
							contribUrl="https://github.com/NashiwaInsan/asdfinalproject/commit/c89c96c6b1c6ec3be37797bf2b21501fd8e0e625"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function Ending() {
	return (
		<div class="ending bg-sleek-red py-2 px-1">
			<p class="copyright text-lg font-sleek text-black text-center">
				© 2025 Muhammad Akbar Ilman Setijadi. All rights reserved.
			</p>
		</div>
	);
}

export function App() {
	return (
		<>
			<Introduction />
			<ReworkFeature />
			<Ending />
		</>
	);
}

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
