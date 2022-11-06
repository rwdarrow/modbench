# What is Modbench?

Modbench is a mod manager bringing modding into the next generation with the power of Tauri. Primarily targeting Bethesda games, Modbench aims to fuse the user-friendliness of
Vortex with the power and performance of Mod Organizer 2. The key goal of Modbench
is to become a powerful, all-in-one suite for modding, or "Integrated Modding Environment" (IME), whether you are new to the scene or need to manange and configure complex modlists.

## Planned Features

- Cross-platform with broad game support. The intial focus will be Bethesda games,
  but the platform should be designed to be as agnostic as possible.
- Highly extensible. Plugins are central to the architecture to encourage robust
  game and tooling support.
- Native integration with Wabbajack for browsing and installing modlists without
  clunky portable MO instances.
- Hardlinks generated at runtime to keep the game folder free of mod files. Simpler than a full-on custom VFS with similar results and few tradeoffs.
- Extensive context-aware tutorials and intelligent modding assistant to help guide
  inexperienced users through complex modding.
- Native integration with key BGS modding tools including xEdit, LOOT, Merge Plugins, Wrye Bash and DyndoLOD.
- User-friendly mod and game configuration. No more manual INI editing for game
  settings and mods that use INI files for configuration.

# Contributing

Modbench uses [Tauri](https://tauri.app), [Vite + React](https://vitejs.dev), and TypeScript for the best combination of performance, developer experience, and user experience.

## Prerequisites

- Tauri requires Build Tools for Visual Studio 2022, WebView2, and Rust. See the [official Tauri setup guide](https://tauri.app/v1/guides/getting-started/prerequisites) for more details
- Node v18.12.1, or whatever is in package.json
- Cargo is preferred for installing Rust packages, building and running
- pnmp is preferred for installing TS/JS packages, but you can use npm as well

## Run and Build

After cloning cloning the redo, be sure to install the packages:

`pnpm install`

Once the packages are installed, you should able to run the application using cargo:

`cargo tauri dev`

This will open the application in a WebView window. Hot reloading is enabled, so you can edit code and see your changes in real-time without having to reload the app.

To build the app, run:

`cargo tauri build`

This will build an installer for the application for the platform you are currently using. The output is located in `./src-tauri/target/release/bundle`.

## Why Tauri/Vite/React? What about Electron.js? Why use web stack at all and not just use C++/C#?

Initially, this project began in Electron.js, but I found setting up the environment to be too slow and tedious, and every time I started up the app and saw the bundled Chromium instance come to life, I felt bad for my RAM. Electron.js is an amazing, mature framework that enables millions of web developers to frictionlessly jump into cross-platform desktop development, but something about using a bundled Chromium instance with a Node.js backend to communicate with the OS just seems janky and bloated. 

In my search for alternatives, I came across Tauri, and was attracted to its use of Rust for backend, while being agnostic about the frontend implementation. It seemed like the perfect marriage of high-performance and robust UI where each mattered the most. In the spirit of "next-generation" software, I thought it would be fitting to give this relatively new Electron.js-alternative a try. Plus Tauri's TS/JS APIs are much more intuitive than Electron.js's ipcMain, so that's a win. 

Vite is basically just an alternative to create-react-app that isn't bloated and slow. You can read about it [here](https://vitejs.dev). Sure, I could've used Preact too, or better yet Svelte, but bundle size and compilation time are not really the primary focus of this project, and as a React developer by trade I wanted to use what I'm used to. Sue me. 

And finally... why web stack? I think a better question is, "why not?" JavaScript and its associated frameworks and offspring have become not only synonymous with web development, they are some of the most mature, modern, beloved, and rich toolsets across all domains of software development. They are tailor-made for designing beautiful, performant frontends -- without regard to platform. Sure, Node.js on desktop seems sacrilige, but that's what we're using Tauri for. And for the record, I did explore the idea of C#, but it is not well oriented to cross-platform development. While most users will probably be on Windows are at the least under Wine/Proton, I still felt it was important to be as platform-agnostic as possbile, especially given developments in the gaming industry and Microsoft's practices as of late. As for C++, let's face it -- while certainly being powerful and fast, the traditional desktop-domain language that it is, working in it is a nightmare. Maybe Qt is alright, I don't know, but you can forget cross-platform, and the few gains of using C++ over Tauri don't seem to be worth the tradeoffs. If you disagree, keep using Mod Organizer 2, or better yet, fork it, make it better and try to implement some of the ideas I have for Modbench.
