let tagText =
  document.currentScript.getAttribute("tagText") || "Made with CopyUI";
let tagLink =
  document.currentScript.getAttribute("tagLink") || "https://copyui.com";
let tagPosition =
  document.currentScript.getAttribute("tagPosition") || "bottom-right";
let background = document.currentScript.getAttribute("background") || "#000";
let textColor = document.currentScript.getAttribute("textColor") || "#fff";
let animated = document.currentScript.getAttribute("animated") || "true";

const css = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");
.maker__tag {position: fixed;z-index: 9999999999999999999999;font-size: 0.8em;background: ${background};
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    font-weight: 700;
    font-family: "Inter";
    border-radius: 10px;box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.163);
    text-decoration: none;
    ${
    animated === "true" && `animation: shine 5s infinite linear;`
    }
    background-size: 200% auto;
    transition: 0.5s;
}
.maker__tag.maker__tag__position--bottom-right {bottom: 10px;right: 10px;}
@keyframes shine {
  100% {
    background-position: -200%;
  }
}
.made__by__text {
  padding: 0;
  margin: 0;
  color: ${textColor};
}
.made__by__link {
  color: ${textColor};
  text-decoration: none;
}
`;

const head = document.head || document.getElementsByTagName("head")[0];
const style = document.createElement("style");

head.appendChild(style);

style.type = "text/css";
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// Create a div element to hold the widget
const widgetDiv = document.createElement("div");
widgetDiv.className = `maker__tag maker__tag__position--${tagPosition}`;

// Create an anchor element to hold the "made by" text
const anchorElem = document.createElement("a");
anchorElem.href = tagLink;
anchorElem.className = "made__by__link";
anchorElem.target = "_blank";

// Create a paragraph element to hold the text content
const paragraphElem = document.createElement("p");
paragraphElem.className = "made__by__text";
paragraphElem.textContent = tagText;

// Append the paragraph element to the anchor element, and the anchor element to the widget div
anchorElem.appendChild(paragraphElem);
widgetDiv.appendChild(anchorElem);

// Add the widget div to the body of the page
document.body.appendChild(widgetDiv);
