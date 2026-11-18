/* ==========================================================
   CONTENT FOR samiulalam.site/science
   Each study cycles through its "states" (control, stress, treatment).
   counts = how many moving particles show in each state.
   vals   = meter levels from 0 to 1 in each state.
   on / glow lists = the states (0, 1, 2 ...) in which a part is shown or lit.
   Every list must have one entry per state.
   ========================================================== */

window.SCIENCE = {

  question: "How do crops keep growing when the soil turns salty, dry or toxic?",
  intro: "Across salinity, drought and toxic metals, my studies come back to the same question. Each panel shows one study as an animated illustration. It moves from normal conditions, to stress, to the treatment we tested.",
  note: "The drawings are schematics, not plots of the data. Transporter and pathway names (HKT1, SOS1, NHX, Lsi1, the AsA-GSH cycle and others) show the established mechanisms these studies build on. What each study itself found is in its caption and paper.",

  projects: [

    {
      years: "2023 - 2025",
      title: "Plant growth-promoting bacteria for rice under salt stress",
      context: "MSc thesis · Sher-e-Bangla Agricultural University · under review, International Journal of Molecular Sciences",
      template: "root",
      soil: "Saline soil · Na⁺",
      channels: [
        { name: "HKT1", ion: "Na⁺", color: "#e0a64b", dir: "in", y: 62, counts: [1, 5, 3] },
        { name: "NSCC", ion: "Na⁺", color: "#e0a64b", dir: "in", y: 100, counts: [1, 6, 3] },
        { name: "AKT1", ion: "K⁺", color: "#7ed6a0", dir: "in", y: 140, counts: [5, 2, 4] },
        { name: "GORK", ion: "K⁺", color: "#7ed6a0", dir: "out", y: 182, counts: [0, 6, 3] },
        { name: "SOS1", ion: "Na⁺", color: "#e0a64b", dir: "out", y: 224, counts: [0, 3, 3] }
      ],
      nhx: { counts: [0, 3, 3] },
      ros: { counts: [1, 7, 3], on: [1, 2] },
      microbe: { label: "Mangrovibacter sp.", on: [2] },
      meters: [
        { label: "Na⁺ / K⁺ ratio", vals: [0.2, 0.9, 0.5] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.45] },
        { label: "Antioxidant defence", vals: [0.3, 0.55, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. AKT1 brings in K⁺, little Na⁺ enters and ROS stay low." },
        { label: "Salt stress", caption: "Salt stress. Na⁺ floods in through HKT1 and NSCC, K⁺ leaks out through GORK and ROS build up." },
        { label: "Salt + PGPR", caption: "Salt + Mangrovibacter sp. The rhizobacterium is tested as a biostimulant for rice under salinity." }
      ],
      doi: ""
    },

    {
      years: "2024 - 2026",
      title: "Arsenic toxicity in rice (<i>Oryza sativa</i> L.)",
      context: "BMC Plant Biology 2026 · Plant Cell Reports (under review)",
      template: "arsenic",
      as: [1, 10, 8, 3],
      vac: [0, 3, 4, 2],
      ros: [1, 7, 3, 3],
      mg: [1, 7, 3, 3],
      foliar: { label: "Foliar allantoin", on: [2] },
      microbe: { label: "Epiphytic Acinetobacter", on: [3] },
      defenceOn: [2, 3],
      meters: [
        { label: "Arsenic in shoot", vals: [0.1, 0.9, 0.8, 0.35] },
        { label: "ROS and methylglyoxal", vals: [0.15, 0.85, 0.4, 0.4] },
        { label: "Antioxidant + glyoxalase", vals: [0.3, 0.55, 0.85, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. Little arsenic reaches the shoot and stress markers stay low." },
        { label: "Arsenic", caption: "Arsenic. As(V) enters through phosphate transporters and As(III) through Lsi1, then moves to the shoot and raises ROS and methylglyoxal." },
        { label: "As + allantoin", caption: "Arsenic + foliar allantoin. Antioxidant and glyoxalase defences are reinforced." },
        { label: "As + Acinetobacter", caption: "Arsenic + epiphytic Acinetobacter. Arsenic uptake is restricted and defences are reinforced (under review)." }
      ],
      doi: "10.1186/s12870-026-08192-8"
    },

    {
      years: "2023 - 2025",
      title: "Combined chromium and salt stress in rice",
      context: "Microorganisms 2025 · USAID-funded project, Department of Agronomy, SAU",
      template: "root",
      soil: "Saline, Cr-contaminated soil",
      channels: [
        { name: "NSCC", ion: "Na⁺", color: "#e0a64b", dir: "in", y: 62, counts: [1, 6, 3] },
        { name: "SULTR", ion: "Cr(VI)", color: "#5ec4c4", dir: "in", y: 100, counts: [0, 6, 3] },
        { name: "AKT1", ion: "K⁺", color: "#7ed6a0", dir: "in", y: 140, counts: [5, 2, 4] },
        { name: "GORK", ion: "K⁺", color: "#7ed6a0", dir: "out", y: 182, counts: [0, 5, 2] },
        { name: "SOS1", ion: "Na⁺", color: "#e0a64b", dir: "out", y: 224, counts: [0, 3, 3] }
      ],
      nhx: { counts: [0, 3, 3] },
      ros: { counts: [1, 8, 3], on: [1, 2] },
      microbe: { label: "PGPR", on: [2] },
      meters: [
        { label: "Na⁺ and Cr uptake", vals: [0.15, 0.9, 0.45] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.4] },
        { label: "Antioxidant defence", vals: [0.3, 0.5, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. No metal load and a stable ion balance." },
        { label: "Cr + salt", caption: "Chromium + salt. Na⁺ and chromate (taken up through sulfate transporters) enter together and oxidative damage rises." },
        { label: "Cr + salt + PGPR", caption: "Chromium + salt + PGPR. Bioaugmentation improves physiology, ion homeostasis and antioxidant defence." }
      ],
      doi: "10.3390/microorganisms13071462"
    },

    {
      years: "2026",
      title: "Silymarin and salt tolerance in <i>Brassica napus</i>",
      context: "Scientific Reports 2026",
      template: "leaf",
      where: "Brassica napus",
      stress: "Salt",
      protectant: "Silymarin",
      enzymes: "SOD · APX · MDHAR · DHAR · GR",
      ions: [0, 5, 2],
      ros: [1, 8, 3], h2o: [2, 3, 6], damage: [0, 6, 1], drops: [0, 0, 6], glowOn: [2],
      stomaOpen: [0, 2], stomaClosed: [1], damageOn: [1],
      meters: [
        { label: "ROS (H₂O₂, O₂•⁻)", vals: [0.15, 0.9, 0.35] },
        { label: "Na⁺ / K⁺ ratio", vals: [0.2, 0.85, 0.45] },
        { label: "Growth", vals: [0.85, 0.4, 0.7] }
      ],
      states: [
        { label: "Control", caption: "Control. Chloroplasts make a little O₂•⁻, SOD and the AsA-GSH cycle turn it into water." },
        { label: "Salt stress", caption: "Salt stress. Na⁺ builds up, ROS outpace the enzymes and attack the membranes." },
        { label: "Salt + silymarin", caption: "Salt + silymarin. ROS metabolism and ion homeostasis are better regulated and growth recovers." }
      ],
      doi: "10.1038/s41598-026-51150-5"
    },

    {
      years: "2026",
      title: "Selenium and seaweed extract in rice under salt stress",
      context: "Chemical and Biological Technologies in Agriculture 2026",
      template: "leaf",
      where: "Oryza sativa",
      stress: "Salt",
      protectant: "Selenium + seaweed extract",
      enzymes: "SOD · CAT · APX · GPX · GR",
      ions: [0, 5, 3],
      ros: [1, 8, 2], h2o: [2, 3, 7], damage: [0, 6, 1], drops: [0, 0, 6], glowOn: [2],
      stomaOpen: [0, 2], stomaClosed: [1], damageOn: [1],
      meters: [
        { label: "ROS", vals: [0.15, 0.9, 0.3] },
        { label: "Lipid peroxidation (MDA)", vals: [0.15, 0.85, 0.3] },
        { label: "Antioxidant defence", vals: [0.3, 0.5, 0.9] }
      ],
      states: [
        { label: "Control", caption: "Control. A steady, low level of ROS." },
        { label: "Salt stress", caption: "Salt stress. ROS and lipid peroxidation rise." },
        { label: "Salt + Se + seaweed", caption: "Salt + selenium and seaweed extract. The two act together to regulate antioxidant defence." }
      ],
      doi: "10.1186/s40538-026-00956-6"
    },

    {
      years: "2025",
      title: "Seaweed extract against drought in <i>Brassica campestris</i>",
      context: "Plant Physiology and Biochemistry 2025",
      template: "leaf",
      where: "Brassica campestris",
      stress: "Drought",
      protectant: "A. nodosum extract · alginic acid",
      enzymes: "SOD · APX · MDHAR · DHAR · GR",
      ros: [1, 8, 3], h2o: [2, 3, 6], damage: [0, 6, 2], drops: [0, 0, 6], glowOn: [2],
      stomaOpen: [0, 2], stomaClosed: [1], damageOn: [1],
      meters: [
        { label: "Relative water content", vals: [0.9, 0.4, 0.7] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.4] },
        { label: "Antioxidant defence", vals: [0.3, 0.5, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. Stomata are open, leaves stay hydrated and ROS stay low." },
        { label: "Drought", caption: "Drought. Stomata close to save water, CO₂ falls and excess light energy turns into ROS." },
        { label: "Drought + seaweed", caption: "Drought + Ascophyllum nodosum extract or alginic acid. Antioxidant and physiological traits improve." }
      ],
      doi: "10.1016/j.plaphy.2025.110198"
    },

    {
      years: "2023 - 2025",
      title: "Climate data for agriculture",
      context: "FAB LAB, SAU · Fall School, The Small Earth Nepal (funded by APN, Japan)",
      template: "pipeline",
      stages: ["Station data", "Imputation", "Bias correction", "Downscaling", "ETCCDI indices", "Trends"],
      states: [
        { label: "Data", caption: "Station records. Daily temperature and rainfall, with missing days and outliers." },
        { label: "Impute", caption: "Imputation. Missing days are filled so each series is complete." },
        { label: "Correct", caption: "Bias correction. Model output is adjusted to match what stations observed." },
        { label: "Downscale", caption: "Downscaling. Coarse climate model grids are brought to a local scale." },
        { label: "Indices", caption: "ETCCDI indices. Extremes such as warm days and heavy rain are counted each year." },
        { label: "Trends", caption: "Trend analysis. Sen's slope and the Mann-Kendall test show how extremes are changing." }
      ],
      doi: ""
    }
  ]
};
