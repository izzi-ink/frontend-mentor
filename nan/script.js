const container = document.getElementById("container");

// Create 350 pink pixels
for (let i = 0; i < 350; i++) {
    const pinkPixel = document.createElement("div");
    pinkPixel.classList.add("pixel", "pink");
    container.appendChild(pinkPixel);
}

// Create 650 blue pixels
for (let i = 0; i < 650; i++) {
    const bluePixel = document.createElement("div");
    bluePixel.classList.add("pixel", "blue");
    container.appendChild(bluePixel);
}

// Add CSS Grid Layout to the container
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(32, 32px)";
container.style.gridTemplateRows = "repeat(32, 32px)";
container.style.gridGap = "16px";

// Position the pink pixels to form the heart shape
const pinkPixels = document.querySelectorAll(".pixel.pink");

pinkPixels[0].style.gridColumn = "15 / 16";
pinkPixels[0].style.gridRow = "15 / 16";
pinkPixels[1].style.gridColumn = "16 / 17";
pinkPixels[1].style.gridRow = "15 / 16";
pinkPixels[2].style.gridColumn = "16 / 17";
pinkPixels[2].style.gridRow = "16 / 17";

pinkPixels[3].style.gridColumn = "14 / 15";
pinkPixels[3].style.gridRow = "16 / 17";
pinkPixels[4].style.gridColumn = "17 / 18";
pinkPixels[4].style.gridRow = "16 / 17";
pinkPixels[5].style.gridColumn = "13 / 14";
pinkPixels[5].style.gridRow = "17 / 18";
pinkPixels[6].style.gridColumn = "18 / 19";
pinkPixels[6].style.gridRow = "17 / 18";
pinkPixels[7].style.gridColumn = "12 / 13";
pinkPixels[7].style.gridRow = "18 / 19";
pinkPixels[8].style.gridColumn = "19 / 20";
pinkPixels[8].style.gridRow = "18 / 19";
pinkPixels[9].style.gridColumn = "11 / 12";
pinkPixels[9].style.gridRow = "19 / 20";
pinkPixels[10].style.gridColumn = "20 / 21";
pinkPixels[10].style.gridRow = "19 / 20";
pinkPixels[11].style.gridColumn = "10 / 11";
pinkPixels[11].style.gridRow = "20 / 21";
pinkPixels[12].style.gridColumn = "21 / 22";
pinkPixels[12].style.gridRow = "20 / 21";
pinkPixels[13].style.gridColumn = "9 / 10";
pinkPixels[13].style.gridRow = "21 / 22";
pinkPixels[14].style.gridColumn = "22 / 22";

// Add more positioning for the heart shape
// ...
