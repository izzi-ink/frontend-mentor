function swapImageOnHover(originalImg, newImg) {
    originalImg.onmouseover = function () {
        originalImg.src = newImg;
    }
    originalImg.onmouseout = function () {
        originalImg.src = originalImg.getAttribute("data-original");
    }
}
