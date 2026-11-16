/* ==========================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   Edit the text between the quotes, commit, and the site updates.
   Use <i>...</i> around species names so they show in italics.
   ========================================================== */

window.SITE = {

  name: { first: "Samiul", last: "Alam" },
  role: "Plant stress physiologist",
  status: "Open to PhD positions",
  tagline: "I study how rice and other field crops cope with salinity, arsenic and other abiotic stresses, and how beneficial bacteria and biostimulants can help them.",
  portrait: "assets/img/portrait.webp",
  cv: "",   // e.g. "assets/cv/Samiul_Alam_CV.pdf". Leave empty to hide the button.

  about: [
    "I completed my MSc in Agronomy at Sher-e-Bangla Agricultural University, Dhaka, under the supervision of Prof. Dr. Mirza Hasanuzzaman. My thesis examined the biostimulating roles of the plant growth-promoting rhizobacterium <i>Mangrovibacter</i> sp. in rice under salt stress.",
    "My work combines field and laboratory experiments with assays of oxidative stress markers, antioxidant enzymes, the glyoxalase system and ion homeostasis. I also work with climate data, GIS and statistical analysis in R and Python."
  ],

  stats: [
    { value: 5, label: "Research articles" },
    { value: 1, label: "Review article" },
    { value: 8, label: "Book chapters" },
    { value: 5, label: "International conference presentations" }
  ],

  education: [
    { degree: "MSc in Agronomy", place: "Sher-e-Bangla Agricultural University, Dhaka", period: "Jul 2023 - Dec 2025", note: "CGPA 3.82 / 4.00" },
    { degree: "BSc in Agriculture", place: "Sher-e-Bangla Agricultural University, Dhaka", period: "Jan 2017 - Jun 2023", note: "CGPA 3.56 / 4.00" }
  ],

  research: [
    { title: "Salt stress", text: "Ion homeostasis, osmotic adjustment and oxidative damage in rice, <i>Brassica</i> and millet under salinity." },
    { title: "Arsenic and metal toxicity", text: "Arsenic and chromium uptake in rice and ways to restrict it." },
    { title: "PGPR and biostimulants", text: "Plant growth-promoting bacteria, seaweed extracts and other protectants as tools for stress tolerance." },
    { title: "Antioxidant and glyoxalase systems", text: "Reactive oxygen species metabolism, antioxidant enzymes and methylglyoxal detoxification." },
    { title: "Climate data analysis", text: "Bias correction, downscaling, ETCCDI indices and trend analysis, with GIS mapping." }
  ],

  /* type must be one of: "article", "review", "chapter", "review-pending" */
  publications: [
    { type: "article", year: 2026,
      authors: "Hasanuzzaman, M., Alam, S., Hosen, M. S., Rummana, S., and Alam, M. M.",
      title: "Silymarin orchestrates reactive oxygen species metabolism, ion homeostasis and morpho-physiological traits to confer salt tolerance in <i>Brassica napus</i>",
      venue: "Scientific Reports", doi: "10.1038/s41598-026-51150-5" },
    { type: "article", year: 2026,
      authors: "Hasanuzzaman, M., Sultana, A., Sinthi, F., Alam, S., Alam, M. M., and Prasad, P. V. V.",
      title: "Selenium and seaweed extracts exhibit synergistic actions in regulating antioxidant defense in rice under salt stress",
      venue: "Chemical and Biological Technologies in Agriculture", doi: "10.1186/s40538-026-00956-6" },
    { type: "article", year: 2026,
      authors: "Hasanuzzaman, M., Alam, S., Sultana, A., Sabiha, U. K., Alam, M. M., and Prasad, P. V. V.",
      title: "Foliar application of allantoin reinforces antioxidant and glyoxalase systems to confer tolerance against arsenic toxicity in rice (<i>Oryza sativa</i> L.)",
      venue: "BMC Plant Biology", doi: "10.1186/s12870-026-08192-8" },
    { type: "article", year: 2025,
      authors: "Hasanuzzaman, M., Rummana, S., Sinthi, F., Alam, S., Raihan, M. R. H., and Alam, M. M.",
      title: "Enhancing drought resilience in <i>Brassica campestris</i>: Antioxidant and physiological benefits of <i>Ascophyllum nodosum</i> extract and alginic acid",
      venue: "Plant Physiology and Biochemistry", doi: "10.1016/j.plaphy.2025.110198" },
    { type: "article", year: 2025,
      authors: "Sobahan, M. A., Akter, N., Karim, M. M., Badhon, M. M. I., Khan, S. N., Alam, S., Prasad, P. V. V., and Hasanuzzaman, M.",
      title: "Bioaugmentation with plant growth-promoting rhizobacteria alleviates chromium and salt stress in rice through the improvement of physiology, ion homeostasis, and antioxidant defense",
      venue: "Microorganisms", doi: "10.3390/microorganisms13071462" },

    { type: "review", year: 2026,
      authors: "Datta, D., Alam, S., Sinthi, F., Nahar, K., and Hasanuzzaman, M.",
      title: "Phytoprotectants in action: Shielding plants from oxidative damage under thermal extremes and flooding stress",
      venue: "Journal of Bangladesh Academy of Sciences, 50(3), 347-367", doi: "10.3329/jbas.v50i3.93933" },

    { type: "chapter", year: 2026,
      authors: "Alam, S., Sinthi, F., and Hasanuzzaman, M.",
      title: "Strategies to reduce arsenic stress in rice: Physiological, biochemical, and molecular perspectives",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 223-250", doi: "10.1016/B978-0-443-33465-8.00005-0" },
    { type: "chapter", year: 2026,
      authors: "Alam, S., Hosen, M. S., Ahmed, M. S., and Hasanuzzaman, M.",
      title: "Phytohormone-mediated improvement of salt stress tolerance in rice",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 821-846", doi: "10.1016/B978-0-443-33465-8.00020-7" },
    { type: "chapter", year: 2026,
      authors: "Eva, M. I. J., Alam, S., Nahar, K., and Hasanuzzaman, M.",
      title: "Flooding stress in rice under climate change: Physiological responses and tolerance mechanisms",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 129-161", doi: "10.1016/B978-0-443-33465-8.00010-4" },
    { type: "chapter", year: 2026,
      authors: "Sinthi, F., Alam, S., Datta, D., Nahar, K., and Hasanuzzaman, M.",
      title: "Metal and metalloid toxicity in rice: Stress responses and mitigation strategies",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 163-205", doi: "10.1016/B978-0-443-33465-8.00021-9" },
    { type: "chapter", year: 2026,
      authors: "Nahar, K., Sinthi, F., Alam, S., Anee, T. I., Bhuiyan, T. F., Rummana, S., Fujita, M., and Hasanuzzaman, M.",
      title: "Enhancing rice resilience to abiotic stress: The role of osmolytes",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 333-370", doi: "10.1016/B978-0-443-33465-8.00018-9" },
    { type: "chapter", year: 2026,
      authors: "Ahmed, M. S., Sinthi, F., Alam, S., and Hasanuzzaman, M.",
      title: "Molecular tools and strategies to improve abiotic stress resilience in rice: Recent progress and future directions",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 453-485", doi: "10.1016/B978-0-443-33465-8.00028-1" },
    { type: "chapter", year: 2026,
      authors: "Mow, A. M., Hosen, M. S., Datta, D., Alam, S., and Hasanuzzaman, M.",
      title: "Seed priming in rice: A promising tool for enhancing abiotic stress tolerance",
      venue: "Advances in Rice Research for Abiotic Stress Tolerance (2nd ed.), Elsevier, pp. 847-869", doi: "10.1016/B978-0-443-33465-8.00030-X" },
    { type: "chapter", year: 2024,
      authors: "Hasanuzzaman, M., Sinthi, F., Alam, S., Sultana, A., Rummana, S., and Khatun, A.",
      title: "Perspective chapter: Enhancing plant resilience to salinity induced oxidative stress - role of exogenous elicitors",
      venue: "IntechOpen", doi: "10.5772/intechopen.115035" },

    { type: "review-pending", year: "Under review",
      authors: "Alam, S., Sinthi, F., Khatun, A., Alam, M. M., Prasad, P. V. V., and Hasanuzzaman, M.",
      title: "Biostimulating roles of plant growth-promoting rhizobacteria (<i>Mangrovibacter</i> sp.) in rice under salt stress",
      venue: "International Journal of Molecular Sciences (under review)", doi: "" },
    { type: "review-pending", year: "Under review",
      authors: "Alam, S., Alam, M. M., Sil, S. K., Prasad, P. V. V., and Hasanuzzaman, M.",
      title: "Epiphytic <i>Acinetobacter</i> strains alleviate arsenic toxicity in rice by restricting arsenic uptake and reinforcing antioxidant and glyoxalase defenses",
      venue: "Plant Cell Reports (under review)", doi: "" }
  ],

  experience: [
    { org: "Bangladesh Agronomy Journal", role: "Editorial Assistant", period: "Jan 2025 - Present",
      text: "Manuscript copyediting, formatting and proofreading to journal standards." },
    { org: "FAB LAB, Sher-e-Bangla Agricultural University", role: "Research Assistant", period: "Oct 2023 - Nov 2025",
      text: "Surveys, field and laboratory data collection, data cleaning and statistical analysis in R and Python." },
    { org: "USAID-funded project, Department of Agronomy, SAU", role: "Research Assistant", period: "Oct 2023 - Sep 2024",
      text: "Biostimulating roles of plant growth-promoting rhizobacteria and seaweed extracts in Zn-fortified rice under combined salt and metal stress." },
    { org: "UGC-funded project, SAU", role: "Research Assistant", period: "Sep 2023 - Aug 2024",
      text: "Role of salicylic acid in alleviating salinity-induced damage in proso millet." }
  ],

  awards: [
    { title: "National Science and Technology (NST) Fellowship", by: "Ministry of Science and Technology, Bangladesh", year: "2025" },
    { title: "Best Oral Presenter, First Position", by: "Agricultural and Environmental Technology Development Society", year: "2024" },
    { title: "Bayer Safe Use Ambassador 2022, Country Representative", by: "Bayer Crop Science AG, Germany", year: "2023" },
    { title: "National Champion, Shutterhunt Photography Exhibition", by: "", year: "2019" }
  ],

  conferences: [
    { title: "7th International Conference on Plants and Environmental Pollution (ICPEP-7)", by: "CSIR Campus, India. Poster", year: "2025" },
    { title: "World Congress on Climate Change and Its Effects (CCIE-2025)", by: "Pokhara University, Nepal. Oral", year: "2025" },
    { title: "23rd Science Council of Asia Conference", by: "Dhaka, Bangladesh. Poster", year: "2024" },
    { title: "7th International Conference on Advances in Agriculture Technology and Allied Science (ICAATAS-2024)", by: "The Neotia University, India. Oral", year: "2024" },
    { title: "6th International Conference on Cutting-Edge Solutions in Science, Agriculture, Technology, Engineering and Humanities (CSATEH-2024)", by: "Kumaun University, India. Oral", year: "2024" }
  ],

  skills: [
    { group: "Plant physiology and biochemistry",
      items: ["MDA, H₂O₂, proline, methylglyoxal", "Relative water content, electrolyte leakage, chlorophyll", "SOD, CAT, APX, GR, MDHAR, DHAR, GPX, GST, POD", "Gly I and Gly II", "Na⁺, K⁺ and Ca²⁺ analysis"] },
    { group: "Microbiology",
      items: ["Isolation of endophytic and epiphytic bacteria", "Identification and preservation of plant growth-promoting bacteria"] },
    { group: "Data analysis and climate data",
      items: ["R / RStudio, SPSS, Python", "ArcGIS, QGIS", "Bias correction and downscaling", "ETCCDI indices and trend analysis"] },
    { group: "Visual media",
      items: ["Photography and cinematography", "Adobe Photoshop, Illustrator", "Premiere Pro, After Effects"] }
  ],

  /* Add photos like { src: "assets/img/photo1.jpg", alt: "Rice field at sunrise" }.
     The gallery section stays hidden while this list is empty. */
  gallery: [],

  contact: {
    heading: "Looking for a PhD candidate?",
    text: "I am looking for a PhD position in plant stress physiology and crop resilience. I would be glad to hear about openings, collaborations or questions about my work.",
    email: "kbdsamiulalam@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/samiul-alam-738b37204/" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Samiul-Alam-6" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=L6fM4y0AAAAJ&hl=en" }
    ]
  }
};
