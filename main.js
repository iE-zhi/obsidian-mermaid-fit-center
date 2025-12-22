/* main.js - v1.2.0 Smart Resize & Center */
var obsidian = require('obsidian');

class MermaidAutoFitPlugin extends obsidian.Plugin {
    async onload() {
        console.log('Mermaid Smart-Fit & Center Plugin loaded');

        this.addStyle();

        // 定时检查并修正 DOM
        this.registerInterval(
            window.setInterval(() => {
                this.fixMermaidSvgs();
            }, 2000)
        );
        
        this.addCommand({
            id: 'fix-mermaid-smart',
            name: 'Smart Resize & Center Mermaid',
            callback: () => {
                this.fixMermaidSvgs();
                new obsidian.Notice('Mermaid diagrams corrected.');
            }
        });
    }

    onunload() {
        const style = document.getElementById('mermaid-auto-fit-style');
        if (style) style.remove();
    }

    addStyle() {
        const existingStyle = document.getElementById('mermaid-auto-fit-style');
        if (existingStyle) existingStyle.remove();

        const css = `
            /* 打印与 PDF 导出专用样式 */
            @media print {
                /* 1. 容器居中设置 */
                .mermaid {
                    display: flex !important;
                    justify-content: center !important; /* 水平居中 */
                    align-items: center !important;
                    margin: 0 auto !important;
                    width: 100% !important;
                    text-align: center !important;
                    page-break-inside: avoid !important;
                }
                
                /* 2. SVG 智能缩放设置 */
                .mermaid svg {
                    /* 关键点：只设上限，不设固定宽度 */
                    max-width: 100% !important; 
                    height: auto !important;
                    
                    /* 确保不去覆盖 SVG 标签自带的 width="xxx" 属性 */
                    /* width: auto !important;  <-- 删除这一行，解决小图变大问题 */
                    
                    margin: 0 auto !important;
                    display: block !important;
                }
            }

            /* 预览模式修正 */
            .print .mermaid,
            .markdown-preview-view .mermaid {
                display: flex !important;
                justify-content: center !important;
            }
            .print .mermaid svg,
            .markdown-preview-view.is-readable-line-width .mermaid svg {
                max-width: 100% !important;
                height: auto !important;
                margin: 0 auto !important;
            }
        `;

        const styleEl = document.createElement('style');
        styleEl.id = 'mermaid-auto-fit-style';
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
    }

    fixMermaidSvgs() {
        const svgs = document.querySelectorAll('.mermaid svg');
        
        svgs.forEach(svg => {
            // 1. 这里的修正不再删除 width 属性，保留小图的原始尺寸
            
            // 2. 仅清理内联样式的冲突 (有些主题会强制 style="width: ...")
            // 我们希望由 CSS 的 max-width 来控制上限，由 SVG 属性控制原大小
            if (svg.style.width && svg.style.width !== 'auto') {
                 // 只有当内联宽度是 100% 或巨大像素时才干预，
                 // 但为了安全，直接让 CSS 接管是最好的
                 svg.style.width = ''; 
            }
            
            // 确保高度自适应，防止压扁
            svg.style.height = 'auto';
            svg.style.maxWidth = '100%';

            // 3. 确保父容器是 Flex 居中的
            const parent = svg.parentElement;
            if (parent && parent.classList.contains('mermaid')) {
                parent.style.display = 'flex';
                parent.style.justifyContent = 'center';
                parent.style.width = '100%';
            }
        });
    }
}

module.exports = MermaidAutoFitPlugin;