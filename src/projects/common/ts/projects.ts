const smallDivArr: HTMLElement[] = Array.from(
    document.querySelectorAll(".small")
);

function checkDivWidth(div: HTMLElement) {
    const divWidth = div.offsetWidth;
    div.style.setProperty("--width", `${divWidth}px`);

    if (divWidth <= 438) {
        div.classList.remove("small");
        div.classList.add("x-small");
    } else {
        div.classList.remove("x-small");
        div.classList.add("small");
    }
}

smallDivArr.forEach((div) => {
    checkDivWidth(div);

    window.addEventListener("resize", () => {
        checkDivWidth(div);
    });
    window.addEventListener("load", () => {
        checkDivWidth(div);
    });
});

const divArr: HTMLElement[] = Array.from(
    document.querySelector(".grid")!.querySelectorAll(":scope > div")
);

const currDivArr: number[] = [];
let index = -1;

divArr.forEach((div) => {
    if (div.querySelector(".carousel") != null) {
        currDivArr.push(2);
        index++;

        const nextBtn = div.querySelector(".next");
        const prevBtn = div.querySelector(".prev");

        nextBtn?.addEventListener("click", () => {
            rotate("next", div, index);
        });

        prevBtn?.addEventListener("click", () => {
            rotate("prev", div, index);
        });
    }
});

function rotate(btn: string, div: HTMLElement, index: number) {
    const currDiv = currDivArr[index];

    const carouselDivArr: HTMLElement[] = Array.from(
        div.querySelector(".carousel")!.querySelectorAll(":scope > div")
    );
    const numOfImgs = carouselDivArr.length;

    const carousel: HTMLElement | null = div.querySelector(".carousel");

    function newRotation(deg: number) {
        if (btn === "next") {
            return deg - 60;
        } else {
            return deg + 60;
        }
    }

    function animate() {
        const currRotation = 120 - 60 * currDiv;
        carousel?.animate(
            [
                { transform: `rotateY(${currRotation}deg)` },
                { transform: `rotateY(${newRotation(currRotation)}deg)` }
            ],
            {
                duration: 1000,
                iterations: 1
            }
        );

        carousel!.style.transform = `rotateY(${newRotation(currRotation)}deg)`;
    }

    if (btn === "next") {
        if (currDiv === numOfImgs) {
            rotate("prev", div, index);
        } else {
            animate();
            currDivArr[index] = currDiv + 1;
        }
    } else if (btn == "prev") {
        if (currDiv === 1) {
            rotate("next", div, index);
        } else {
            animate();
            currDivArr[index] = currDiv - 1;
        }
    }
}
