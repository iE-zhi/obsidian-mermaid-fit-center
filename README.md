# Obsidian Mermaid Fit & Center

![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-1.2.0-green)

**English** | [中文说明](#中文说明)

## Introduction

A lightweight but powerful plugin designed to fix **Mermaid diagram truncation** issues when exporting notes to PDF in Obsidian. 

It is specifically optimized to work with the **Better Export PDF** plugin, ensuring that diagrams are:
1.  **Auto-scaled**: Large diagrams are shrunk to fit the page width (preventing right-side cut-off).
2.  **Smart-sized**: Small diagrams keep their original size (preventing pixelation from forced stretching).
3.  **Auto-centered**: All diagrams are perfectly centered on the page.

## The Problem

When exporting notes containing Mermaid diagrams (Flowcharts, Gantt charts, etc.) to PDF, especially A4 size:
* Wide diagrams often get **truncated (cut off)** on the right side.
* The built-in CSS often fails because Mermaid generates SVGs with hard-coded pixel widths.
* Manual CSS snippets can sometimes force small icons to stretch across the entire page, looking ugly.

## Features

* ✅ **Responsive Width**: Sets `max-width: 100%` for all diagrams during print/export.
* ✅ **Smart Resizing**: 
    * If the diagram is **wider** than the page, it shrinks to fit.
    * If the diagram is **smaller** than the page, it stays at its original clear resolution (no blurry stretching).
* ✅ **Perfect Centering**: Uses Flexbox to ensure diagrams are aligned to the center of the document.
* ✅ **Compatibility**: Works seamlessly with Obsidian's native PDF export and the **Better Export PDF** plugin.

## Usage

1.  Install and enable the plugin.
2.  No settings required—it works automatically in the background.
3.  Export your note to PDF.

*(Optional)* If a diagram doesn't resize immediately in the preview, you can run the command `Smart Resize & Center Mermaid` from the Command Palette (`Ctrl/Cmd + P`).

---

<h2 id="中文说明">中文说明</h2>

这是一个轻量级插件，专门用于修复 Obsidian 导出 PDF 时 **Mermaid 流程图被截断**或**显示不全**的问题。

它经过特别优化，完美支持 **Better Export PDF** 插件，并解决了普通 CSS 方案的痛点。

## 解决的痛点

当你将包含 Mermaid（流程图、甘特图等）的笔记导出为 PDF（尤其是 A4 纸）时，经常遇到以下问题：
* **大图被切**：图表太宽，超出了纸张边缘，右边被切掉了一半。
* **小图被拉伸**：使用普通的 CSS 强制缩放时，原本很小的图会被强行拉伸到整个页面宽度，变得模糊且难看。
* **无法居中**：图表默认靠左，打印出来不美观。

## 核心功能

* ✅ **自适应宽度**：导出时强制限制图表最大宽度为页面的 100%。
* ✅ **智能缩放 (Smart Resize)**：
    * **大图**：自动缩小以适应 A4 纸张宽度，防止截断。
    * **小图**：保持原始尺寸和清晰度，**拒绝强制拉伸**。
* ✅ **自动居中**：使用 Flex 布局，确保所有流程图在文档中水平居中显示。
* ✅ **强力兼容**：同时支持 Obsidian 原生导出和 **Better Export PDF** 插件。

## 使用方法

1.  安装并启用插件。
2.  **零配置**：无需任何设置，插件会在后台自动处理 DOM。
3.  直接导出 PDF 即可看到效果。

*(可选)* 如果在某些预览界面发现图表没有即时更新，可以在命令面板 (`Ctrl/Cmd + P`) 中运行 `Smart Resize & Center Mermaid` 命令。

## Installation / 安装

### Manual Install / 手动安装
1.  Download the `main.js`, `manifest.json`, and `styles.css` (if applicable) from the releases.
2.  Create a folder named `mermaid-fit-center` inside your vault's `.obsidian/plugins/` directory.
3.  Move the files into that folder.
4.  Reload Obsidian and enable the plugin in Settings.

### BRAT (Beta Reviewers Auto-update Tool)
1.  Install the **BRAT** plugin from the Community Plugins.
2.  Add this repository URL to BRAT.
3.  Enable the plugin.

---
**Enjoy your perfect PDFs!**