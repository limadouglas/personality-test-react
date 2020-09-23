// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'AVENTUREIRO'
      },
      {
        type: ' ',
        content: 'SOCIÁVEL'
      },
      {
        type: 'J,Brown,D,No',
        content: "CONTROLADO"
      },
      {
        type: 'J,Brown,D,No',
        content: "ATENCIOSO"
      }
    ]
  },
  // question #2
  {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'COMPETITIVO'
      },
      {
        type: ' ',
        content: 'CONVINCENTE'
      },
      {
        type: 'N,Green,C,No',
        content: "SUBMISSO"
      },
      {
        type: 'N,Green,C,No',
        content: "DOADOR"
      }
    ]
  },
  // question #3
  {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'HABILIDOSO'
      },
      {
        type: ' ',
        content: 'ESTIMULANTE'
      },
      {
        type: 'S,Red,A,No',
        content: "RESERVADO"
      },
      {
        type: 'S,Red,A,No',
        content: "RESPEITOSO"
      }
    ]
  },
  // question #4
  //			

  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'AUTOSUFICIENTE'
      },
      {
        type: ' ',
        content: 'ESPIRITUOSO'
      },
      {
        type: 'J,Brown,D,No',
        content: "SENSÍVEL"
      },
      {
        type: 'J,Brown,D,No',
        content: "SATISFEITO"
      }
    ]
  },
  // question #5
   {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'POSITIVO'
      },
      {
        type: ' ',
        content: 'CHARMOSO'
      },
      {
        type: 'T,Brown,C,No',
        content: "PACIENTE"
      },
      {
        type: 'T,Brown,C,No',
        content: "PLANEJADOR"
      }
    ]
  },
  // question #6
  {
    question: 'I tend to keep my social circle small.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'SEGURO'
      },
      {
        type: ' ',
        content: 'ESPONÂNEO'
      },
      {
        type: 'I,Green,C,No',
        content: "TÍMIDO"
      },
      {
        type: 'I,Green,C,No',
        content: "ORGANIZADO"
      }
    ]
  },
  // question #7

  {
    question: 'I like to share my ideas with others.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'FRANCO'
      },
      {
        type: ' ',
        content: 'OTIMISTA'
      },
      {
        type: 'E,Blue,B,No',
        content: "SERVIÇAL"
      },
      {
        type: 'E,Blue,B,No',
        content: "ORDEIRO"
      }
    ]
  },
  // question #8	

  {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'VIGOROSO'
      },
      {
        type: '',
        content: 'ENGRAÇADO'
      },
      {
        type: 'E,Blue,B,No',
        content: "AMIGÁVEL"
      },
      {
        type: 'E,Blue,B,No',
        content: "FIEL"
      }
    ]
  },
  // question #9

  {
    question: 'I always express concern for others when making decisions.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'AUDACIOSO'
      },
      {
        type: ' ',
        content: 'ENCANTADOR'
      },
      {
        type: 'F,Blue,B,No',
        content: "DIPLOMÁTICO"
      },
      {
        type: 'F,Blue,B,No',
        content: "MINUCIOSO"
      }
    ]
  },
  // question #10
  {
    question: 'I like to try new things.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'CONFIANTE'
      },
      {
        type: ' ',
        content: 'ALEGRE'
      },
      {
        type: 'P,Red,A,No',
        content: "PREVISÍVEL"
      },
      {
        type: 'P,Red,A,No',
        content: "CULTO"
      }
    ]
  },
  // question #11			

  {
    question: 'I can easily adjust to a change in decision.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'INDEPENDENTE'
      },
      {
        type: ' ',
        content: 'INSPIRADO'
      },
      {
        type: 'P,Red,A,No',
        content: "INOFENSIVO"
      },
      {
        type: 'P,Red,A,No',
        content: "IDEALISTA"
      }
    ]
  },
  // question #12		

  {
    question: 'I solve problems by working through facts until I understand the problem.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: 'DECIDIDO'
      },
      {
        type: ' ',
        content: 'DEMONSTRATIVO'
      },
      {
        type: 'S,Brown,C,No',
        content: "IRÔNICO"
      },
      {
        type: 'S,Brown,C,No',
        content: "PROFUNDO"
      }
    ]
  },
  // question #13
  {
    question: 'I rely on logic rather than intuition when making a decision.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'ATIVO'
      },
      {
        type: ' ',
        content: 'DESEMBARAÇADO'
      },
      {
        type: 'T,Green,C,No',
        content: "MEDIADOR"
      },
      {
        type: 'T,Green,C,No',
        content: "MUSICAL"
      }
    ]
  },
  // question #14
  {
    question: '',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'FIRME'
      },
      {
        type: ' ',
        content: 'CONVERSADOR'
      },
      {
        type: 'F,Blue,B,No',
        content: "TOLERANTE"
      },
      {
        type: 'F,Blue,B,No',
        content: "PENSATIVO"
      }
    ]
  },
  // question #15
  //			

  {
    question: 'I learn best by seeing step by step instructions.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: 'LIDER'
      },
      {
        type: ' ',
        content: 'VIVO'
      },
      {
        type: 'S,Brown,D,No',
        content: "OUVINTE"
      },
      {
        type: 'S,Brown,D,No',
        content: "LEAL"
      }
    ]
  },
  // question #16

  {
    question: 'I sometimes move onto another task before completing my current one.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'CHEFE'
      },
      {
        type: ' ',
        content: 'ATRAENTE'
      },
      {
        type: 'P,Red,A,No',
        content: "CONTENTE"
      },
      {
        type: 'P,Red,A,No',
        content: "DETALHISTA"
      }
    ]
  },
  // question #17
  //			

  {
    question: 'I prefer a flexible and spontaneous way of life.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'PRODUTIVO'
      },
      {
        type: ' ',
        content: 'POPULAR'
      },
      {
        type: 'P,Red,A,No',
        content: "AGRADÁVEL"
      },
      {
        type: 'P,Red,A,No',
        content: "PERFECCIONISTA"
      }
    ]
  },
  // question #18

  {
    question: 'I like to keep my options open when making decisions.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Green,D',
        content: 'VALENTE'
      },
      {
        type: ' ',
        content: 'VIVAZ'
      },
      {
        type: 'P,Green,D,No',
        content: "EQUILIBRADO"
      },
      {
        type: 'P,Green,D,No',
        content: "COMPORTADO"
      }
    ]
  },
  // question #19
  {
    question: 'I feel comfortable in crowds.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'AUTORITÁRIO'
      },
      {
        type: ' ',
        content: 'METIDO'
      },
      {
        type: 'E,Blue,B,No',
        content: "TRANQUILO"
      },
      {
        type: 'E,Blue,B,No',
        content: "ACANHADO"
      }
    ]
  },
  // question #20
  {
    question: 'I like to share my feelings with others.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'INSENSÍVEL'
      },
      {
        type: ' ',
        content: 'INDISCIPLINADO'
      },
      {
        type: 'E,Blue,B,No',
        content: "DESINTERESSADO"
      },
      {
        type: 'E,Blue,B,No',
        content: "RANCOROSO"
      }
    ]
  },
  // question #21
  {
    question: 'I prefer to work/do right away rather than spend time making a plan.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'INFLEXÍVEL'
      },
      {
        type: ' ',
        content: 'REPETITIVO'
      },
      {
        type: 'S,Brown,A,No',
        content: "RELUTANTE"
      },
      {
        type: 'S,Brown,A,No',
        content: "RESSENTIDO"
      }
    ]
  },
  // question #22
  {
    question: 'I know my priorities.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'MANDÃO'
      },
      {
        type: ' ',
        content: 'ESQUECIDO'
      },
      {
        type: 'S,Brown,A,No',
        content: "MEDROSO"
      },
      {
        type: 'S,Brown,A,No',
        content: "COMPLICADO"
      }
    ]
  },
  // question #23
  //			

  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'IMPACIENTE'
      },
      {
        type: ' ',
        content: 'INOPORTUNO'
      },
      {
        type: '',
        content: "INDECISO"
      },
      {
        type: '',
        content: "INSEGURO"
      }
    ]
  },
  // question #24
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'FRIO'
      },
      {
        type: ' ',
        content: 'IMPREVISÍVEL'
      },
      {
        type: '',
        content: "DESLIGADO"
      },
      {
        type: '',
        content: "IMPOPULAR"
      }
    ]
  },
  // question #25
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'CABEÇA DURA'
      },
      {
        type: ' ',
        content: 'CASUAL'
      },
      {
        type: '',
        content: "EXITANTE"
      },
      {
        type: '',
        content: "INSATISFEITO"
      }
    ]
  },
  // question #26 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'ORGULHOSO'
      },
      {
        type: ' ',
        content: 'PERMISSIVO'
      },
      {
        type: '',
        content: "SIMPLES"
      },
      {
        type: '',
        content: "CAUTELOSO"
      }
    ]
  },
  // question #27 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'DISCUTIDOR'
      },
      {
        type: ' ',
        content: 'ESQUENTADO'
      },
      {
        type: '',
        content: "INCERTO"
      },
      {
        type: '',
        content: "ALIENADO"
      }
    ]
  },
  // question #28 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'OUSADO'
      },
      {
        type: ' ',
        content: 'INGÊNUO'
      },
      {
        type: '',
        content: "INDIFERENTE"
      },
      {
        type: '',
        content: "NEGATIVO"
      }
    ]
  },
  // question #29 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'TRABALHADOR'
      },
      {
        type: ' ',
        content: 'EGOÍSTA'
      },
      {
        type: '',
        content: "PREOCUPADO"
      },
      {
        type: '',
        content: "RETRAIDO"
      }
    ]
  },
  // question #30 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'INDELICADO'
      },
      {
        type: ' ',
        content: 'TAGARELA'
      },
      {
        type: '',
        content: "TÍMIDO"
      },
      {
        type: '',
        content: "SENSÍVEL DEMAIS"
      }
    ]
  },
  // question #31 			

  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'MANDÃO'
      },
      {
        type: ' ',
        content: 'DESORGANIZADO'
      },
      {
        type: '',
        content: "CONFUSO"
      },
      {
        type: '',
        content: "DEPRIMIDO"
      }
    ]
  },
  // question #32 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'INTOLERANTE'
      },
      {
        type: ' ',
        content: 'INCOSTANTE'
      },
      {
        type: '',
        content: "APÁTICO"
      },
      {
        type: '',
        content: "INTROVERTIDO"
      }
    ]
  },
  // question #33 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'MANIPULADOR'
      },
      {
        type: ' ',
        content: 'DESORDENADO'
      },
      {
        type: '',
        content: "RESMUNGÃO"
      },
      {
        type: '',
        content: "TRISTE"
      }
    ]
  },
  // question #34 		 

  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'OBSTINADO'
      },
      {
        type: ' ',
        content: 'CONVENCIDO'
      },
      {
        type: '',
        content: "LENTO"
      },
      {
        type: '',
        content: "CÉTICO(NÃO ACREDITAR)"
      }
    ]
  },
  // question #35 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'TIRÂNICO'
      },
      {
        type: ' ',
        content: 'BARULHENTO'
      },
      {
        type: '',
        content: "PREGUIÇOSO"
      },
      {
        type: '',
        content: "SOLITÁRIO"
      }
    ]
  }, 
  // question #36 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'IRRITÁVEL'
      },
      {
        type: ' ',
        content: 'DISTRAÍDO'
      },
      {
        type: '',
        content: "VAGAROSO"
      },
      {
        type: '',
        content: "DESCONFIADO"
      }
    ]
  },
  // question #37 			

  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'IMPRUDENTE'
      },
      {
        type: ' ',
        content: 'AGITADO'
      },
      {
        type: '',
        content: "RELUTANTE"
      },
      {
        type: '',
        content: "VINGATIVO"
      }
    ]
  },
  // question #38 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'ASTUTO'
      },
      {
        type: ' ',
        content: 'INSTÁVEL'
      },
      {
        type: '',
        content: "ACOMODADO"
      },
      {
        type: '',
        content: "CRÍTICO"
      }
    ]
  },
  // question #39 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'AVENTUREIRO'
      },
      {
        type: ' ',
        content: 'ANIMADO'
      },
      {
        type: '',
        content: "ADAPTÁVEL"
      },
      {
        type: '',
        content: "ANALÍTICO"
      }
    ]
  },
  // question #40 			
  {
    question: "",
    answers: [
      {
        // briggs, color, letter
        type: '',
        content: 'PERSUASIVO'
      },
      {
        type: ' ',
        content: 'BRINCALHÃO'
      },
      {
        type: '',
        content: "SERENO"
      },
      {
        type: '',
        content: "PERSISTENTE"
      }
    ]
  },
]

export default quizQuestions
