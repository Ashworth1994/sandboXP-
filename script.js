const sessionNameInput = document.getElementById("session-name");
const sessionFocusSelect = document.getElementById("session-focus");
const generateButton = document.getElementById("generate-button");
const outputList = document.getElementById("output-list");
const sessionTag = document.getElementById("session-tag");
const liveTime = document.getElementById("live-time");

const planTemplates = {
  "Design systems": [
    "Audit the current components and identify reusable patterns.",
    "Prototype a visual system with consistent spacing, hierarchy, and tone.",
    "Review the new system against adoption goals and iterate on friction points."
  ],
  "Product research": [
    "Frame the user problem and map the key experience moments.",
    "Gather signal from conversations, usage data, and friction points.",
    "Translate insights into a focused prototype and test the strongest hypothesis."
  ],
  "UX exploration": [
    "Define the experience goal and identify the decision points users face.",
    "Sketch multiple interaction directions and compare the clarity of each path.",
    "Narrow to the strongest concept and validate the flow with quick feedback."
  ],
  "Rapid prototyping": [
    "Outline the simplest possible experience that demonstrates the value.",
    "Build a working prototype using fast-moving, low-cost iteration loops.",
    "Collect feedback, sharpen the concept, and prepare for the next version."
  ]
};

function updateLiveTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  liveTime.textContent = `live · ${formatted}`;
}

function generatePlan() {
  const sessionName = sessionNameInput.value.trim() || "Prototype runway";
  const focusMode = sessionFocusSelect.value;
  const steps = planTemplates[focusMode] || planTemplates["Rapid prototyping"];

  outputList.innerHTML = "";
  steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    outputList.appendChild(item);
  });

  sessionTag.textContent = sessionName.toLowerCase().replace(/\s+/g, "-");
}

sessionNameInput.addEventListener("input", () => {
  if (sessionNameInput.value.trim()) {
    sessionTag.textContent = sessionNameInput.value.trim().toLowerCase().replace(/\s+/g, "-");
  }
});

generateButton.addEventListener("click", generatePlan);

updateLiveTime();
setInterval(updateLiveTime, 30000);
generatePlan();
