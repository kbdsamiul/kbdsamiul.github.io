/* ==========================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   Edit the text between the quotes, commit, and the site updates.
   Use <i>...</i> around species names so they show in italics.
   ========================================================== */

window.SITE = {

  name: { first: "Samiul", last: "Alam" },
  role: "Agronomist and plant researcher",
  /* These rotate in the hero. Keep one item to switch the rotation off. */
  roles: ["Agronomist", "Plant stress physiologist", "Environmental researcher", "Climate data analyst"],
  status: "Open to PhD positions",
  tagline: "I work across agronomy, plant physiology and environmental science. My research looks at how crops respond to salinity, drought, flooding and toxic metals, and how microbes, biostimulants and climate information can make farming more resilient.",
  portrait: "assets/img/portrait.webp",
  cv: "",   // e.g. "assets/cv/Samiul_Alam_CV.pdf". Leave empty to hide the button.

  about: [
    "I am an agronomist with an MSc from Sher-e-Bangla Agricultural University, Dhaka, where I worked under Prof. Dr. Mirza Hasanuzzaman. My research sits where crop production meets environmental stress. I have studied salinity, drought, flooding and heat in field crops, and arsenic and chromium contamination in the soil-plant system.",
    "My work combines field trials and laboratory physiology with microbiology, climate data analysis and GIS. I have worked on rice, <i>Brassica</i> and millet, and on plant growth-promoting bacteria and biostimulants as tools for sustainable, climate-smart agriculture."
  ],

  stats: [
    { value: 5, label: "Research articles" },
    { value: 1, label: "Review article" },
    { value: 8, label: "Book chapters" },
    { value: 5, label: "International conference presentations" },
    { value: 3.82, decimals: 2, label: "MSc CGPA out of 4.00" }
  ],

  education: [
    { degree: "MSc in Agronomy", place: "Sher-e-Bangla Agricultural University, Dhaka", period: "Jul 2023 - Dec 2025", note: "CGPA 3.82 / 4.00",
      thesis: "Biostimulating roles of plant growth-promoting rhizobacteria (<i>Mangrovibacter</i> sp.) in rice under salt stress",
      supervisor: "Prof. Dr. Mirza Hasanuzzaman" },
    { degree: "BSc in Agriculture", place: "Sher-e-Bangla Agricultural University, Dhaka", period: "Jan 2017 - Jun 2023", note: "CGPA 3.56 / 4.00" }
  ],

  research: [
    { title: "Crop stress physiology", text: "How field crops respond to salinity, drought, flooding and heat, from growth and yield to ion balance, oxidative stress and antioxidant and glyoxalase defense." },
    { title: "Environmental contamination", text: "Arsenic, chromium and other metals in the soil-plant system, their uptake by crops and practical ways to reduce it for safer food." },
    { title: "Plant-microbe interactions", text: "Isolation and use of plant growth-promoting bacteria, alongside seaweed extracts and other biostimulants, to support crops under stress." },
    { title: "Sustainable and climate-smart agronomy", text: "Crop management practices that keep yields stable under a changing climate while reducing environmental costs." },
    { title: "Climate data and GIS", text: "Bias correction, downscaling, ETCCDI climate indices, trend analysis and spatial mapping to link climate change with agriculture." }
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

  /* type is "Oral" or "Poster" */
  conferences: [
    { title: "7th International Conference on Plants and Environmental Pollution (ICPEP-7)", by: "CSIR Campus, India", date: "30 Nov - 2 Dec 2025", type: "Poster" },
    { title: "World Congress on Climate Change and Its Effects (CCIE-2025)", by: "Pokhara University, Nepal", date: "6 - 8 Sep 2025", type: "Oral" },
    { title: "23rd Science Council of Asia Conference: Fourth Industrial Revolution and Future Society", by: "Dhaka, Bangladesh", date: "30 Nov - 2 Dec 2024", type: "Poster" },
    { title: "7th International Conference on Advances in Agriculture Technology and Allied Science (ICAATAS-2024)", by: "The Neotia University, West Bengal, India", date: "15 - 16 Sep 2024", type: "Oral" },
    { title: "6th International Conference on Cutting-Edge Solutions in Science, Agriculture, Technology, Engineering and Humanities (CSATEH-2024)", by: "Kumaun University, India", date: "24 - 26 Aug 2024", type: "Oral" }
  ],

  skills: [
    { group: "Plant physiology and biochemistry",
      items: ["MDA, H₂O₂, proline, methylglyoxal", "Relative water content, electrolyte leakage, chlorophyll", "SOD, CAT, APX, GR, MDHAR, DHAR, GPX, GST, POD", "Gly I and Gly II", "Na⁺, K⁺ and Ca²⁺ analysis"] },
    { group: "Instrumentation",
      items: ["Spectrophotometer", "Fluorometer", "SPAD meter", "Leaf porometer", "EC meter", "Centrifuges", "Growth chambers", "Incubators", "Laminar airflow cabinet", "Autoclave"] },
    { group: "Microbiology",
      items: ["Isolation of endophytic and epiphytic bacteria", "Identification and preservation of plant growth-promoting bacteria"] },
    { group: "Data analysis and climate data",
      items: ["R / RStudio, SPSS, Python", "ArcGIS, QGIS", "Imputation and interpolation", "Bias correction and downscaling", "ETCCDI indices and trend analysis"] },
    { group: "Visual media",
      items: ["Photography and cinematography", "Adobe Photoshop, Illustrator", "Premiere Pro, After Effects"] }
  ],

  training: [
    { title: "Fall School on Advanced Climate Data Analytics and Strategies", by: "The Small Earth Nepal, Bhaktapur, Nepal. Funded by APN, Japan", year: "Oct 2025" },
    { title: "Experimental Data Analysis Using R Software", by: "Sher-e-Bangla Agricultural University, Dhaka", year: "May 2025" },
    { title: "GIS Training Course", by: "SAU Computer Club, Dhaka", year: "Nov 2024" },
    { title: "Communicating the Science of Climate Change and Food Security", by: "Farming Future Bangladesh", year: "Jun 2023" },
    { title: "Crop Pest Management and Crop Pest Diagnosis (online)", by: "CABI Academy", year: "Aug 2021" },
    { title: "Agri-Science Leadership Development", by: "Farming Future Bangladesh and Cornell University", year: "Nov - Dec 2020" }
  ],

  memberships: [
    { title: "Life Member, Bangladesh Society of Agronomy", by: "", year: "2026 - present" },
    { title: "South Asian Meteorological Association (SAMA)", by: "", year: "2025 - present" },
    { title: "British Ecological Society", by: "", year: "2024 - present" },
    { title: "Asian Phytopathological Society", by: "", year: "2023 - present" }
  ],

  /* Add photos like { src: "assets/img/photo1.jpg", alt: "Rice field at sunrise" }.
     The gallery section stays hidden while this list is empty. */
  gallery: [],

  contact: {
    heading: "Looking for a PhD candidate?",
    text: "I am looking for a PhD position in agronomy, crop science, plant physiology or environmental science. I would be glad to hear about openings, collaborations or questions about my work.",
    email: "kbdsamiulalam@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/samiul-alam-738b37204/" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Samiul-Alam-6" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=L6fM4y0AAAAJ&hl=en" }
    ]
  }
};
