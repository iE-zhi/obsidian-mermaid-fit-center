const { Notice, Plugin } = require("obsidian");

class MermaidAutoFitPlugin extends Plugin {
	onload() {
		this.addCommand({
			id: "refresh-mermaid-layout",
			name: "Refresh Mermaid layout",
			callback: () => {
				this.refreshMermaidLayout();
				new Notice("Mermaid diagram layout refreshed.");
			},
		});
	}

	refreshMermaidLayout() {
		for (const diagram of document.querySelectorAll(".mermaid")) {
			diagram.classList.add("mermaid-auto-fit-refresh");
			// Reading the layout between class changes ensures that already-rendered
			// diagrams are recalculated before a PDF export starts.
			void diagram.offsetWidth;
			diagram.classList.remove("mermaid-auto-fit-refresh");
		}
	}
}

module.exports = MermaidAutoFitPlugin;
