/* Number of total columns/semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ad3d39", "#a104d1", "#11ede6"];

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
    { name: "Bases Biológicas Fisioterapia", credits: 21.0, code: "BMW013", semester: 1},
    { name: "Bioquímica Ft", credits: 5.0, code: "BQM147", semester: 1},
    { name: "História Fundam Fisioterapia", credits: 2, code: "FMK122", semester: 1},
    { name: "Ativ Curricular Extensão - Ftp", credits: 0, code: "FMWZ52", semester: 1},
	
    { name: "Sistema Neurolocomotor", credits: 10, code: "FML243", semester: 2},
    { name: "Fund da Fisica e Biofisica", credits: 3, code: "ISC127", semester: 2},
    { name: "Cinesiologia Ft", credits: 3, code: "ISC128", semester: 2},
    { name: "Atividades Complementares", credits: 1, code: "BMW238", semester: 2},
    { name: "Atenção Pes C Defic na Socied", credits: 2, code: "FMK232", semester: 2},
    { name: "Metodologia Cientifica", credits: 3, code: "FMK238 ", semester: 2},
    { name: "Informação em Saúde", credits: 2, code: "FMKX01", semester: 2},
	
    { name: "Bases Biológicas dos Sistemas", credits: 14, code: "BMW238", semester: 3},
    { name: "Fundam do Exercício Terap", credits: 2,code: "FMK232", semester: 3},
    { name: "Semiologia Fisioterapêutica", credits: 4, code: "FMK238", semester: 3},
    { name: "Iniciação Científica I - F", credits: 0, code: "FMKX01", semester: 3},
    { name: "Bioestatistica Ft", credits: 2, code: "ISC235", semester: 3},
	
    { name: "Farmacologia F", credits: 3, code: "BMW355", semester: 4},
    { name: "Agentes Biof Terapêuticos", credits: 2, code: "FMK237", semester: 4},
    { name: "Terapia Manual", credits: 3, code: "FMK240", semester: 4},
    { name: "Métodos Cinesioterapêuticos", credits: 4, code : "FMK247", semester: 4},
    { name: "Iniciação Científica II - F", credits: 0, code: "FMKX02", semester: 4},
    { name: "Psicologia Geral", credits: 3, code: "FML245", semester: 4},
    { name: "Patologia Processos Gerais Ft", credits: 2, code: "FMP122", semester: 4},
    { name: "Saude Coletiva", credits: 4, code: "ISC249", semester: 4},
	
    { name: "Fisio Disfunções Musculoesq", credits: 4, code: "FMK246", semester: 5},
    { name: "Fisioterapia Respiratória", credits: 6, code: "FMK351", semester: 5},
    { name: "Fisioterapia Cardiovascular", credits: 6, code: "FMK352", semester: 5},
    { name: "Saúde na Primeira Infancia", credits: 4, code: "FMK359", semester: 5},
    { name: "Fisioterapia Neurofuncional I", credits: 6, code: "FMK360", semester: 5},
	
    { name: "Fisio Traumato-ortop Funcional", credits: 6, code: "FMK358", semester: 6},
    { name: "Fisioterapia Terapia Intensiva", credits: 6, code: "FMK366", semester: 6},
    { name: "Fisio Saúde da Crian e Adolenc", credits: 9, code: "FMK367", semester: 6},
    { name: "Fisio Neurofuncional II", credits: 7, code: "FMK368", semester: 6},
    { name: "Ética Profissional e Cidadania", credits: 3, code: "FML246", semester: 6},
	
    { name: "Estágio Supervisionado I - F", credits: 10, code: "FMKU15", semester: 7},
	
    { name: "Estágio Supervisionado II - F", credits: 10, code: "FMKU16", semester: 8},
	
    { name: "Fisio na Saúde da Mulher", credits: 2, code: "FMK248", semester: 9},
    { name: "Fisioterapia Dermatofuncional", credits: 2, code: "FMK590", semester: 9},
    { name: "Trabalho de Conclusão Curso", credits: 0, code: "FMKK01", semester: 9},
    { name: "Estágio Supervisionado III - F", credits: 4, code: "FMKU17", semester: 9},
	
    { name: "	Fisioterapia na Saúde do Idoso", credits: 2, code: "FMK592", semester: 10},
    { name: "Fisio Atenção Primária à Saúde", credits: 3, code: "FMK593", semester: 10},
    { name: "Estágio Supervisionado IV - F", credits: 4, code: "FMKU18", semester: 10},
]
