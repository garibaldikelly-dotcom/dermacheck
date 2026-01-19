const ingredientesDB = {
"ácido hialurónico": {
    beneficio: "Hidrata profundamente y ayuda a retener la humedad.",
    advertencia: "Debe aplicarse sobre piel ligeramente húmeda.",
    riesgo: "Prácticamente sin riesgos conocidos."
  },
  "glicerina": {
    beneficio: "Humectante que atrae agua a la piel.",
    advertencia: "Funciona mejor combinada con oclusivos.",
    riesgo: "Muy segura para la mayoría de pieles."
  },
  "pantenol": {
    beneficio: "Calma, hidrata y ayuda a reparar la piel.",
    advertencia: "Ideal para piel sensible o irritada.",
    riesgo: "Riesgos mínimos."
  },

  // 🔹 ACTIVOS PARA ACNÉ
  "ácido salicílico": {
    beneficio: "Exfolia poros y combate el acné.",
    advertencia: "No usar en exceso en piel seca.",
    riesgo: "Irritación si se usa incorrectamente."
  },
  "peróxido de benzoilo": {
    beneficio: "Elimina bacterias causantes del acné.",
    advertencia: "Puede resecar la piel.",
    riesgo: "Irritación y descamación."
  },
  "azelaico": {
    beneficio: "Reduce acné, manchas y rojeces.",
    advertencia: "Resultados progresivos.",
    riesgo: "Hormigueo leve inicial."
  },

  // 🔹 ANTIEDAD / RENOVACIÓN
  "retinol": {
    beneficio: "Reduce arrugas y mejora la textura.",
    advertencia: "Usar solo de noche.",
    riesgo: "Irritación y sensibilidad solar."
  },
  "retinal": {
    beneficio: "Más potente que el retinol.",
    advertencia: "Solo usuarios avanzados.",
    riesgo: "Irritación si se usa en exceso."
  },
  "bakuchiol": {
    beneficio: "Alternativa vegetal al retinol.",
    advertencia: "Resultados más suaves.",
    riesgo: "Muy bien tolerado."
  },

  // 🔹 ILUMINADORES / MANCHAS
  "vitamina c": {
    beneficio: "Ilumina y protege contra radicales libres.",
    advertencia: "Puede oxidarse fácilmente.",
    riesgo: "Irritación en piel sensible."
  },
  "ácido kójico": {
    beneficio: "Ayuda a reducir manchas.",
    advertencia: "Usar con protector solar.",
    riesgo: "Irritación si se abusa."
  },
  "alfa arbutina": {
    beneficio: "Unifica el tono de la piel.",
    advertencia: "Resultados graduales.",
    riesgo: "Bajo riesgo."
  },

  // 🔹 EXFOLIANTES
  "ácido glicólico": {
    beneficio: "Mejora textura y luminosidad.",
    advertencia: "No usar diariamente.",
    riesgo: "Fotosensibilidad."
  },
  "ácido láctico": {
    beneficio: "Exfolia suavemente e hidrata.",
    advertencia: "Apto para piel sensible.",
    riesgo: "Irritación leve."
  },
  "pha": {
    beneficio: "Exfoliante suave para piel sensible.",
    advertencia: "Resultados lentos.",
    riesgo: "Muy seguro."
  },

  // 🔹 CONSERVANTES / CONTROVERSIA
  "parabenos": {
    beneficio: "Previenen contaminación bacteriana.",
    advertencia: "Uso regulado.",
    riesgo: "Controversia por disrupción hormonal."
  },
  "fenoxietanol": {
    beneficio: "Conservante eficaz.",
    advertencia: "Permitido en bajas concentraciones.",
    riesgo: "Irritación rara."
  },

  // 🔹 INGREDIENTES POTENCIALMENTE IRRITANTES
  "alcohol denat": {
    beneficio: "Mejora absorción.",
    advertencia: "No ideal para piel seca.",
    riesgo: "Daño a la barrera cutánea."
  },
  "fragancia": {
    beneficio: "Aroma agradable.",
    advertencia: "Evitar en piel sensible.",
    riesgo: "Alergias y dermatitis."
  },
  "aceites esenciales": {
    beneficio: "Propiedades aromáticas.",
    advertencia: "Pueden ser irritantes.",
    riesgo: "Sensibilización."
  },

  // 🔹 FILTROS SOLARES
  "óxido de zinc": {
    beneficio: "Protección solar física.",
    advertencia: "Puede dejar rastro blanco.",
    riesgo: "Muy seguro."
  },
  "dióxido de titanio": {
    beneficio: "Protege contra rayos UV.",
    advertencia: "Uso tópico seguro.",
    riesgo: "Sin riesgos significativos."
  },

  // 🔹 CALMANTES
  "centella asiática": {
    beneficio: "Calma y repara la piel.",
    advertencia: "Ideal post-acné.",
    riesgo: "Muy segura."
  },
  "aloe vera": {
    beneficio: "Hidratante y calmante.",
    advertencia: "Verificar pureza.",
    riesgo: "Reacciones raras."
  },
  "niacinamida": {
    beneficio: "Fortalece la barrera cutánea y mejora la textura.",
    advertencia: "Bien tolerada en la mayoría de los tipos de piel.",
    riesgo: "Puede causar leve enrojecimiento en pieles sensibles."
  },
  "retinol": {
    beneficio: "Estimula la renovación celular y reduce arrugas.",
    advertencia: "Usar solo de noche y con protector solar.",
    riesgo: "Puede causar irritación, descamación y sensibilidad."
  },
  "ácido salicílico": {
    beneficio: "Limpia poros y combate el acné.",
    advertencia: "No usar en exceso en piel seca.",
    riesgo: "Irritación o ardor si se usa incorrectamente."
  },
  "ácido hialurónico": {
    beneficio: "Hidrata y retiene la humedad en la piel.",
    advertencia: "Debe sellarse con crema hidratante.",
    riesgo: "Prácticamente sin riesgos conocidos."
  },
  "alcohol denat": {
    beneficio: "Mejora la textura y absorción del producto.",
    advertencia: "Puede resecar la piel sensible.",
    riesgo: "Debilita la barrera cutánea con uso frecuente."
  },
  "fragancia": {
    beneficio: "Mejora la experiencia sensorial.",
    advertencia: "No recomendada para piel sensible.",
    riesgo: "Puede causar alergias o dermatitis."
  },
  "parabenos": {
    beneficio: "Conservantes que previenen bacterias.",
    advertencia: "Uso regulado por autoridades sanitarias.",
    riesgo: "Controversia por posible disrupción hormonal."
  },
  "sulfatos": {
    beneficio: "Limpieza profunda.",
    advertencia: "Puede ser agresivo para piel seca.",
    riesgo: "Resequedad e irritación prolongada."
  },
  "vitamina c": {
    beneficio: "Ilumina la piel y combate radicales libres.",
    advertencia: "Puede oxidarse si no está bien formulada.",
    riesgo: "Irritación leve en piel sensible."
  },
  "benzoyl peroxide": {
    beneficio: "Elimina bacterias causantes del acné.",
    advertencia: "Puede decolorar telas.",
    riesgo: "Resequedad e irritación."
  }
};
export default ingredientesDB;
