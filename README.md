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
- Extensive context-aware tutorials and intelligent modding assistant to help guide
  inexperienced users through complex modding.
- Native integration with key BGS modding tools including xEdit, LOOT, Merge Plugins, Wrye Bash and DyndoLOD.
- User-friendly mod and game configuration. No more manual INI editing for game
  settings and mods that use INI files for configuration.

# Contributing

Modbench uses Tauri, Vite + React, and TypeScript for the best combination of performance, developer experience, and user experience.

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
