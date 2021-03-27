/* Number of total columns/semesters: */
window.semesters = 8;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ad3d39", "#a104d1", "#11ede6"];

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
    { name: "Fund da Linguística", credits: 4, code: "LEF140", semester: 1},
    { name: "Int Cult.Rom. Morf. Latim", credits: 4, code: "LEC160", semester: 1},
    { name: "Introdução Língua Grega Antiga", credits: 4, code: "LEC111", semester: 1},
    { name: "Teoria Literária I", credits: 4, code: "LEL101", semester: 1},
    { name: "Língua Francesa I", credits: 6, code: "LEN100", semester: 1},
    { name: "Produção Leitura Textos Lp", credits: 2, code: "LEV113", semester: 1},
	
    { name: "Filos Edu. M. O.", credits: 4, code: "EDF120", semester: 2},
    { name: "Int Lit Grega A.", credits: 4, code: "LEC115", semester: 2},
    { name: "Int Ort. Latina", credits: 4, code: "LEC166", semester: 2},
    { name: "Fund de An Fonol", credits: 4, code: "LEF150", semester: 2},
    { name: "Teoria Literária II", credits: 4, code: "LEL110", semester: 2},
    { name: "Língua Francesa II", credits: 6, code: "LEN102", semester: 2},
    { name: "Variação em L.P.", credits: 4, code: "LEV100", semester: 2},
	
    { name: "Sociológia Educação", credits: 4, code: "EDF240", semester: 3},
    { name: "Líng e Lit Latinas", credits: 4, code: "LEC262", semester: 3},
    { name: "Análise Sintática", credits: 4, code: "LEF240", semester: 3},
    { name: "Teoria Literária III", credits: 4, code: "LEL230", semester: 3},
    { name: "Fund Bras", credits: 2, code: "LEL287", semester: 3},
    { name: "Língua Francesa III", credits: 6, code: "LEN200", semester: 3},
    { name: "Fund Cult Lit Franc", credits: 3, code: "LEN219", semester: 3},
    { name: "Fonologia da LP", credits: 4, code: "LEV112", semester: 3},
	
    { name: "Psicologia da Educação", credits: 4, code: "EDF245", semester: 4},
    { name: "Líng e Lit Latinas Nar.", credits: 4, code: "LEC266", semester: 4},
    { name: "Linguís e Suas Aplicações", credits: 2, code: "LEF244", semester: 4},
    { name: "Literatura Comparada", credits: 4, code: "LEL236", semester: 4},
    { name: "Língua Francesa IV", credits: 6, code: "LEN204", semester: 4},
    { name: "Lit Francesa I: Poesia", credits: 3, code: "LEN224", semester: 4},
    { name: "Morfologia L.P.", credits: 4, code: "LEV200", semester: 4},
	
    { name: "Educacao Brasileira", credits: 4, code: "EDA234", semester: 5},
    { name: "Didática", credits: 4, code: "EDD241", semester: 5},
    { name: "Intr à Crítica Textual", credits: 4, code: "LEF357", semester: 5},
    { name: "Língua Francesa V", credits: 6, code: "LEN300", semester: 5},
    { name: "Lit Francesa II : Nar", credits: 3, code: "LEN318", semester: 5},
    { name: "Morfo Líng Portuguesa", credits: 4, code: "LEV210", semester: 5},
    { name: "Lit Bras I - Poesia", credits: 4, code: "LEV308",  semester: 5},
    { name: "Poesia Portuguesa", credits: 4, code: "LEV343",  semester: 5},

    { name: "Did Ling Port e Lit I", credits: 2, code: "EDD517", semester: 6},
    { name: "Didatica de Francês I", credits: 2, code: "EDD521", semester: 6},
    { name: "Pr Ens Port-Franc Estág Sup", credits: 8, code: "EDDU26", semester: 6},
    { name: "Profissão Docente", credits: 2, code: "EDW001", semester: 6},
    { name: "Língua Francesa VI", credits: 4, code: "LEN304", semester: 6},
    { name: "Lit Fran III:Teatro", credits: 3, code: "LEN319", semester: 6},
    { name: "Sintaxe da Líng Port", credits: 4, code: "LEV300", semester: 6},
    { name: "Lit Bras II - Ficção", credits: 4, code: "LEV309", semester: 6},
    { name: "Narrativa Portuguesa", credits: 4, code: "LEV450", semester: 6},
	
    { name: "Did Ling Port e Lit II", credits: 2, code: "EDD625", semester: 7},
    { name: "Didática de Francês II", credits: 2, code: "EDD627", semester: 7},
    { name: "Est da Líng Bras de Sinais I", credits: 4, code: "LEV599", semester: 7},
    { name: "Lit Franc IV:Crít Franc", credits: 4, code: "LEN419", semester: 7},
    { name: "Língua Francesa VII", credits: 2, code: "LEN476", semester: 7},
    { name: "Semântica da L.P.", credits: 4, code: "LEV400", semester: 7},
    { name: "Fund de Gramaticografia", credits: 2, code: "LEF400", semester: 7},
    { name: "Tem e Prob da Lit Bras", credits: 2, code: "LEV417", semester: 7},
    { name: "Monografia", credits: 2, code: "LEWK01", semester: 7},
	
    { name: "Lit Franc V: Tóp Esp", credits: 4, code: "LEN420", semester: 8},
    { name: "Língua Francesa VIII", credits: 2, code: "LEN484", semester: 8},
    { name: "História da L.P.", credits: 4, code: "LEV310", semester: 8},
    { name: "Ens Port: Ling Materna", credits: 2, code: "LEV489", semester: 8},
]
