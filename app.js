const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const colorCode = document.querySelector(".color_code");
const copyBoard = document.querySelector("#copyBoard");

let rgb1 = "#fd009c";
let rgb2 = "#6c469c";

const getHexValues = () => '#' + Math.random().toString(16).substr(-6);

const updateGradient = () => {
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   colorCode.innerHTML = `background:linear-gradient(to right,${rgb1},${rgb2})`;
};

const showCopyBox = () => {
   Object.assign(copyBoard.style, {
      width: "35%",
      height: "450px",
      opacity: "1",
      fontSize: "45px",
      lineHeight: "450px",
   });
   if (window.copyTimeout) {
      clearTimeout(window.copyTimeout);
   }
   window.copyTimeout = setTimeout(hideCopyBox, 1500); // Hide copy box after 1.5 seconds
};

const hideCopyBox = () => {
   Object.assign(copyBoard.style, {
      width: "0",
      opacity: "0",
      fontSize: "0px"
   });
};

colorCode.addEventListener("click", () => {
   navigator.clipboard.writeText(colorCode.innerText);
   showCopyBox();
});

btn1.addEventListener("click", () => {
   rgb1 = getHexValues();
   btn1.innerText = rgb1;
   updateGradient();
});

btn2.addEventListener("click", () => {
   rgb2 = getHexValues();
   btn2.innerText = rgb2;
   updateGradient();
});

updateGradient();