"use strict";

const copy = {
  zh: {
    skip: "跳到正文",
    mainNav: "主导航",
    language: "显示语言",
    navProjects: "实测项目",
    navSkills: "技能与经历",
    navArt: "版画作品集 (29P)",
    navContact: "联系我",
    specialty: "ML Data Engineer · 角色检索 / 漫画数据",
    focus: "二次元角色检索 × 日语漫画数据",
    available: "现居横滨，可随时东京线下入职。日语 N1 与科班视觉背景的图像数据工程师。",
    viewProjects: "查看实测项目",
    viewArt: "版画作品集 (29P)",
    copy: "复制邮箱",
    copied: "邮箱地址已复制。",
    copyFailed: "复制失败，可在页脚选中邮箱地址。",
    intro: "把京都精华大学版画功底与印刷级图像品控经验，直接用到二次元训练数据清洗、角色多模态检索与日漫 Eval 金标准建设中。",
    japanese: "无障碍阅读日文漫画与编写标注规范",
    kyoto: "京都精华大学",
    printmaking: "版画专业 · 二次元视觉审美",
    residence: "持有日本工作签证",
    residenceType: "技术・人文知识・国际业务",
    yokohama: "现居横滨",
    tokyo: "东京通勤圈 · 即刻入职",
    projects: "实测项目",
    ragCategory: "01 / 角色检索与数据清洗",
    ragTitle: "二次元角色多模态检索管线",
    ragDescription: "针对二次元图库常见的重复图、低质图与背景词干扰，构建从合规图源采集、Pillow/pHash 去重质检，到日英双语及以图搜角的完整检索管线。",
    ragImages: "采集 → 去重入库",
    ragBoundary: "过滤 WD14 背景与构图噪音词，提纯发色、瞳色与服饰标签，以 0.75 × SigLIP 2 + 0.25 × 属性重合率重排，典型查询 Recall@5 从 75% 提升至 100%（3/4 → 4/4）。",
    repo: "在 GitHub 查看实现 →",
    ragTabs: "角色检索图表",
    ragRerankTab: "重排前后 Top-5",
    ragCleanTab: "清洗漏斗",
    ragTagsTab: "标签过滤分布",
    ragRerankCaption: "红色夹克查询：上排为纯向量检索，下排为加入角色属性重排后的 Top-5。",
    ragCleanCaption: "各阶段通过数量，以及被 pHash 与分辨率规则拦截的重复、低清样本。",
    ragTagsCaption: "WD14 原始输出标签与提纯后保留的角色核心外观属性分布。",
    mangaCategory: "02 / 漫画数据与日语 OCR 评测",
    mangaTitle: "日语漫画版面解析与 Eval 金标准",
    mangaDescription: "面向日漫分镜检测、对白气泡提取、OCR 与右向左读序构建端到端评测基准，配套可直接发给标注团队的日中双语规范与 Label Studio 配置。",
    mangaScope: "IoU ≥ 0.50 基准评测实测",
    panelF1: "分镜检测 F1",
    bubbleF1: "气泡检测 F1",
    cer: "端到端 CER（含漏检惩罚）",
    mangaBoundary: "针对跨页书脊切断分镜、游离竖排拟声词与密集网点遮挡三大日漫痛点，输出结构化 JSONL 与失败案例拆解，用端到端 CER 直观暴露漏框与网点误差。",
    mangaTabs: "漫画评测图表",
    mangaOverlayTab: "检测叠图",
    mangaBadTab: "三大失败案例",
    mangaMetricsTab: "评测指标",
    mangaOverlayCaption: "蓝框为分镜，绿框为气泡，右侧展示实际 Manga OCR 日文识别结果。",
    mangaBadCaption: "三大典型日漫痛点：游离竖排拟声词、跨页书脊断框与高密度网点干扰。",
    mangaMetricsCaption: "分镜/气泡检测 F1、字符错误率与阅读顺序准确率实测汇总。",
    loraCategory: "03 / 训练数据 QA 与 A/B 实验",
    loraTitle: "LoRA 训练数据质检 A/B",
    loraDescription: "针对角色 LoRA 炼丹中常见的画风污染与崩坏，自动拦截水印、多人同框、低清、Tag 冲突、近重复与极端比例 6 类脏数据，并按 SDXL 长宽比分桶输出。",
    loraImages: "A 原始 → B 清洗",
    loraPairs: "固定 Seed 配对图",
    loraBoundary: "基于 Diffusers / PEFT 搭建固定参数 A/B 评测管线，提供全尺寸 SDXL 配置与 Colab 一键复现流程；本地已在 RTX 4070 Ti 跑通 tiny SDXL 训练、权重重载及 12 张固定 Seed 配对盲评闭环。",
    colab: "打开 Colab 复现 →",
    loraCompareCaption: "上排为未清洗原始样本，下排为通过 6 项 QA 并完成分桶裁剪的数据集。",
    loraBucketsCaption: "SDXL 多比例分桶数量分布及 6 类脏数据拦截统计。",
    skills: "技能与背景",
    backgroundTitle: "把版画与印刷 QA 的审美品控力，带进 AI 数据工程",
    education: "毕业于京都精华大学版画专业，系统训练了构图、色彩、线稿表现与成像工艺，长期深耕 ACGN 文化。",
    job: "现职负责平面印刷品的图像核对与交付品控，对像素瑕疵、网点密度与版面规范极为敏感——项目中将这套 QA 习惯直接落地为训练集清洗规则与漫画 Eval 金标准。",
    artPortfolio: "版画与视觉作品集（全 29 页）",
    artMeta: "在线浏览个人造型与色彩作品集 →",
    dataSkill: "数据采集与清洗",
    searchSkill: "多模态检索与重排",
    ocrSkill: "漫画解析与标注规范",
    trainingSkill: "LoRA 质检与视觉工具",
    contact: "联系我",
    credits: "图片署名与许可证",
    zoom: "放大图片",
    preview: "图片预览",
    close: "关闭",
    title: "LU BIN（ロ ヒン） | ML Data Engineer 作品集",
    description: "LU BIN 的个人作品集：二次元角色多模态检索、日语漫画 OCR 评测基准与 LoRA 数据质检。",
  },
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    language: "Display language",
    navProjects: "Projects",
    navSkills: "Skills & Background",
    navArt: "Art Portfolio (29P)",
    navContact: "Contact",
    specialty: "ML Data Engineer · Character Retrieval / Manga Data",
    focus: "Anime Character Retrieval × Manga Data",
    available: "Based in Yokohama, ready for on-site work in Tokyo. JLPT N1 + fine-art QA background.",
    viewProjects: "Explore Projects",
    viewArt: "Art Portfolio (29P)",
    copy: "Copy email",
    copied: "Email address copied.",
    copyFailed: "Copy failed. You can select the address in the footer.",
    intro: "Bringing printmaking aesthetics and commercial print QA rigor to anime dataset curation, multimodal character retrieval, and Japanese manga evaluation benchmarks.",
    japanese: "Native-level Japanese reading & guideline authoring",
    kyoto: "Kyoto Seika Univ.",
    printmaking: "Printmaking · Anime visual literacy",
    residence: "Valid Japan Work Visa",
    residenceType: "Engineer / Humanities / Int'l Services",
    yokohama: "Yokohama",
    tokyo: "Tokyo commuting area · Ready to join",
    projects: "Measured Projects",
    ragCategory: "01 / Character Retrieval & Curation",
    ragTitle: "Anime Character Multimodal Retrieval",
    ragDescription: "Built an end-to-end curation and search pipeline: licensed image crawling, Pillow/pHash deduplication, and bilingual text-to-image & image-to-image search with character-attribute reranking.",
    ragImages: "Crawled → Indexed",
    ragBoundary: "Filtered noisy background tags from WD14 to isolate hair, eye, and outfit attributes, then reranked SigLIP 2 + Faiss candidates (0.75 cosine + 0.25 tag overlap), lifting Recall@5 from 75% to 100%.",
    repo: "View on GitHub →",
    ragTabs: "Character retrieval figures",
    ragRerankTab: "Top-5 Rerank",
    ragCleanTab: "Cleaning Funnel",
    ragTagsTab: "Tag Filtering",
    ragRerankCaption: "Red-jacket query: raw vector search above vs. attribute-reranked Top-5 below.",
    ragCleanCaption: "Pipeline pass-through counts alongside rejected near-duplicate and low-res samples.",
    ragTagsCaption: "Raw WD14 predictions vs. retained character-defining attributes.",
    mangaCategory: "02 / Manga Data & Japanese OCR Eval",
    mangaTitle: "Japanese Manga Layout & Eval Benchmark",
    mangaDescription: "End-to-end evaluation for panel/bubble detection, Japanese OCR, and right-to-left reading order—complete with bilingual JA/ZH annotation guidelines and Label Studio templates.",
    mangaScope: "Measured at IoU ≥ 0.50",
    panelF1: "Panel detection F1",
    bubbleF1: "Bubble detection F1",
    cer: "End-to-end CER (incl. misses)",
    mangaBoundary: "Targets three real Japanese manga failure modes—spread gutters cutting panels, free-floating vertical SFX, and dense screentones—surfacing bottlenecks via end-to-end CER.",
    mangaTabs: "Manga evaluation figures",
    mangaOverlayTab: "Detection Overlay",
    mangaBadTab: "3 Failure Modes",
    mangaMetricsTab: "Metrics Summary",
    mangaOverlayCaption: "Blue = panels, green = bubbles, with live Manga OCR Japanese output on the right.",
    mangaBadCaption: "Documented failures: floating vertical SFX, spread gutter splits, and dense screentones.",
    mangaMetricsCaption: "Detection F1, CER breakdown, and reading-order pair accuracy.",
    loraCategory: "03 / Training Data QA & A/B Pipeline",
    loraTitle: "LoRA Dataset Curation A/B",
    loraDescription: "Automated QA gate blocking 6 common LoRA spoilers—watermarks, multi-character frames, low resolution, conflicting tags, near duplicates, and extreme ratios—with SDXL bucketing.",
    loraImages: "A Raw → B Curated",
    loraPairs: "Seed-Matched Pairs",
    loraBoundary: "Built a controlled Diffusers/PEFT A/B pipeline with full SDXL configs and a one-click Colab workflow; verified end-to-end training, LoRA reload, and 12 seed-matched blind eval images locally on an RTX 4070 Ti.",
    colab: "Open in Colab →",
    loraCompareCaption: "Raw uncurated inputs above vs. QA-filtered, bucket-cropped samples below.",
    loraBucketsCaption: "SDXL aspect-ratio bucket counts and rejection breakdown across 6 QA rules.",
    skills: "Skills & Background",
    backgroundTitle: "From Print Quality Control to AI Data Engineering",
    education: "Trained in printmaking at Kyoto Seika University—developing a sharp eye for linework, color balance, composition, and ACGN aesthetics.",
    job: "In my current commercial print role, I verify resolution, halftones, color modes, and layout specs daily—habits that translate directly into dataset filtering rules and manga evaluation standards.",
    artPortfolio: "Printmaking & Visual Portfolio (29 Pages)",
    artMeta: "Browse the full 29-page visual archive →",
    dataSkill: "Ingestion & Cleaning",
    searchSkill: "Multimodal Retrieval",
    ocrSkill: "Manga Eval & Guidelines",
    trainingSkill: "LoRA QA & Visual Tools",
    contact: "Contact",
    credits: "Image Credits & Licenses",
    zoom: "Enlarge image",
    preview: "Image Preview",
    close: "Close",
    title: "LU BIN | ML Data Engineer Portfolio",
    description: "LU BIN's portfolio: anime character retrieval, Japanese manga OCR evaluation, and LoRA training data QA.",
  },
};

const root = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const languageAttributes = [["data-t", "textContent"], ["data-aria", "aria-label"], ["data-alt", "alt"]];
const textTargets = languageAttributes.flatMap(([attribute, destination]) =>
  [...document.querySelectorAll("[" + attribute + "]")].map(node => {
    const useText = destination === "textContent";
    return {
      node,
      key: node.getAttribute(attribute),
      destination,
      useText,
      initial: useText ? node.textContent : node.getAttribute(destination),
    };
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
    const saved = localStorage.getItem("lu-bin-language");
    if (saved && ["ja", "zh", "en"].includes(saved)) return saved;
  } catch {
    // Ignore storage access errors.
  }
  const browserLang = (navigator.language || "").toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ja")) return "ja";
  return "en";
}

function selectLanguage(language, persist = true) {
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
  for (const button of languageButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  }
  feedback.textContent = "";
  if (persist) {
    try {
      localStorage.setItem("lu-bin-language", language);
    } catch {
      // Session-only switching still works when storage is blocked.
    }
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => selectLanguage(button.dataset.lang, true));
}
selectLanguage(languageChoice(), false);
document.querySelector(".language").hidden = false;

// Sticky header frosted state & scroll-spy
const masthead = document.getElementById("masthead");
const navLinks = [...document.querySelectorAll('.navigation a[href^="#"]')];
const observedSections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateMasthead() {
  if (!masthead) return;
  masthead.classList.toggle("scrolled", window.scrollY > 16);
}
window.addEventListener("scroll", updateMasthead, { passive: true });
updateMasthead();

if ("IntersectionObserver" in window && observedSections.length) {
  const spyObserver = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = "#" + entry.target.id;
        for (const link of navLinks) {
          link.classList.toggle("is-active", link.getAttribute("href") === id);
        }
      }
    },
    { rootMargin: "-28% 0px -58% 0px", threshold: 0 }
  );
  observedSections.forEach(sec => spyObserver.observe(sec));
}

// Progressive scroll-reveal for projects, skills, and footer
const revealTargets = [...document.querySelectorAll(".project, .skills-layout, .footer-inner")];
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach(el => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );
  revealTargets.forEach(el => revealObserver.observe(el));
}

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
      const nextIndex = {
        ArrowLeft: (index - 1 + tabs.length) % tabs.length,
        ArrowRight: (index + 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];
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
    if (
      typeof lightbox.showModal !== "function" ||
      event.defaultPrevented ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }
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
  if (
    event.clientX < area.left ||
    event.clientX > area.right ||
    event.clientY < area.top ||
    event.clientY > area.bottom
  ) {
    lightbox.close();
  }
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
