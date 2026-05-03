/* ============================================
   Bilingual system — FR / EN
   ============================================ */
const translations = {
  fr: {
    /* Nav */
    'nav.projects': 'Projets',
    'nav.skills':   'Compétences',
    'nav.parcours': 'Parcours',
    'nav.contact':  'Contact',

    /* Hero */
    'hero.badge':           'Disponible — Septembre 2025',
    'hero.role':            'Ingénieur en simulation numérique & mécanique des fluides',
    'hero.desc':            'Master 2 en Modélisation et Simulation en Mécanique des Fluides et Transfert Thermique — spécialisé en mécanique des fluides, thermique, CFD et modélisation numérique.',
    'hero.cta.projects':    'Voir mes projets',
    'hero.cta.cv':          'Télécharger le CV',
    'hero.stat.projects':   'Projets CFD',
    'hero.stat.stage':      'Stage en cours',
    'hero.stat.niveau':     'Niveau',
    'hero.stat.diplome':    'Diplôme',
    'hero.recent':          'Projets récents',
    'hero.p1.short':        'Tuyère de Laval',
    'hero.p2.short':        'Échangeur coaxial',
    'hero.p3.short':        'FSI Turek & Hron',

    /* Projects section */
    'projects.tag':   'Réalisations',
    'projects.title': 'Mes projets',
    'projects.more':  'Voir le projet →',
    'projects.modal.results':  'Résultats clés',
    'projects.modal.tools':    'Outils utilisés',
    'projects.modal.duration': 'Durée / Contexte',
    'projects.modal.report':   'Voir le rapport →',

    /* Filters */
    'filter.all':          'Tous',
    'filter.cfd':          'CFD',
    'filter.fsi':          'FSI',
    'filter.experimental': 'Expérimental',

    /* Project types */
    'type.cfd':          'CFD Compressible',
    'type.thermal':      'CFD Thermique',
    'type.fsi':          'FSI',
    'type.turbulence':   'CFD Turbulence',
    'type.multiphase':   'Multiphasique',
    'type.experimental': 'Expérimental',
    'type.fvm':          'Volumes Finis',
    'type.porous':       'Milieux Poreux',

    /* P1 — Tuyère */
    'projects.p1.title':  'Étude numérique des régimes d\'écoulement compressible dans une tuyère de Laval',
    'projects.p1.desc':   'Simulation CFD de trois régimes d\'écoulement compressible (adapté, sur-détendu, sous-détendu) dans une tuyère de Laval. Maillage structuré multi-blocs, modèle de turbulence k-ε et validation des résultats aux données théoriques isentropiques.',
    'projects.p1.date':   'Mai 2025 — Université Gustave Eiffel',
    'projects.p1.status': 'Terminé',
    'projects.p1.r1':     'Mach simulé M = 2.03 — écart < 1% par rapport à la théorie isentropique',
    'projects.p1.r2':     'Angles de choc validés : δ = 23.95°, ε = 65.92° — cohérents avec les abaques théoriques',
    'projects.p1.r3':     'Comparaison complète des 3 régimes sur 4 grandeurs physiques',

    /* P2 — Échangeur */
    'projects.p2.title':  'Simulation numérique d\'un échangeur de chaleur coaxial — Co-courant & Contre-courant',
    'projects.p2.desc':   'Modélisation CFD axisymétrique 2D d\'un échangeur coaxial sous ANSYS Fluent, couplant conduction et convection forcée turbulente (k-ω SST). Comparaison co-courant vs contre-courant validée par données expérimentales et modèle NTU-efficacité.',
    'projects.p2.date':   'Mai 2025 — M1 MFT, Université Gustave Eiffel',
    'projects.p2.status': 'Terminé',
    'projects.p2.r1':     'Températures simulées vs expérimentales : écart < 3°C — modèle validé',
    'projects.p2.r2':     'Contre-courant : efficacité thermique supérieure sur l\'ensemble des débits testés (1 à 3 L/min)',
    'projects.p2.r3':     'Conservation d\'énergie vérifiée : bilan flux chaud/froid avec moins de 1% d\'écart',

    /* P3 — FSI */
    'projects.p3.title':  'Couplage Fluide-Structure — Benchmark FSI2 de Turek & Hron',
    'projects.p3.desc':   'Simulation FSI instationnaire d\'un écoulement laminaire (Re=100) autour d\'un cylindre rigide avec ruban élastique déformable. Étude paramétrique sur le pas de temps et le paramètre de diffusion du maillage dynamique via couplage partitionné ANSYS Fluent + Mechanical + System Coupling.',
    'projects.p3.date':   'Janvier 2026 — M2 IFSA, Université Gustave Eiffel',
    'projects.p3.status': 'Terminé',
    'projects.p3.r1':     'Fréquences d\'oscillation en bon accord avec le benchmark Turek & Hron (2006)',
    'projects.p3.r2':     'Déplacements et coefficients Cd/Cl reproduits fidèlement pour Δt = 0.001s',
    'projects.p3.r3':     'Étude paramétrique complète : D ∈ {0,2,3} et Δt ∈ {0.001, 0.002, 0.005} s',

    /* P4 — Turbulence */
    'projects.p4.title':  'Modélisation des écoulements turbulents — Comparaison RANS vs LES dans un canal plan',
    'projects.p4.desc':   'Simulation CFD d\'un écoulement turbulent dans un canal plan (Re = 5600) avec comparaison de 4 modèles : RANS (k-ω SST, Spalart-Allmaras) et LES (Smagorinsky, WALE). Validation laminaire sur solution analytique de Poiseuille et analyse des profils u+(y+), contraintes pariétales et tensions de Reynolds.',
    'projects.p4.date':   'Février 2026 — M2 MFT IFSA, Université Gustave Eiffel',
    'projects.p4.status': 'Terminé',
    'projects.p4.r1':     'Validation laminaire : Umax = 1.5 × Umoy — conforme à la solution analytique de Poiseuille',
    'projects.p4.r2':     'k-ω SST : meilleur comportement proche paroi parmi les modèles RANS testés',
    'projects.p4.r3':     'LES WALE : résolution quasi-directe des petites structures — modèle le plus fidèle physiquement',

    /* P5 — FUGU */
    'projects.p5.title':  'Dynamique de particules plastiques dans un fluide — Validation du code FUGU',
    'projects.p5.desc':   'Simulation numérique du mouvement d\'une particule plastique (disque 2D) en ascension libre par flottabilité, à l\'aide du code FUGU basé sur la méthode de pénalisation tensorielle et la méthode VOF. Étude de convergence spatiale et temporelle dans le contexte de la modélisation de la pollution plastique océanique.',
    'projects.p5.date':   'Janvier 2026 — M2 MFT IFSA, Université Gustave Eiffel',
    'projects.p5.status': 'Terminé',
    'projects.p5.r1':     'Ordre de convergence spatiale p ≈ 1.17 et temporelle p ≈ 1.11 — cohérents avec le schéma Euler explicite',
    'projects.p5.r2':     'Vitesse terminale convergée pour Nx ≥ 96 mailles par diamètre de particule',
    'projects.p5.r3':     'Effet numérique pair/impair identifié et caractérisé sur la trajectoire du disque',

    /* P6 — Bio-aérosols */
    'projects.p6.title':  'Caractérisation métrologique d\'un banc expérimental de collecte d\'émissions respiratoires',
    'projects.p6.desc':   'Développement et caractérisation d\'un banc expérimental destiné à la collecte d\'aérosols respiratoires humains et animaux dans le cadre du projet ANR DISPERSE. Génération d\'aérosols monodispersés de fluorescéine via un VOAG, collecte multi-instrumentée (Sioutas, BioSampler, Button), et analyse spectrofluorimétrique pour quantifier les masses collectées en conditions contrôlées de température et d\'humidité.',
    'projects.p6.date':   'Juin–Juillet 2024 — CERTES, Université Paris-Est Créteil (UPEC)',
    'projects.p6.status': 'Terminé',
    'projects.p6.r1':     'Étanchéité validée — différentiel de pression de 2 Pa entre intérieur et extérieur du banc',
    'projects.p6.r2':     'Diamètre de gouttelette VOAG contrôlé à 40 µm — résidus secs de 1.5 µm confirmés par l\'APS (modèle 3321, TSI)',
    'projects.p6.r3':     'Relation d_g = d_ae · ρ₀^(1/2) / (c_m^(1/3) · ρ_m^(1/6)) validée expérimentalement',
    'projects.p6.r4':     'Conditionnement thermique opérationnel : T = 27–37 °C, HR = 0–100 % — mesures précises et reproductibles sur 5 jours',

    /* P7 — Volumes Finis */
    'projects.p7.title':  'Méthode des Volumes Finis : Application à la cavité entraînée',
    'projects.p7.desc':   'Implémentation complète de la méthode des volumes finis sur maillage décalé pour résoudre les équations de Navier-Stokes incompressibles 2D. Couplage pression-vitesse par méthode de projection, schéma upwind pour la convection et schéma centré pour la diffusion. Validation sur le cas académique de la cavité entraînée à Re = 100 par comparaison aux données de référence de Ghia et al.',
    'projects.p7.date':   'Février 2026 — Université Gustave Eiffel, Master 2 MFT',
    'projects.p7.status': 'Terminé',
    'projects.p7.r1':     'Grande cellule de recirculation correctement capturée — champs u et v cohérents avec les données de référence à Re = 100',
    'projects.p7.r2':     'Divergence résiduelle ~10⁻¹⁸ — conservation de la masse vérifiée à la précision machine',
    'projects.p7.r3':     'Profils de vitesse u(0.5, y) et v(x, 0.5) en bon accord avec la référence — erreur relative entre 11% et 33% selon la position',
    'projects.p7.r4':     'Méthode de projection validée : découplage pression–vitesse opérationnel sur maillage décalé structuré',

    /* P8 — Milieux Poreux */
    'projects.p8.title':  'Écoulement et diffusion dans les milieux microporeux 2D',
    'projects.p8.desc':   'Étude numérique de deux phénomènes de transport dans des milieux poreux bidimensionnels. Première partie : simulation de l\'écoulement de Stokes dans une géométrie microporeuse réelle (640×320 µm) sous COMSOL Multiphysics — détermination de la porosité, du VER et de la perméabilité intrinsèque par la loi de Kozeny-Carman. Deuxième partie : modélisation du transport diffusif et identification de la diffusivité effective et de la tortuosité par homogénéisation 1D.',
    'projects.p8.date':   'Janvier 2026 — Université Paris-Est Créteil (UPEC)',
    'projects.p8.status': 'Terminé',
    'projects.p8.r1':     'Porosité déterminée par intégration surfacique : ϕ = 0.546 — hypothèse de Delesse vérifiée (⟨ϕ₁D⟩ = 0.567 ≈ ϕ₂D)',
    'projects.p8.r2':     'VER identifié à partir de 3.8×10⁻⁴ m² — convergence de la porosité locale confirmée',
    'projects.p8.r3':     'Perméabilité numérique k = 2.03×10⁻¹² m² (Darcy) — cohérente avec Kozeny-Carman : k_KC = 6.89×10⁻¹² m²',
    'projects.p8.r4':     'Diffusivité effective D_eff = 2.17×10⁻⁶ m²/s, tortuosité τ = 1.76 — modèle homogénéisé 1D validé par comparaison au modèle 2D réaliste',

    /* Skills */
    'skills.tag':          'Expertise',
    'skills.title':        'Mes compétences',
    'skills.cat.cfd':      'CFD / Simulation',
    'skills.cat.prog':     'Programmation',
    'skills.cat.num':      'Méthodes numériques',
    'skills.cat.gen':      'Compétences générales',
    'skills.lang.title':   'Langues',
    'level.advanced':      'Avancé',
    'level.intermediate':  'Intermédiaire',
    'lang.fr':       'Français',  'lang.fr.level': 'Natif',
    'lang.en':       'Anglais',   'lang.en.level': 'B2',
    'lang.ar':       'Arabe',     'lang.ar.level': 'Intermédiaire',
    'lang.es':       'Espagnol',  'lang.es.level': 'Intermédiaire',

    /* Parcours */
    'parcours.tag':   'Parcours',
    'parcours.title': 'Mon histoire',
    'parcours.tab.exp': 'Expériences',
    'parcours.tab.edu': 'Formation',
    'status.ongoing': 'En cours',
    'status.done':    'Terminé',
    'exp.cea.period':  'Fév. 2026 — Août 2026 (en cours)',
    'exp.cea.role':    'Stagiaire Ingénieur — Thermo-hydraulique & Simulation',
    'exp.cea.org':     'CEA Saclay — STMF (Service de Thermo-hydraulique et Mécanique des Fluides)',
    'exp.cea.desc':    'Stage de fin d\'études au sein du STMF du CEA Saclay. Travaux de modélisation thermo-hydraulique et d\'implémentation de corrélations physiques dans des codes de simulation industriels (C++). Domaine : réacteurs à eau pressurisée (REP).',
    'exp.certes.role': 'Stagiaire L3 — Métrologie aérosols',
    'exp.certes.org':  'CERTES, Université Paris-Est Créteil (UPEC)',
    'exp.certes.desc': 'Développement et caractérisation d\'un banc expérimental de collecte d\'aérosols respiratoires dans le cadre du projet ANR DISPERSE.',
    'exp.nema.role':   'Vice-président & Co-créateur — Association NEMA',
    'exp.nema.org':    'Association étudiante',
    'exp.nema.desc':   'Association humanitaire engagée auprès des sans-abri et des personnes en situation de précarité. Co-création et gestion de l\'association, coordination des équipes de bénévoles et organisation des actions solidaires.',
    'edu.m2.role':      'Master 2 — MFT / IFSA',
    'edu.m2.org':       'Université Gustave Eiffel',
    'edu.m2.desc':      'Modélisation et Simulation en Mécanique des Fluides et Transfert Thermique — spécialisation en CFD, méthodes numériques avancées, couplage fluide-structure et transferts thermiques.',
    'edu.licence.role': 'Licence Mécanique',
    'edu.licence.org':  'Université Paris-Est Créteil (UPEC)',
    'edu.licence.desc': 'Licence de Physique — Parcours Mécanique à l\'Université Paris-Est Créteil. Formation alliant enseignements de physique générale (thermodynamique, électromagnétisme, optique) et spécialités en mécanique (mécanique des fluides, mécanique des solides, résistance des matériaux).',
    'edu.bac.role':     'Baccalauréat Général',
    'edu.bac.org':      'Lycée Pauline Rolland',
    'edu.bac.desc':     'Spécialités Physique-Chimie et Mathématiques.',

    /* Contact */
    'contact.headline':      'Travaillons ensemble.',
    'contact.desc':          'Disponible pour un poste, un stage ou une collaboration. N\'hésitez pas à me contacter.',
    'contact.email.label':   'Email',
    'contact.linkedin.label':'LinkedIn',
    'contact.github.label':  'GitHub',
    'contact.phone.label':   'Téléphone',
  },

  en: {
    /* Nav */
    'nav.projects': 'Work',
    'nav.skills':   'Skills',
    'nav.parcours': 'Journey',
    'nav.contact':  'Contact',

    /* Hero */
    'hero.badge':           'Available — September 2025',
    'hero.role':            'Numerical Simulation & Fluid Mechanics Engineer',
    'hero.desc':            'MSc in Modelling and Simulation in Fluid Mechanics and Heat Transfer — specialised in fluid mechanics, heat transfer, CFD and numerical modelling.',
    'hero.cta.projects':    'View my projects',
    'hero.cta.cv':          'Download CV',
    'hero.stat.projects':   'CFD Projects',
    'hero.stat.stage':      'Internship ongoing',
    'hero.stat.niveau':     'Level',
    'hero.stat.diplome':    'Graduation',
    'hero.recent':          'Recent projects',
    'hero.p1.short':        'Laval Nozzle',
    'hero.p2.short':        'Coaxial heat exchanger',
    'hero.p3.short':        'FSI Turek & Hron',

    /* Projects section */
    'projects.tag':   'Portfolio',
    'projects.title': 'My projects',
    'projects.more':  'View project →',
    'projects.modal.results':  'Key results',
    'projects.modal.tools':    'Tools',
    'projects.modal.duration': 'Duration / Context',
    'projects.modal.report':   'View report →',

    /* Filters */
    'filter.all':          'All',
    'filter.cfd':          'CFD',
    'filter.fsi':          'FSI',
    'filter.experimental': 'Experimental',

    /* Project types */
    'type.cfd':          'Compressible CFD',
    'type.thermal':      'Thermal CFD',
    'type.fsi':          'FSI',
    'type.turbulence':   'Turbulence CFD',
    'type.multiphase':   'Multiphase',
    'type.experimental': 'Experimental',
    'type.fvm':          'Finite Volumes',
    'type.porous':       'Porous Media',

    /* P1 */
    'projects.p1.title':  'Numerical Study of Compressible Flow Regimes in a Laval Nozzle',
    'projects.p1.desc':   'CFD simulation of three compressible flow regimes (adapted, over/under-expanded) in a Laval nozzle. Structured multi-block mesh, k-ε turbulence model and validation against isentropic theoretical data.',
    'projects.p1.date':   'May 2025 — Université Gustave Eiffel',
    'projects.p1.status': 'Completed',
    'projects.p1.r1':     'Simulated Mach M = 2.03 — less than 1% deviation from isentropic theory',
    'projects.p1.r2':     'Validated shock angles: δ = 23.95°, ε = 65.92° — consistent with theoretical charts',
    'projects.p1.r3':     'Full comparison of 3 regimes across 4 physical quantities',

    /* P2 */
    'projects.p2.title':  'Numerical Simulation of a Coaxial Heat Exchanger — Co/Counter-current Configurations',
    'projects.p2.desc':   '2D axisymmetric CFD modelling of a coaxial heat exchanger in ANSYS Fluent, coupling conduction and turbulent forced convection (k-ω SST). Co vs counter-current comparison validated against experimental data and NTU-effectiveness model.',
    'projects.p2.date':   'May 2025 — M1 MFT, Université Gustave Eiffel',
    'projects.p2.status': 'Completed',
    'projects.p2.r1':     'Simulated vs experimental temperatures: less than 3°C deviation — validated model',
    'projects.p2.r2':     'Counter-current: superior thermal efficiency across all tested flow rates (1 to 3 L/min)',
    'projects.p2.r3':     'Energy conservation verified: hot/cold flux balance within 1% deviation',

    /* P3 */
    'projects.p3.title':  'Fluid-Structure Interaction — FSI2 Turek & Hron Benchmark',
    'projects.p3.desc':   'Unsteady FSI simulation of laminar flow (Re=100) around a rigid cylinder with elastic beam. Parametric study on time step and dynamic mesh diffusion parameter via partitioned coupling ANSYS Fluent + Mechanical + System Coupling.',
    'projects.p3.date':   'January 2026 — M2 IFSA, Université Gustave Eiffel',
    'projects.p3.status': 'Completed',
    'projects.p3.r1':     'Oscillation frequencies in good agreement with Turek & Hron (2006) benchmark',
    'projects.p3.r2':     'Displacements and Cd/Cl coefficients accurately reproduced for Δt = 0.001s',
    'projects.p3.r3':     'Full parametric study: D ∈ {0,2,3} and Δt ∈ {0.001, 0.002, 0.005} s',

    /* P4 */
    'projects.p4.title':  'Turbulent Flow Modelling — RANS vs LES Comparison in a Plane Channel',
    'projects.p4.desc':   'CFD simulation of turbulent channel flow (Re = 5600) comparing 4 models: RANS (k-ω SST, Spalart-Allmaras) and LES (Smagorinsky, WALE). Laminar validation against Poiseuille analytical solution and analysis of u+(y+) profiles, wall shear stress and Reynolds stresses.',
    'projects.p4.date':   'February 2026 — M2 MFT IFSA, Université Gustave Eiffel',
    'projects.p4.status': 'Completed',
    'projects.p4.r1':     'Laminar validation: Umax = 1.5 × Umean — consistent with Poiseuille analytical solution',
    'projects.p4.r2':     'k-ω SST: best near-wall behaviour among tested RANS models',
    'projects.p4.r3':     'LES WALE: near-direct resolution of small structures — physically most accurate model',

    /* P5 */
    'projects.p5.title':  'Plastic Particle Dynamics in a Fluid — FUGU Code Validation',
    'projects.p5.desc':   'Numerical simulation of a plastic particle (2D disk) rising freely by buoyancy, using the FUGU code based on tensorial penalization and VOF method. Spatial and temporal convergence study in the context of ocean plastic pollution modelling.',
    'projects.p5.date':   'January 2026 — M2 MFT IFSA, Université Gustave Eiffel',
    'projects.p5.status': 'Completed',
    'projects.p5.r1':     'Spatial convergence order p ≈ 1.17 and temporal p ≈ 1.11 — consistent with explicit Euler scheme',
    'projects.p5.r2':     'Terminal velocity converged for Nx ≥ 96 mesh cells per particle diameter',
    'projects.p5.r3':     'Even/odd numerical effect identified and characterised on disk trajectory',

    /* P6 */
    'projects.p6.title':  'Metrological Characterization of an Experimental Bench for Respiratory Emission Collection',
    'projects.p6.desc':   'Development and characterization of an experimental bench for collecting human and animal respiratory aerosols as part of the ANR DISPERSE project. Monodisperse fluorescein aerosol generation via VOAG, multi-instrument collection (Sioutas, BioSampler, Button), and spectrofluorimetric analysis to quantify collected masses under controlled temperature and humidity conditions.',
    'projects.p6.date':   'June–July 2024 — CERTES, Université Paris-Est Créteil (UPEC)',
    'projects.p6.status': 'Completed',
    'projects.p6.r1':     'Validated airtightness — 2 Pa pressure differential between inside and outside the bench',
    'projects.p6.r2':     'VOAG droplet diameter controlled at 40 µm — 1.5 µm dry residues confirmed by APS (model 3321, TSI)',
    'projects.p6.r3':     'Relation d_g = d_ae · ρ₀^(1/2) / (c_m^(1/3) · ρ_m^(1/6)) experimentally validated',
    'projects.p6.r4':     'Operational thermal conditioning: T = 27–37 °C, HR = 0–100 % — precise and reproducible measurements over 5 days',

    /* P7 */
    'projects.p7.title':  'Finite Volume Method: Application to the Lid-Driven Cavity Problem',
    'projects.p7.desc':   'Full implementation of the finite volume method on a staggered grid to solve the 2D incompressible Navier-Stokes equations. Pressure-velocity coupling via projection method, upwind scheme for convection and centered scheme for diffusion. Validated on the lid-driven cavity benchmark at Re = 100 against Ghia et al. reference data.',
    'projects.p7.date':   'February 2026 — Université Gustave Eiffel, Master 2 MFT',
    'projects.p7.status': 'Completed',
    'projects.p7.r1':     'Primary recirculation cell correctly captured — u and v fields consistent with reference data at Re = 100',
    'projects.p7.r2':     'Residual divergence ~10⁻¹⁸ — mass conservation verified to machine precision',
    'projects.p7.r3':     'Velocity profiles u(0.5, y) and v(x, 0.5) in good agreement with reference — relative error between 11% and 33% by position',
    'projects.p7.r4':     'Projection method validated: pressure–velocity decoupling operational on structured staggered grid',

    /* P8 */
    'projects.p8.title':  'Flow and Diffusion in 2D Microporous Media',
    'projects.p8.desc':   'Numerical study of two transport phenomena in 2D porous media. Part one: Stokes flow simulation in a real microporous geometry (640×320 µm) using COMSOL Multiphysics — determination of porosity, REV size and intrinsic permeability via the Kozeny-Carman model. Part two: diffusive transport modelling and identification of effective diffusivity and tortuosity through 1D homogenization.',
    'projects.p8.date':   'January 2026 — Université Paris-Est Créteil (UPEC)',
    'projects.p8.status': 'Completed',
    'projects.p8.r1':     'Porosity determined by surface integration: ϕ = 0.546 — Delesse hypothesis verified (⟨ϕ₁D⟩ = 0.567 ≈ ϕ₂D)',
    'projects.p8.r2':     'REV identified from 3.8×10⁻⁴ m² — convergence of local porosity confirmed',
    'projects.p8.r3':     'Numerical permeability k = 2.03×10⁻¹² m² (Darcy) — consistent with Kozeny-Carman: k_KC = 6.89×10⁻¹² m²',
    'projects.p8.r4':     'Effective diffusivity D_eff = 2.17×10⁻⁶ m²/s, tortuosity τ = 1.76 — 1D homogenized model validated against realistic 2D model',

    /* Skills */
    'skills.tag':          'Expertise',
    'skills.title':        'My skills',
    'skills.cat.cfd':      'CFD / Simulation',
    'skills.cat.prog':     'Programming',
    'skills.cat.num':      'Numerical methods',
    'skills.cat.gen':      'General skills',
    'skills.lang.title':   'Languages',
    'level.advanced':      'Advanced',
    'level.intermediate':  'Intermediate',
    'lang.fr':       'French',   'lang.fr.level': 'Native',
    'lang.en':       'English',  'lang.en.level': 'B2',
    'lang.ar':       'Arabic',   'lang.ar.level': 'Intermediate',
    'lang.es':       'Spanish',  'lang.es.level': 'Intermediate',

    /* Parcours */
    'parcours.tag':   'Journey',
    'parcours.title': 'My story',
    'parcours.tab.exp': 'Experience',
    'parcours.tab.edu': 'Education',
    'status.ongoing': 'Ongoing',
    'status.done':    'Completed',
    'exp.cea.period':  'Feb. 2026 — Aug. 2026 (ongoing)',
    'exp.cea.role':    'Engineering Intern — Thermal-hydraulics & Simulation',
    'exp.cea.org':     'CEA Saclay — STMF (Service de Thermo-hydraulique et Mécanique des Fluides)',
    'exp.cea.desc':    'Final-year internship within the STMF department at CEA Saclay. Thermal-hydraulic modelling and implementation of physical correlations in industrial simulation codes (C++). Domain: pressurized water reactors (PWR).',
    'exp.certes.role': 'L3 Intern — Aerosol metrology',
    'exp.certes.org':  'CERTES, Université Paris-Est Créteil (UPEC)',
    'exp.certes.desc': 'Development and characterisation of an experimental bench for respiratory aerosol collection as part of the ANR DISPERSE project.',
    'exp.nema.role':   'Vice-President & Co-Founder — NEMA Association',
    'exp.nema.org':    'Student association',
    'exp.nema.desc':   'Humanitarian association supporting homeless people and those in precarious situations. Co-creation and management of the association, volunteer team coordination and solidarity event organisation.',
    'edu.m2.role':      'Master 2 — MFT / IFSA',
    'edu.m2.org':       'Université Gustave Eiffel',
    'edu.m2.desc':      'Modelling and Simulation in Fluid Mechanics and Heat Transfer — specialisation in CFD, advanced numerical methods, fluid-structure coupling and heat transfer.',
    'edu.licence.role': 'Bachelor in Mechanics',
    'edu.licence.org':  'Université Paris-Est Créteil (UPEC)',
    'edu.licence.desc': 'Bachelor of Physics — Mechanics Track at Université Paris-Est Créteil. Curriculum combining general physics courses (thermodynamics, electromagnetism, optics) and mechanics specialisations (fluid mechanics, solid mechanics, structural analysis).',
    'edu.bac.role':     'French Baccalauréat',
    'edu.bac.org':      'Lycée Pauline Rolland',
    'edu.bac.desc':     'Specialisations: Physics-Chemistry and Mathematics.',

    /* Contact */
    'contact.headline':      'Let\'s work together.',
    'contact.desc':          'Available for a position, internship or collaboration. Feel free to reach out.',
    'contact.email.label':   'Email',
    'contact.linkedin.label':'LinkedIn',
    'contact.github.label':  'GitHub',
    'contact.phone.label':   'Phone',
  },
};

/* ── State ──────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'fr';

/* ── Core ───────────────────────────────────── */
function t(key) {
  return (translations[currentLang]?.[key]) ?? key;
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text !== undefined) el.textContent = text;
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.lang-toggle__cur').textContent = lang.toUpperCase();
    toggle.querySelector('.lang-toggle__oth').textContent = lang === 'fr' ? 'EN' : 'FR';
    toggle.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', toggleLang);
});
