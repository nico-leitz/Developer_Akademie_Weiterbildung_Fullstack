function getHTMLForImage(index) {
  return `
    <div class="generatedImageContainer">
      <img src="./assets/img/img${imageArray[index]}.png"
           alt="${imageAlt[index]}"
           class="generatedImage"
           onclick="renderDialog(${index})"
           onkeydown="imgToModal(event, ${index})"
           tabindex="0">
    </div>`;
}
