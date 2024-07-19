export function createMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu");

    const [div1, div2]: HTMLElement[] = [
        document.createElement("div"),
        document.createElement("div")
    ];

    const homeSVG: string = `<svg id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;

    const aboutAnchor: HTMLElement = document.createElement("a");
    aboutAnchor.textContent = "About";

    const projectsAnchor: HTMLElement = document.createElement("a");
    projectsAnchor.textContent = "Projects";

    div1.innerHTML = homeSVG;
    div1.appendChild(aboutAnchor);

    const projectsDiv: HTMLElement = document.createElement("div");
    projectsDiv.id = "projects-menu-item";
    projectsDiv.appendChild(projectsAnchor);

    const dropDownSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
    projectsDiv.innerHTML += dropDownSVG;

    const projectsDropdownDiv: HTMLElement = document.createElement("div");
    projectsDropdownDiv.id = "projects-dropdown";
    projectsDropdownDiv.appendChild(projectsDiv);

    const featuredAnchor: HTMLElement = document.createElement("a");
    const webAnchor: HTMLElement = document.createElement("a");
    const mobileAnchor: HTMLElement = document.createElement("a");
    const miscAnchor: HTMLElement = document.createElement("a");

    featuredAnchor.textContent = "Featured";
    webAnchor.textContent = "Web";
    mobileAnchor.textContent = "Mobile";
    miscAnchor.textContent = "Misc";

    projectsDropdownDiv.appendChild(featuredAnchor);
    projectsDropdownDiv.appendChild(webAnchor);
    projectsDropdownDiv.appendChild(mobileAnchor);
    projectsDropdownDiv.appendChild(miscAnchor);

    div1.appendChild(projectsDiv);

    const moonSVG: string = `<svg id="moon" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg>`;

    div2.innerHTML = moonSVG;

    menu?.appendChild(div1);
    menu?.appendChild(div2);

    projectsDropdownDiv.classList.add("hide");

    projectsDropdownDiv.style.left = `${projectsDiv.getBoundingClientRect().left - 8}px`;
    projectsDropdownDiv.style.top = `${projectsDiv.getBoundingClientRect().top + projectsDiv.offsetHeight}px`;

    document.body.appendChild(projectsDropdownDiv);

    window.addEventListener("resize", () => {
        projectsDropdownDiv.style.left = `${projectsDiv.getBoundingClientRect().left - 8}px`;
    });

    const dropDownSVGElement: Node | null = document.querySelector(
        "#projects-menu-item svg"
    );

    dropDownSVGElement?.addEventListener("click", () => {
        projectsDropdownDiv.classList.remove("hide");
    });

    document.addEventListener("click", (e) => {
        if (
            !projectsDropdownDiv?.contains(e.target as Node) &&
            !dropDownSVGElement?.contains(e.target as Node)
        ) {
            projectsDropdownDiv.classList.add("hide");
        }
    });

    document.getElementById("moon")!.addEventListener("click", toggleTheme);
}

export function toggleTheme(): void {
    const moonSVG: string = `<svg id="moon" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg>`;

    const sunSVG: string = `<svg id="sun" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
    const root: HTMLElement = document.documentElement;

    if (root.classList.contains("dark-theme")) {
        document.querySelector(".menu > div:last-child > svg")!.outerHTML =
            sunSVG;
        document.getElementById("sun")!.addEventListener("click", toggleTheme);
        root.className = "light-theme";
    } else if (root.classList.contains("light-theme")) {
        document.querySelector(".menu > div:last-child > svg")!.outerHTML =
            moonSVG;
        document.getElementById("moon")!.addEventListener("click", toggleTheme);
        root.className = "dark-theme";
    }
}
