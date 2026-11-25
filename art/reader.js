
"use strict";

const translations = {
  zh: {
    skip: "跳到正文", projects: "技术项目", art: "版画作品集", contact: "联系方式",
    navigation: "主导航", language: "显示语言", heading: "版画与视觉作品集",
    intro: "曾在京都精华大学专攻版画。这里收录版画和摄影作品。",
    front: "封面与个人简介", prints: "版画", photos: "摄影",
    pdf: "打开原版 PDF · 约 69 MB", reader: "作品集阅读器", previous: "上一页", next: "下一页",
    zoom: "放大当前页", index: "全部 29 页", footerName: "LU BIN（ロ ヒン）",
    home: "返回作品集首页", credits: "技术图表署名", close: "关闭",
    page: number => "作品集第 " + number + " 页",
    title: "版画与视觉作品集 | LU BIN",
  },
  en: {
    skip: "Skip to content", projects: "Technical projects", art: "Art portfolio", contact: "Contact",
    navigation: "Main navigation", language: "Display language", heading: "Printmaking and visual portfolio",
    intro: "A collection of prints and photographs. I studied printmaking at Kyoto Seika University.",
    front: "Cover and profile", prints: "Printmaking", photos: "Photography",
    pdf: "Open original PDF · about 69 MB", reader: "Portfolio reader", previous: "Previous page", next: "Next page",
    zoom: "Enlarge current page", index: "All 29 pages", footerName: "LU BIN",
    home: "Portfolio home", credits: "Technical image credits", close: "Close",
    page: number => "Portfolio page " + number,
    title: "Printmaking and visual portfolio | LU BIN",
  },
};

const reader = document.getElementById("reader");
const pages = [...reader.querySelectorAll("[data-page]")];
const artwork = document.getElementById("current-page");
const stage = document.getElementById("page-view");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const counter = document.getElementById("page-counter");
const box = document.getElementById("lightbox");
const enlarged = document.getElementById("lightbox-image");
const lightboxCounter = document.getElementById("lightbox-title");
const closer = box.querySelector("[data-close]");
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const originalTitle = document.title;
const targets = [...document.querySelectorAll("[data-t], [data-aria]")].map(node => {
  const isText = node.hasAttribute("data-t");
  return { node, isText, key: isText ? node.dataset.t : node.dataset.aria,
    original: isText ? node.textContent : node.getAttribute("aria-label") };
});
let language = "ja";
let activePage = 1;

const padded = number => String(number).padStart(2, "0");
const label = number => translations[language]?.page(number) ?? "作品集の" + number + "ページ目";

function selectPage(page, updateAddress = true) {
  if (!Number.isInteger(page) || page < 1 || page > pages.length) return;
  activePage = page;
  const activeLink = pages[page - 1];
  stage.href = activeLink.href;
  artwork.src = activeLink.href;
  artwork.alt = label(page);
  previous.disabled = page === 1;
  next.disabled = page === pages.length;
  for (const link of pages) {
    if (link === activeLink) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
  const position = padded(page) + " / " + padded(pages.length);
  counter.textContent = position;
  lightboxCounter.textContent = position;
  if (box.open) {
    enlarged.src = stage.href;
    enlarged.alt = artwork.alt;
  }
  if (updateAddress) history.replaceState(null, "", "#page-" + padded(page));
}

function addressPage() {
  const found = /^#page-(\d{1,2})$/.exec(location.hash);
  const page = found ? Number(found[1]) : 1;
  return page >= 1 && page <= pages.length ? page : 1;
}

function selectLanguage(value) {
  language = ["ja", "zh", "en"].includes(value) ? value : "ja";
  const localized = translations[language] ?? {};
  document.documentElement.lang = language === "zh" ? "zh-Hans" : language;
  document.title = localized.title ?? originalTitle;
  for (const item of targets) {
    const text = localized[item.key] ?? item.original;
    if (item.isText) item.node.textContent = text;
    else item.node.setAttribute("aria-label", text);
  }
  for (const button of languageButtons) button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  for (const [index, page] of pages.entries()) page.setAttribute("aria-label", label(index + 1));
  artwork.alt = label(activePage);
  if (box.open) enlarged.alt = artwork.alt;
  try {
    localStorage.setItem("lu-bin-language", language);
  } catch {
    // Keep the selected language for the current page if storage is unavailable.
  }
}

let initialLanguage = "ja";
try {
  initialLanguage = localStorage.getItem("lu-bin-language") || "ja";
} catch {
  // Japanese is the default.
}
selectLanguage(initialLanguage);
for (const button of languageButtons) button.addEventListener("click", () => selectLanguage(button.dataset.lang));
document.querySelector(".language").hidden = false;
document.querySelector("[data-controls]").hidden = false;

const unmodifiedClick = event => event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey;
for (const [index, link] of pages.entries()) {
  link.addEventListener("click", event => {
    if (!unmodifiedClick(event)) return;
    event.preventDefault();
    selectPage(index + 1);
    const position = stage.getBoundingClientRect();
    if (position.top > window.innerHeight || position.bottom < 120) {
      reader.scrollIntoView({ block: "start", behavior: "instant" });
    }
    stage.focus({ preventScroll: true });
  });
}
previous.addEventListener("click", () => selectPage(activePage - 1));
next.addEventListener("click", () => selectPage(activePage + 1));
window.addEventListener("hashchange", () => selectPage(addressPage(), false));
selectPage(addressPage(), false);

stage.addEventListener("click", event => {
  if (!unmodifiedClick(event) || typeof box.showModal !== "function") return;
  event.preventDefault();
  enlarged.src = stage.href;
  enlarged.alt = artwork.alt;
  box.showModal();
});
closer.addEventListener("click", () => box.close());
box.addEventListener("close", () => {
  enlarged.removeAttribute("src");
  stage.focus({ preventScroll: true });
});
box.addEventListener("click", event => {
  if (event.target !== box) return;
  const area = box.getBoundingClientRect();
  if (event.clientX < area.left || event.clientX > area.right ||
      event.clientY < area.top || event.clientY > area.bottom) box.close();
});

function arrowToPage(event) {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  selectPage(activePage + (event.key === "ArrowRight" ? 1 : -1));
}
stage.addEventListener("keydown", arrowToPage);
box.addEventListener("keydown", arrowToPage);
