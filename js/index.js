const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Enable Dark Mode",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

function changeColor(elem, colorChoice) {
  // makes a given element a specified color - color must be in quotes
  return (elem.style.color = colorChoice);
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//// update the nav links ////
let linkNumber = 0;

for (let i = 1; i < 7; i++) {
  linkNumber = i;
  const navigation = document.querySelector(`nav a:nth-child(${linkNumber})`);
  navigation.textContent = siteContent["nav"][`nav-item-${linkNumber}`];
  changeColor(navigation, "green");
}

//// update the cta section ////
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImage = document.querySelector(".cta img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

//// update the main content section ////
// features
const featuresHeader = document.querySelector(".top-content .text-content h4");
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

const featuresParagraph = document.querySelector(
  ".top-content .text-content p"
);
featuresParagraph.textContent = siteContent["main-content"]["features-content"];

// about
const aboutHeader = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutParagraph = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// middle img
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// services
const servicesHeader = document.querySelector(
  ".bottom-content .text-content h4"
);
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

const servicesParagraph = document.querySelector(
  ".bottom-content .text-content p"
);
servicesParagraph.textContent = siteContent["main-content"]["services-content"];

// product
const productHeader = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productHeader.textContent = siteContent["main-content"]["product-h4"];

const productParagraph = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productParagraph.textContent = siteContent["main-content"]["product-content"];

// vision
const visionHeader = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

const visionParagraph = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionParagraph.textContent = siteContent["main-content"]["vision-content"];

//// update the contact section ////
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector(".contact p:nth-child(2)");
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelector(".contact p:nth-child(3)");
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector(".contact p:nth-child(4)");
contactEmail.textContent = siteContent["contact"]["email"];

//// update the footer section ////
const footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent["footer"]["copyright"];

//// add new nav links ////
const navigationLinkTeam = document.createElement("a");
navigationLinkTeam.textContent = "Our Team";
changeColor(navigationLinkTeam, "green");

const navigationLinkTerms = document.createElement("a");
navigationLinkTerms.textContent = "Terms";
changeColor(navigationLinkTerms, "green");

const navLinks = document.querySelector("nav");
navLinks.appendChild(navigationLinkTeam);
navLinks.appendChild(navigationLinkTerms);

//// stretch goals - dark mode ////
const body = document.querySelector("body");
body.style.background = "white";

function darkMode() {
  if (body.style.background === "white") {
    body.style.background = "black";
    changeColor(body, "white");
    logo.style.filter = "invert(100%)";

    ctaButton.style.background = "black";
    changeColor(ctaButton, "white");
    ctaButton.style.border = "1px double white";
    ctaButton.textContent = "Disable Dark Mode";

    const subHeaders = document.querySelectorAll("h4");
    for (i = 0; i < subHeaders.length; i++) {
      changeColor(subHeaders[i], "green");
    }

    const mainContent = document.querySelector(".main-content");
    mainContent.style.borderTop = "2px solid white";
    mainContent.style.borderBottom = "2px solid white";
  } else if (body.style.background === "black") {
    body.style.background = "white";
    changeColor(body, "black");
    logo.style.filter = "invert(0%)";

    ctaButton.style.background = "white";
    changeColor(ctaButton, "black");
    ctaButton.style.border = "1px double black";
    ctaButton.textContent = "Disable Dark Mode";

    const subHeaders = document.querySelectorAll("h4");
    for (i = 0; i < subHeaders.length; i++) {
      changeColor(subHeaders[i], "black");
    }

    const mainContent = document.querySelector(".main-content");
    mainContent.style.borderTop = "2px solid black";
    mainContent.style.borderBottom = "2px solid black";
  }
}
