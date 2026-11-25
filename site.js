
"use strict";

const copy = {
  zh: {
    skip: "跳到正文",
    mainNav: "主导航",
    language: "显示语言",
    navProjects: "项目",
    navSkills: "技能与经历",
    navContact: "联系方式",
    focus: "角色检索与漫画数据",
    available: "现居横滨，可在东京线下工作。",
    viewProjects: "查看项目",
    copy: "复制邮箱",
    copied: "邮箱地址已复制。",
    copyFailed: "复制失败，可在页脚选中邮箱地址。",
    intro: "我把版画学习和印刷品控中积累的图像判断力，用到图像采集、清洗和评测数据设计中。",
    japanese: "日语",
    kyoto: "京都精华大学",
    printmaking: "版画专业",
    residence: "持有日本在留资格",
    residenceType: "技术・人文知识・国际业务",
    yokohama: "现居横滨",
    tokyo: "东京通勤圈",
    projects: "项目",
    ragCategory: "图像检索与数据处理",
    ragTitle: "二次元角色图像检索",
    ragDescription: "从 Wikimedia Commons 采集有明确许可的插画，做质检和去重。支持日文、英文和图片查询，并根据角色属性重排结果。",
    ragImages: "采集 → 入索引",
    ragBoundary: "Recall@5 来自一条红色夹克查询。4 张相关图中，进入前 5 名的图片由 3 张增至 4 张。质检图含 3 张验证用对照样本。",
    repo: "在 GitHub 查看实现",
    ragTabs: "角色检索图表",
    ragRerankTab: "重排前后 Top-5",
    ragCleanTab: "清洗漏斗",
    ragTagsTab: "标签过滤分布",
    ragRerankCaption: "红色夹克查询。上排是向量检索，下排是按属性重排后的结果。",
    ragCleanCaption: "各阶段通过数量，以及被剔除的近重复和低分辨率样本。",
    ragTagsCaption: "WD14 原始标签与筛选出的角色属性标签分布。",
    mangaCategory: "漫画数据与日语 OCR",
    mangaTitle: "日语漫画版面评测",
    mangaDescription: "用 4 页原创日语漫画评测分镜、气泡检测、对白识别和阅读顺序，提供日中双语标注规范和 Label Studio 配置。",
    mangaScope: "4 页原创样张 · IoU ≥ 0.50",
    panelF1: "分镜检测 F1",
    bubbleF1: "气泡检测 F1",
    cer: "端到端字符错误率（CER）",
    mangaBoundary: "记录竖排拟声词、跨页书脊和网点干扰造成的错误。",
    mangaTabs: "漫画评测图表",
    mangaOverlayTab: "检测叠图",
    mangaBadTab: "三类失败案例",
    mangaMetricsTab: "评测指标",
    mangaOverlayCaption: "蓝框是分镜，绿框是气泡，右侧展示实测日文 OCR 结果。",
    mangaBadCaption: "竖排拟声词、跨页书脊和网点带来的失败案例。",
    mangaMetricsCaption: "检测 F1、字符错误率和阅读顺序的实测结果。",
    loraCategory: "训练数据品控",
    loraTitle: "LoRA 数据质检 A/B",
    loraDescription: "用原创角色样本检查水印、多人同框、低分辨率、标签冲突、近重复和极端宽高比。两组采用相同训练设置，便于对照评测。",
    loraImages: "A 原始 → B 清洗",
    loraPairs: "配对比较生成图",
    loraBoundary: "在 RTX 4070 Ti 上用 tiny SDXL 对每组训练 2 步，验证 LoRA 保存、重载和固定 Prompt 与 Seed 生成的 12 张配对评测图。Colab 提供完整 SDXL 训练与盲评入口，全尺寸流程尚未验证。",
    colab: "打开 Colab",
    loraCompareCaption: "上排是原始数据，下排是质检和裁剪分桶后的样本。",
    loraBucketsCaption: "长宽比分桶分布及各类过滤原因。",
    skills: "技能与经历",
    backgroundTitle: "从印刷品控到图像数据评测",
    education: "在京都精华大学版画专业学习色彩、构图，以及把画面转到纸面的制作工艺。",
    job: "目前从事印刷品制作和图像数据核对，检查分辨率、色彩模式与版面。项目中把这些检查习惯用在训练数据的剔除规则和漫画评测金标准上。",
    artPortfolio: "版画与视觉作品集",
    artMeta: "PDF · 29 页 · 约 69 MB",
    dataSkill: "采集与清洗",
    searchSkill: "多模态检索",
    ocrSkill: "OCR 与标注",
    trainingSkill: "LoRA 训练与图像制作",
    contact: "联系我",
    credits: "图片署名与许可证",
    zoom: "放大图片",
    preview: "图片预览",
    close: "关闭",
    title: "LU BIN（ロ ヒン） | ML Data Engineer 作品集",
    description: "LU BIN 的个人作品集，展示二次元角色检索、日语漫画 OCR 评测和 LoRA 数据质检。",
  },
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    language: "Display language",
    navProjects: "Projects",
    navSkills: "Skills & background",
    navContact: "Contact",
    focus: "Character retrieval and manga data",
    available: "Based in Yokohama and available for on-site work in Tokyo.",
    viewProjects: "See projects",
    copy: "Copy email",
    copied: "Email address copied.",
    copyFailed: "Copy failed. You can select the address in the footer.",
    intro: "I bring the visual judgment I developed in printmaking and print quality control to image collection, cleaning, and evaluation design.",
    japanese: "Japanese",
    kyoto: "Kyoto Seika University",
    printmaking: "Printmaking",
    residence: "Japanese residence status",
    residenceType: "Engineer / Specialist in Humanities / International Services",
    yokohama: "Based in Yokohama",
    tokyo: "Within commuting distance of Tokyo",
    projects: "Projects",
    ragCategory: "Image retrieval and data preparation",
    ragTitle: "Anime character image retrieval",
    ragDescription: "I collected licensed illustrations from Wikimedia Commons, checked image quality, and removed duplicates. The pipeline searches by Japanese or English text or by image, then reranks matches by character attributes.",
    ragImages: "Collected → indexed",
    ragBoundary: "Recall@5 is for one red-jacket query. The top five contained three of the four relevant images before reranking and all four afterward. The quality chart includes three test controls.",
    repo: "View implementation on GitHub",
    ragTabs: "Character retrieval figures",
    ragRerankTab: "Top 5 before and after",
    ragCleanTab: "Cleaning funnel",
    ragTagsTab: "Tag distribution",
    ragRerankCaption: "Red-jacket query. Vector results are above, with attribute reranking below.",
    ragCleanCaption: "Counts at each quality check, with examples of a rejected near duplicate and a low-resolution image.",
    ragTagsCaption: "Raw WD14 labels and the retained character attributes.",
    mangaCategory: "Manga data and Japanese OCR",
    mangaTitle: "Manga layout evaluation",
    mangaDescription: "On four original Japanese manga pages, I evaluated panel and bubble detection, dialogue recognition, and reading order. The repository includes Japanese–Chinese annotation guidelines and a Label Studio config.",
    mangaScope: "Four original pages · IoU ≥ 0.50",
    panelF1: "Panel detection F1",
    bubbleF1: "Bubble detection F1",
    cer: "End-to-end character error rate",
    mangaBoundary: "The failure review covers vertical sound effects, spread gutters, and screentone interference.",
    mangaTabs: "Manga evaluation figures",
    mangaOverlayTab: "Detection overlay",
    mangaBadTab: "Three failure cases",
    mangaMetricsTab: "Evaluation metrics",
    mangaOverlayCaption: "Blue boxes indicate panels, green boxes indicate bubbles, and the right column shows Japanese OCR output.",
    mangaBadCaption: "Observed failures on vertical sound effects, a spread gutter, and dense screentone.",
    mangaMetricsCaption: "Measured detection F1, character error rate, and reading order.",
    loraCategory: "Training data quality",
    loraTitle: "LoRA data curation A/B",
    loraDescription: "I used original character images to check for watermarks, multiple subjects, low resolution, conflicting tags, near duplicates, and extreme aspect ratios. Both groups use the same training settings.",
    loraImages: "A raw → B curated",
    loraPairs: "Generated comparison images",
    loraBoundary: "Two tiny SDXL training steps per group on an RTX 4070 Ti verified adapter saving, loading, and generation of 12 matched images with fixed prompts and seeds. Colab provides full-size SDXL training and blind evaluation. The full-size run is unverified.",
    colab: "Open Colab",
    loraCompareCaption: "Raw images above and quality-checked, bucket-cropped samples below.",
    loraBucketsCaption: "Aspect-ratio bucket counts and the reasons images were removed.",
    skills: "Skills & background",
    backgroundTitle: "From print quality control to image data evaluation",
    education: "I studied printmaking at Kyoto Seika University, where I learned about color, composition, and transferring an image to paper.",
    job: "In my current print production role, I verify image files, resolution, color modes, and layout. I apply those habits to training data inclusion criteria and manga evaluation annotations.",
    artPortfolio: "Printmaking and visual portfolio",
    artMeta: "PDF · 29 pages · about 69 MB",
    dataSkill: "Collection and cleaning",
    searchSkill: "Multimodal retrieval",
    ocrSkill: "OCR and annotation",
    trainingSkill: "LoRA training and graphic production",
    contact: "Contact",
    credits: "Image credits and licenses",
    zoom: "Enlarge image",
    preview: "Image preview",
    close: "Close",
    title: "LU BIN | ML Data Engineer portfolio",
    description: "LU BIN’s portfolio covering anime character retrieval, Japanese manga OCR evaluation, and LoRA data quality.",
  },
};

const root = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const languageAttributes = [["data-t", "textContent"], ["data-aria", "aria-label"], ["data-alt", "alt"]];
const textTargets = languageAttributes.flatMap(([attribute, destination]) =>
  [...document.querySelectorAll("[" + attribute + "]")].map(node => {
    const useText = destination === "textContent";
    return { node, key: node.getAttribute(attribute), destination, useText,
      initial: useText ? node.textContent : node.getAttribute(destination) };
  })
);
const title = document.title;
const description = metaDescription.content;
const feedback = document.querySelector("[data-copy-feedback]");
let currentLanguage = "ja";
let feedbackTimer;
let opener;

function languageChoice() {
  try {
    return localStorage.getItem("lu-bin-language") || "ja";
  } catch {
    return "ja";
  }
}

function selectLanguage(language) {
  if (!["ja", "zh", "en"].includes(language)) language = "ja";
  currentLanguage = language;
  root.lang = language === "zh" ? "zh-Hans" : language;
  const strings = copy[language] || {};
  for (const target of textTargets) {
    const value = strings[target.key] ?? target.initial;
    if (target.useText) target.node.textContent = value;
    else target.node.setAttribute(target.destination, value);
  }
  document.title = strings.title || title;
  metaDescription.content = strings.description || description;
  for (const button of languageButtons) button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  feedback.textContent = "";
  try {
    localStorage.setItem("lu-bin-language", language);
  } catch {
    // Session-only switching still works when storage is blocked.
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => selectLanguage(button.dataset.lang));
}
selectLanguage(languageChoice());
document.querySelector(".language").hidden = false;

function writeClipboardFallback(value) {
  const originalFocus = document.activeElement;
  const input = document.createElement("textarea");
  input.value = value;
  input.className = "clipboard-source";
  input.readOnly = true;
  document.body.append(input);
  try {
    input.select();
    if (!document.execCommand("copy")) throw new Error("Clipboard command failed");
  } finally {
    input.remove();
    originalFocus?.focus({ preventScroll: true });
  }
}

const copyButton = document.querySelector("[data-copy]");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const email = document.getElementById("email").textContent;
  let copied = false;
  try {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      writeClipboardFallback(email);
    }
    copied = true;
  } catch {
    // Keep the address selectable in the footer for manual copying.
  }
  const localized = copy[currentLanguage];
  clearTimeout(feedbackTimer);
  feedback.textContent = copied
    ? localized?.copied ?? "メールアドレスをコピーしました。"
    : localized?.copyFailed ?? "コピーできませんでした。フッターのメールアドレスを選択できます。";
  feedbackTimer = setTimeout(() => { feedback.textContent = ""; }, 4500);
});

function setupGallery(gallery) {
  const tabList = gallery.querySelector('[role="tablist"]');
  const tabs = [...tabList.querySelectorAll('[role="tab"]')];

  function activate(selected) {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.tabIndex = active ? 0 : -1;
      tab.setAttribute("aria-selected", String(active));
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
    }
  }

  for (const tab of tabs) {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", event => {
      const index = tabs.indexOf(tab);
      const nextIndex = { ArrowLeft: (index - 1 + tabs.length) % tabs.length,
        ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
      if (nextIndex === undefined) return;
      event.preventDefault();
      const next = tabs[nextIndex];
      activate(next);
      next.focus();
    });
  }
  activate(tabs[0]);
  gallery.classList.add("enhanced");
  tabList.hidden = false;
}

document.querySelectorAll("[data-gallery]").forEach(setupGallery);

const lightbox = document.getElementById("lightbox");
const fullImage = document.getElementById("lightbox-image");
const fullCaption = document.getElementById("lightbox-caption");
const closeButton = lightbox.querySelector("[data-close]");

for (const figure of document.querySelectorAll("[data-zoom]")) {
  figure.addEventListener("click", event => {
    if (typeof lightbox.showModal !== "function" || event.defaultPrevented ||
        event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    opener = figure;
    fullImage.alt = figure.querySelector("img").alt;
    fullImage.src = figure.href;
    fullCaption.textContent = figure.nextElementSibling.textContent;
    lightbox.showModal();
  });
}
closeButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target !== lightbox) return;
  const area = lightbox.getBoundingClientRect();
  if (event.clientX < area.left || event.clientX > area.right ||
      event.clientY < area.top || event.clientY > area.bottom) lightbox.close();
});
lightbox.addEventListener("close", () => {
  opener?.focus({ preventScroll: true });
  fullImage.removeAttribute("src");
});

const pct = (value, digits = 0) => (value * 100).toFixed(digits) + "%";
fetch("assets/results.json")
  .then(response => {
    if (!response.ok) throw new Error("Results unavailable: " + response.status);
    return response.json();
  })
  .then(({ retrieval, manga, lora }) => {
    const results = {
      ragImages: [retrieval.licensed, retrieval.indexed].join(" → "),
      recall: retrieval.demo.recall_at_5.map(value => pct(value)).join(" → "),
      panel: pct(manga.detection.panel.f1, 1),
      bubble: pct(manga.detection.bubble.f1, 1),
      cer: pct(manga.ocr.end_to_end_cer, 1),
      loraImages: [lora.raw, lora.curated].join(" → "),
      loraPairs: lora.pairingImages,
    };
    for (const element of document.querySelectorAll("[data-result]")) {
      element.textContent = results[element.dataset.result];
    }
  })
  .catch(() => {
    // The HTML carries the same recorded values when the data file is unavailable.
  });
