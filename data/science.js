/* ==========================================================
   CONTENT FOR samiulalam.site/science
   Each study cycles through its "states" (control, stress, treatment).
   counts = how many moving particles show in each state.
   vals   = meter levels from 0 to 1 in each state.
   Every list must have one entry per state.
   ========================================================== */

window.SCIENCE = {

  question: "How do crops keep growing when the soil turns salty, dry or toxic?",
  intro: "Across salinity, drought and toxic metals, my studies come back to the same question. Each panel shows one study as a simple animated sketch. It moves from normal conditions, to stress, to the treatment we tested. The sketches are simplified schematics to explain the idea, not plots of the data.",

  projects: [

    {
      years: "2023 - 2025",
      title: "Plant growth-promoting bacteria for rice under salt stress",
      context: "MSc thesis · Sher-e-Bangla Agricultural University · under review, International Journal of Molecular Sciences",
      template: "root",
      soil: "Saline soil",
      ions: [
        { label: "Na⁺", color: "#e0a64b", counts: [2, 10, 5] }
      ],
      leak: { label: "K⁺", color: "#7ed6a0", counts: [1, 7, 3] },
      microbe: { label: "Mangrovibacter sp.", on: [2] },
      meters: [
        { label: "Na⁺ / K⁺ ratio", vals: [0.2, 0.9, 0.5] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.45] },
        { label: "Antioxidant defence", vals: [0.3, 0.55, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. Na⁺ and K⁺ stay in balance and ROS stay low." },
        { label: "Salt stress", caption: "Salt stress. Na⁺ floods the root, K⁺ leaks out and ROS start to build up." },
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
      ros: [1, 8, 3, 3],
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
        { label: "Arsenic", caption: "Arsenic. As moves from soil to shoot and raises ROS and methylglyoxal." },
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
      ions: [
        { label: "Na⁺", color: "#e0a64b", counts: [2, 9, 4] },
        { label: "Cr", color: "#5ec4c4", counts: [1, 7, 3] }
      ],
      leak: { label: "K⁺", color: "#7ed6a0", counts: [1, 6, 3] },
      microbe: { label: "PGPR", on: [2] },
      meters: [
        { label: "Na⁺ and Cr uptake", vals: [0.15, 0.9, 0.45] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.4] },
        { label: "Antioxidant defence", vals: [0.3, 0.5, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. No metal load and a stable ion balance." },
        { label: "Cr + salt", caption: "Chromium + salt. Two stresses enter the root together and oxidative damage rises." },
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
      enzymes: "SOD · CAT · APX · GR",
      ros: [1, 9, 3], h2o: [2, 3, 7], damage: [0, 6, 1], drops: [0, 0, 6], glowOn: [2],
      meters: [
        { label: "ROS (H₂O₂, O₂•⁻)", vals: [0.15, 0.9, 0.35] },
        { label: "Na⁺ / K⁺ ratio", vals: [0.2, 0.85, 0.45] },
        { label: "Growth", vals: [0.85, 0.4, 0.7] }
      ],
      states: [
        { label: "Control", caption: "Control. Chloroplasts make a little ROS and the enzymes clear it." },
        { label: "Salt stress", caption: "Salt stress. ROS outpace the enzymes and attack the membranes." },
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
      enzymes: "SOD · CAT · APX · GPX",
      ros: [1, 9, 2], h2o: [2, 3, 7], damage: [0, 6, 1], drops: [0, 0, 6], glowOn: [2],
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
      enzymes: "SOD · CAT · APX · GR",
      ros: [1, 9, 3], h2o: [2, 3, 7], damage: [0, 6, 2], drops: [0, 0, 6], glowOn: [2],
      meters: [
        { label: "Relative water content", vals: [0.9, 0.4, 0.7] },
        { label: "ROS and MDA", vals: [0.15, 0.85, 0.4] },
        { label: "Antioxidant defence", vals: [0.3, 0.5, 0.8] }
      ],
      states: [
        { label: "Control", caption: "Control. Leaves stay hydrated and ROS stay low." },
        { label: "Drought", caption: "Drought. Water content falls and oxidative damage rises." },
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
        { label: "Data", caption: "Station records. Daily rainfall and temperature, with gaps and errors." },
        { label: "Impute", caption: "Imputation. Missing days are filled so each series is complete." },
        { label: "Correct", caption: "Bias correction. Model output is adjusted to match what stations observed." },
        { label: "Downscale", caption: "Downscaling. Coarse climate projections are brought to a local scale." },
        { label: "Indices", caption: "ETCCDI indices. Extremes such as hot days and heavy rain are counted." },
        { label: "Trends", caption: "Trend analysis. Changes over time are tested and mapped for agriculture." }
      ],
      doi: ""
    }
  ]
};
