// harness/pi/manifest.mjs — the PI Agent distribution row.
//
// Projects core/ into dist/pi/.pi/: the native skill (skills/blogdlc/SKILL.md),
// a prompt template (/blogdlc), agents, phases, scopes, protocols, and engine
// tools. PI discovers project skills under .pi/skills/ and project prompt
// templates under .pi/prompts/ after project trust is granted.

const manifest = {
  name: "pi",
  productName: "PI Agent",
  harnessDir: ".pi",
  invoke: "/blogdlc",
  configNextStep: "run `pi`, then `/blogdlc --doctor`",
  orchestratorSkillPath: ".pi/skills/blogdlc/SKILL.md",

  // core/<src> -> <harnessDir>/<dst>
  coreDirs: [
    { src: "tools", dst: "tools" },
    { src: "phases", dst: "phases" },
    { src: "agents", dst: "agents" },
    { src: "scopes", dst: "scopes" },
    { src: "protocols", dst: "protocols" },
    { src: "knowledge", dst: "knowledge" },
    // Native skill directory: the orchestrator skill and the reference skills.
    { src: "skills", dst: "skills" },
  ],

  // core/<src> -> <harnessDir>/<dst> for individual files (none today)
  coreFiles: [],

  // harness/pi/<src> -> <harnessDir>/<dst>
  harnessFiles: [
    { src: "prompts/blogdlc.md", dst: "prompts/blogdlc.md" },
    { src: "settings.json", dst: "settings.json" },
  ],

  // harness/pi/<src> -> <projectRoot>/<dst>
  projectFiles: [{ src: "dot-gitignore", dst: ".gitignore" }],

  // core/<src> -> <projectRoot>/<dst>
  coreProjectFiles: [],

  onboarding: { src: "onboarding.md", dst: "AGENTS.md", projectRoot: true },
};

export default manifest;
