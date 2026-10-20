// Alvernia University - AI 101 Midterm Project Prototype
// Student: Alhanouf Turki Gazzaz
// Features: Dynamic Category Filtering, Real-Time Search, Modal Inspector, AI Palette Harmonizer

const artData = [
  {
    id: 1,
    title: "Nocturne Wanderer",
    category: "portrait",
    badgeLabel: "Portrait",
    badgeClass: "badge-portrait",
    description: "Stylized character portrait emphasizing expressive rim-lighting, dynamic brushwork, and high-contrast facial contours.",
    tags: ["Portrait", "Stylized", "Digital"],
    date: "September 2026",
    tools: "Photoshop, Digital Tablet, Custom Soft Brushes",
    aiStatus: "None (Hand-drawn original digital work)",
    gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Anatomy & Gesture Study 04",
    category: "sketch",
    badgeLabel: "Sketch",
    badgeClass: "badge-sketch",
    description: "Loose gestural figure sketch exploring balance, line of action, and anatomical volume for dynamic posing.",
    tags: ["Sketch", "Figure", "Linework"],
    date: "August 2026",
    tools: "Graphite Pencil & Digital Clean-up",
    aiStatus: "None (Direct observation gesture drawing)",
    gradient: "linear-gradient(135deg, #334155, #1e293b)",
    icon: "✏️"
  },
  {
    id: 3,
    title: "Cyber-Glow Palette Variant",
    category: "generated",
    badgeLabel: "AI-Assisted",
    badgeClass: "badge-generated",
    description: "Algorithmic color harmonization applying cyan-magenta grading over a base stylized linework character render.",
    tags: ["Colorway", "AI-Harmonized", "Cyberpunk"],
    date: "October 2026",
    tools: "Stylized Base Lineart + Generative Palette Tuning",
    aiStatus: "Labeled Generative Derivative (AI assisted colorway tuning)",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    icon: "✨"
  },
  {
    id: 4,
    title: "Ethereal Gaze in Umber",
    category: "portrait",
    badgeLabel: "Portrait",
    badgeClass: "badge-portrait",
    description: "Close-up character study exploring specular highlights across the eyes and subtle ambient occlusion in skin tones.",
    tags: ["Portrait", "Ambient Occlusion", "Digital"],
    date: "July 2026",
    tools: "Digital Painting Suite, Texture Overlays",
    aiStatus: "None (Independent digital art)",
    gradient: "linear-gradient(135deg, #b45309, #d97706)",
    icon: "🖌️"
  },
  {
    id: 5,
    title: "Mechanical Wing Concept",
    category: "sketch",
    badgeLabel: "Sketch",
    badgeClass: "badge-sketch",
    description: "Preliminary structural concept layout of mechanical feathered wing joints, cross-hatching, and perspective lines.",
    tags: ["Concept", "Sketch", "Linework"],
    date: "June 2026",
    tools: "Digital Linework Brush, Isometric Guides",
    aiStatus: "None (Original draft concept)",
    gradient: "linear-gradient(135deg, #475569, #0f172a)",
    icon: "📐"
  },
  {
    id: 6,
    title: "Solar Dusk Experimental Scheme",
    category: "generated",
    badgeLabel: "AI-Assisted",
    badgeClass: "badge-generated",
    description: "Harmonized chromatic palette experiment mapping solar flares and twilight oranges across facial planes.",
    tags: ["Palette", "AI-Assisted", "Experimental"],
    date: "October 2026",
    tools: "Generative Harmonizer & Contrast Calibrator",
    aiStatus: "Labeled Generative Derivative (AI color harmony model)",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    icon: "☀️"
  }
];

const palettePresets = {
  warm: [
    { name: "Deep Carmine", hex: "#991b1b", text: "#fff" },
    { name: "Solar Amber", hex: "#f59e0b", text: "#000" },
    { name: "Desert Sand", hex: "#fde68a", text: "#000" },
    { name: "Warm Umber", hex: "#78350f", text: "#fff" }
  ],
  cool: [
    { name: "Electric Cyan", hex: "#06b6d4", text: "#000" },
    { name: "Neon Violet", hex: "#8b5cf6", text: "#fff" },
    { name: "Midnight Navy", hex: "#1e1b4b", text: "#fff" },
    { name: "Biolum Glint", hex: "#a7f3d0", text: "#000" }
  ],
  earth: [
    { name: "Deep Olive", hex: "#3f6212", text: "#fff" },
    { name: "Moss Green", hex: "#65a30d", text: "#000" },
    { name: "Raw Ochre", hex: "#ca8a04", text: "#000" },
    { name: "Bark Charcoal", hex: "#292524", text: "#fff" }
  ],
  monochrome: [
    { name: "Pitch Charcoal", hex: "#0f172a", text: "#fff" },
    { name: "Slate Shadow", hex: "#475569", text: "#fff" },
    { name: "Pencil Tone", hex: "#94a3b8", text: "#000" },
    { name: "Vellum White", hex: "#f8fafc", text: "#000" }
  ]
};

// State
let currentCategory = "all";
let currentSearch = "";

// DOM Elements
const artGrid = document.getElementById("artGrid");
const emptyMessage = document.getElementById("emptyMessage");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const moodSelect = document.getElementById("moodSelect");
const generatePaletteBtn = document.getElementById("generatePaletteBtn");
const paletteDisplay = document.getElementById("paletteDisplay");
const paletteFeedback = document.getElementById("paletteFeedback");

// Modal DOM
const artModal = document.getElementById("artModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDate = document.getElementById("modalDate");
const modalTools = document.getElementById("modalTools");
const modalAiStatus = document.getElementById("modalAiStatus");
const modalBadge = document.getElementById("modalBadge");
const modalVisual = document.getElementById("modalVisual");

// Render Gallery
function renderGallery() {
  artGrid.innerHTML = "";
  
  const filtered = artData.filter(item => {
    const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
    const searchTarget = (item.title + " " + item.description + " " + item.tags.join(" ")).toLowerCase();
    const matchesSearch = searchTarget.includes(currentSearch.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "art-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", item.title);

      card.innerHTML = `
        <div class="card-canvas" style="background: ${item.gradient};">
          <span style="font-size: 3.5rem;">${item.icon}</span>
          <span class="card-badge ${item.badgeClass}">${item.badgeLabel}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-tags">
            ${item.tags.map(t => `<span class="tag-item">#${t}</span>`).join("")}
          </div>
          <button class="btn-card" data-id="${item.id}">Inspect Details</button>
        </div>
      `;

      card.addEventListener("click", () => openModal(item));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(item);
        }
      });
      artGrid.appendChild(card);
    });
  }
}

// Open Modal
function openModal(item) {
  modalTitle.innerText = item.title;
  modalDesc.innerText = item.description;
  modalDate.innerText = item.date;
  modalTools.innerText = item.tools;
  modalAiStatus.innerText = item.aiStatus;
  modalBadge.className = `card-badge ${item.badgeClass}`;
  modalBadge.innerText = item.badgeLabel;
  modalVisual.style.background = item.gradient;
  modalVisual.innerHTML = `<span style="font-size: 4rem;">${item.icon}</span>`;
  
  artModal.classList.remove("hidden");
}

function closeModal() {
  artModal.classList.add("hidden");
}

modalCloseBtn.addEventListener("click", closeModal);
artModal.addEventListener("click", (e) => {
  if (e.target === artModal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !artModal.classList.contains("hidden")) {
    closeModal();
  }
});

// Category Filter Click
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderGallery();
  });
});

// Search Input Listener
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderGallery();
});

// AI Palette Generator Logic (Feature 2 & Pull Request Improvement)
function generatePalette() {
  const selectedMood = moodSelect.value;
  const swatches = palettePresets[selectedMood] || [];
  
  paletteDisplay.innerHTML = "";
  swatches.forEach(color => {
    const box = document.createElement("div");
    box.className = "swatch-box";
    box.style.backgroundColor = color.hex;
    box.style.color = color.text;
    box.innerHTML = `<span>${color.hex}</span>`;
    box.setAttribute("title", `${color.name}: ${color.hex}`);
    paletteDisplay.appendChild(box);
  });

  paletteFeedback.innerHTML = `Generated <strong>${swatches.length} harmonized swatches</strong> for aesthetic: <em>${selectedMood.toUpperCase()}</em>. Values ready for digital brush setup.`;
}

generatePaletteBtn.addEventListener("click", generatePalette);

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  generatePalette(); // preload initial preset
});
