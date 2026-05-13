export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  description: string
  specialties: string[]
  education: string
  experience: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "kevin-urrutia",
    name: "Kevin Urrutia",
    role: "Socio Fundador & Abogado",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZh6AQUxk1iflCjgu200Im6HiyTrmNVz5KtFQG4bp9bzK2aflIbgXqMPBxdcKzHM0n8e-Esn3QGs6DxozDI0ogjJV8qsXmFITKLXr3-Su2DAONHvYI1ErBaEq_D_BIOScGy5yLz5hO132BPvEv_IGPT8TiwATQRHP-N0pAih0sUMjogUGdx-dHmJ11Y-3EcbpiGk7CeNGGktPSEsJqp8pjEXFU9LvEdAim3mgznOQqRqJiRVg_-YsYLqwG7jNkzqhJU8UOOQPRWwu5",
    description: "Con mas de 15 anos de experiencia en derecho corporativo e internacional, Kevin ha liderado mas de 300 casos exitosos en mercados de America Latina, Europa y Estados Unidos. Su vision estrategica y enfoque innovador han posicionado a Luro Legal como referente en la practica juridica de alto nivel.",
    specialties: ["Derecho Corporativo Internacional", "Fusiones y Adquisiciones", "Arbitraje Comercial"],
    education: "J.D. Universidad de los Andes, LL.M. Harvard Law School",
    experience: "15+ anos de trayectoria"
  },
  {
    id: "elena-sofia",
    name: "Dra. Elena Sofia",
    role: "Especialista en Litigio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1tZjE4V23MCYDEfuYOlKuYjAWtRzZz9iyB7UiM78HvYAGaPxYUydBnr6_YxBvBZc4RpwMp41xLkCoOi8Q7wno6zwViFdqi5auo1R9plHQLvF-ioiJOQ5L2-GtRHgJ9s4Kk4yuo0Pqil2qe4mSErhpxAyKtT9gF_GduypIkFpY45n7ECj7uMhes615Ce3MWj4s3mTznrIporfCo0EMmdhePjZG738S2MuawwaWQESZwPGaadtpxPyMN4aH6av6JEHlvqpaQSv17to1",
    description: "Elena es reconocida por su capacidad para resolver disputas complejas en tribunales nacionales e internacionales. Ha representado a multinacionales en casos de alto perfil, obteniendo resultados excepcionales que protegen los intereses de nuestros clientes.",
    specialties: ["Litigio Civil y Comercial", "Arbitraje Internacional", "Derecho Procesal"],
    education: "Abogada Universidad Externado, Maestria en Litigio Internacional - NYU",
    experience: "12 anos de experiencia"
  },
  {
    id: "ricardo-mendez",
    name: "Dr. Ricardo Mendez",
    role: "Consultor Internacional",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRWLlNrkylZLfpHKMs_J2Om0H1P_JS0VGSeQOoxDQ2Jh65QeTMjjHnzXefnR11Fq3eFp-oDODjW77kcSEV7D-YeEKveB0vSJbyRNnKaTmFyPOJzKzUEyhUiSRoKRwW2XnBiApyHNH9t6W94EWGwR2sFli0zrsUnvZflRQav7WjAsa-nxLhXJunZ-RbhKthI8YYZ_QSncsEQt81E8AMdA3h1uRmQ_wi2VTnJtj-d2vzjciXe6URGb3tLm6cyx9dvjAK3n_MnwjKKS3B",
    description: "Ricardo aporta una perspectiva global unica, habiendo trabajado en firmas de renombre en Londres, Nueva York y Singapur. Su experiencia en transacciones transfronterizas y regulaciones internacionales es invaluable para clientes con operaciones globales.",
    specialties: ["Comercio Internacional", "Regulacion Financiera", "Inversiones Extranjeras"],
    education: "LL.B. Universidad Javeriana, LL.M. London School of Economics",
    experience: "14 anos de experiencia"
  },
  {
    id: "camila-vargas",
    name: "Dra. Camila Vargas",
    role: "Derecho Corporativo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjofmtywbaj0uQYZhAnCK153nMcBXCM4yeFrgr9XcuYCRUPj6eQR9wddQHKCmQOFpaj5kqdh61zoQ_f1AScfUXCjCayv6it3H73cLckR-T_rOyn8ldQmNrLNiOfuGWJEvvS628tYjMA7Bzb_qUFyfVDSzflgFnBprSzKvvbsBJR7A33ak35aSBi26-3wXAcMOQBUytpJsdyQzg_UUTa5UKSgP0QKIDWcIw9oXEo6877ZQyblK-yrnoBMbdeoClKq92mi8qQGntk1Kg",
    description: "Camila es experta en estructuracion corporativa y gobierno empresarial. Ha asesorado a mas de 50 empresas en procesos de constitucion, reestructuracion y expansion, garantizando el cumplimiento normativo y la optimizacion de estructuras societarias.",
    specialties: ["Gobierno Corporativo", "Constitucion de Sociedades", "Due Diligence"],
    education: "Abogada Universidad del Rosario, MBA INCAE Business School",
    experience: "10 anos de experiencia"
  },
  {
    id: "andres-felipe",
    name: "Andres Felipe",
    role: "Analista Legal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEl4pCxAF9nRrUpezaGvysL5y7S7XBZ05g0U0V-9X4Vn3RIvz7J4_VGKcznj9xbgLPOwpg1XZ4ikXkmFARiA9S7qGXDtezej9En_6iBvfj0HdeQ0I4ALLQmQsuJROyRTL0m4E9UXZluERu0wknEvnXuyYlEs0FTkB_dcxRtWLXuP6yAg2mFvLt5iblxcjopJfiUxCbb_bHq0x0iLv0P4DA62rZz7EzXVOeabpdBxu0IMZw4_gJs2wcwI5zxzMC9Etz97e5P6OxErI_",
    description: "Andres combina su formacion juridica con habilidades analiticas excepcionales. Es responsable de la investigacion legal y el analisis de precedentes que respaldan las estrategias de nuestro equipo senior, contribuyendo al exito de casos complejos.",
    specialties: ["Investigacion Juridica", "Analisis de Precedentes", "Documentacion Legal"],
    education: "Abogado Universidad Nacional, Especializacion en Derecho Comercial",
    experience: "5 anos de experiencia"
  },
  {
    id: "isabela-ruiz",
    name: "Dra. Isabela Ruiz",
    role: "Propiedad Intelectual",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfAxFRt8o2jIHT18uGM1j4s4pS4IM_sQDXrVA5PS9zDtaJO4ArKhjK_3S3zzzQ9-5y6-z2zOxfD35M-2diq07wACHuU9ZLlj7sVXlYUWbABGVP2P7F_dC-3LVtophpwnQ6Ls8IE34Rw-x30FSl_OLZDkAMz84fGeWr3wpg0Hue11DEbrK4pZ1rcU67tfkNN4zcVCrmHZ4tCTNfudzPeTcmDAxIWvaHjLqzZfyFroWHW8uPR1-JSMHKXJbZF4xzJ7CWEsqvn_sDfwm",
    description: "Isabela es lider en proteccion de activos intangibles y estrategias de patentes. Ha gestionado portfolios de propiedad intelectual para empresas tecnologicas y creativas, asegurando la proteccion de innovaciones en mercados globales.",
    specialties: ["Patentes y Marcas", "Derechos de Autor", "Licenciamiento Tecnologico"],
    education: "Abogada Universidad de Medellin, LL.M. en PI - UC Berkeley",
    experience: "8 anos de experiencia"
  }
]
