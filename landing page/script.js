const clientTestimonials = [
  {
    name: "Carlos Mendoza",
    company: "Bancolombia",
    role: "Director de Cumplimiento",
    comment:
      "La agudeza legal y la rapidez de respuesta de Luro Legal han sido determinantes en nuestras operaciones en el exterior. Su equipo demostró un dominio impresionante y adaptó las estrategias perfectamente a nuestra industria financiera.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Maria Fernanda Torres",
    company: "Nutresa",
    role: "Gerente Legal",
    comment:
      "Encontrar un despacho que entienda la complejidad del derecho transnacional con tal elegancia es casi imposible. Su enfoque en protección de marcas internacionalmente fue muy práctico y aplicable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Andres Felipe Gomez",
    company: "Bavaria",
    role: "VP de Operaciones",
    comment:
      "Su visión estratégica no tiene rival. Son mucho más que abogados; son socios estratégicos de confianza. El enfoque en casos reales hizo que la asesoría fuera muy efectiva para nuestro equipo ejecutivo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Diana Carolina Ruiz",
    company: "Avianca",
    role: "Directora de Contratos",
    comment:
      "La asesoría en gestión de riesgos legales fue transformadora. Ahora tenemos procesos mucho más robustos gracias a su experticia y conocimiento del sector aeronáutico.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Roberto Andres Vargas",
    company: "Ecopetrol",
    role: "Asesor Jurídico Senior",
    comment:
      "Muy profesionales y conocedores. Su representación en litigio internacional nos preparó para manejar disputas complejas con confianza en múltiples jurisdicciones.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
]

const teamMembers = [
  {
    name: "Kevin Urrutia",
    role: "Socio Fundador & Abogado",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZh6AQUxk1iflCjgu200Im6HiyTrmNVz5KtFQG4bp9bzK2aflIbgXqMPBxdcKzHM0n8e-Esn3QGs6DxozDI0ogjJV8qsXmFITKLXr3-Su2DAONHvYI1ErBaEq_D_BIOScGy5yLz5hO132BPvEv_IGPT8TiwATQRHP-N0pAih0sUMjogUGdx-dHmJ11Y-3EcbpiGk7CeNGGktPSEsJqp8pjEXFU9LvEdAim3mgznOQqRqJiRVg_-YsYLqwG7jNkzqhJU8UOOQPRWwu5",
    description:
      "Con más de 15 años de experiencia en derecho corporativo e internacional, Kevin ha liderado más de 300 casos exitosos en mercados de América Latina, Europa y Estados Unidos. Su visión estratégica y enfoque innovador han posicionado a Luro Legal como referente en la práctica jurídica de alto nivel.",
    specialties: ["Derecho Corporativo Internacional", "Fusiones y Adquisiciones", "Arbitraje Comercial"],
    education: "J.D. Universidad de los Andes, LL.M. Harvard Law School",
    experience: "15+ años de trayectoria",
  },
  {
    name: "Dra. Elena Sofia",
    role: "Especialista en Litigio",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1tZjE4V23MCYDEfuYOlKuYjAWtRzZz9iyB7UiM78HvYAGaPxYUydBnr6_YxBvBZc4RpwMp41xLkCoOi8Q7wno6zwViFdqi5auo1R9plHQLvF-ioiJOQ5L2-GtRHgJ9s4Kk4yuo0Pqil2qe4mSErhpxAyKtT9gF_GduypIkFpY45n7ECj7uMhes615Ce3MWj4s3mTznrIporfCo0EMmdhePjZG738S2MuawwaWQESZwPGaadtpxPyMN4aH6av6JEHlvqpaQSv17to1",
    description:
      "Elena es reconocida por su capacidad para resolver disputas complejas en tribunales nacionales e internacionales. Ha representado a multinacionales en casos de alto perfil, obteniendo resultados excepcionales que protegen los intereses de nuestros clientes.",
    specialties: ["Litigio Civil y Comercial", "Arbitraje Internacional", "Derecho Procesal"],
    education: "Abogada Universidad Externado, Maestría en Litigio Internacional - NYU",
    experience: "12 años de experiencia",
  },
  {
    name: "Dr. Ricardo Mendez",
    role: "Consultor Internacional",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRWLlNrkylZLfpHKMs_J2Om0H1P_JS0VGSeQOoxDQ2Jh65QeTMjjHnzXefnR11Fq3eFp-oDODjW77kcSEV7D-YeEKveB0vSJbyRNnKaTmFyPOJzKzUEyhUiSRoKRwW2XnBiApyHNH9t6W94EWGwR2sFli0zrsUnvZflRQav7WjAsa-nxLhXJunZ-RbhKthI8YYZ_QSncsEQt81E8AMdA3h1uRmQ_wi2VTnJtj-d2vzjciXe6URGb3tLm6cyx9dvjAK3n_MnwjKKS3B",
    description:
      "Ricardo aporta una perspectiva global única, habiendo trabajado en firmas de renombre en Londres, Nueva York y Singapur. Su experiencia en transacciones transfronterizas y regulaciones internacionales es invaluable para clientes con operaciones globales.",
    specialties: ["Comercio Internacional", "Regulación Financiera", "Inversiones Extranjeras"],
    education: "LL.B. Universidad Javeriana, LL.M. London School of Economics",
    experience: "14 años de experiencia",
  },
  {
    name: "Dra. Camila Vargas",
    role: "Derecho Corporativo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjofmtywbaj0uQYZhAnCK153nMcBXCM4yeFrgr9XcuYCRUPj6eQR9wddQHKCmQOFpaj5kqdh61zoQ_f1AScfUXCjCayv6it3H73cLckR-T_rOyn8ldQmNrLNiOfuGWJEvvS628tYjMA7Bzb_qUFyfVDSzflgFnBprSzKvvbsBJR7A33ak35aSBi26-3wXAcMOQBUytpJsdyQzg_UUTa5UKSgP0QKIDWcIw9oXEo6877ZQyblK-yrnoBMbdeoClKq92mi8qQGntk1Kg",
    description:
      "Camila es experta en estructuración corporativa y gobierno empresarial. Ha asesorado a más de 50 empresas en procesos de constitución, reestructuración y expansión, garantizando el cumplimiento normativo y la optimización de estructuras societarias.",
    specialties: ["Gobierno Corporativo", "Constitución de Sociedades", "Due Diligence"],
    education: "Abogada Universidad del Rosario, MBA INCAE Business School",
    experience: "10 años de experiencia",
  },
  {
    name: "Andres Felipe",
    role: "Analista Legal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEl4pCxAF9nRrUpezaGvysL5y7S7XBZ05g0U0V-9X4Vn3RIvz7J4_VGKcznj9xbgLPOwpg1XZ4ikXkmFARiA9S7qGXDtezej9En_6iBvfj0HdeQ0I4ALLQmQsuJROyRTL0m4E9UXZluERu0wknEvnXuyYlEs0FTkB_dcxRtWLXuP6yAg2mFvLt5iblxcjopJfiUxCbb_bHq0x0iLv0P4DA62rZz7EzXVOeabpdBxu0IMZw4_gJs2wcwI5zxzMC9Etz97e5P6OxErI_",
    description:
      "Andres combina su formación jurídica con habilidades analíticas excepcionales. Es responsable de la investigación legal y el análisis de precedentes que respaldan las estrategias de nuestro equipo senior, contribuyendo al éxito de casos complejos.",
    specialties: ["Investigación Jurídica", "Análisis de Precedentes", "Documentación Legal"],
    education: "Abogado Universidad Nacional, Especialización en Derecho Comercial",
    experience: "5 años de experiencia",
  },
  {
    name: "Dra. Isabela Ruiz",
    role: "Propiedad Intelectual",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfAxFRt8o2jIHT18uGM1j4s4pS4IM_sQDXrVA5PS9zDtaJO4ArKhjK_3S3zzzQ9-5y6-z2zOxfD35M-2diq07wACHuU9ZLlj7sVXlYUWbABGVP2P7F_dC-3LVtophpwnQ6Ls8IE34Rw-x30FSl_OLZDkAMz84fGeWr3wpg0Hue11DEbrK4pZ1rcU67tfkNN4zcVCrmHZ4tCTNfudzPeTcmDAxIWvaHjLqzZfyFroWHW8uPR1-JSMHKXJbZF4xzJ7CWEsqvn_sDfwm",
    description:
      "Isabela es líder en protección de activos intangibles y estrategias de patentes. Ha gestionado portfolios de propiedad intelectual para empresas tecnológicas y creativas, asegurando la protección de innovaciones en mercados globales.",
    specialties: ["Patentes y Marcas", "Derechos de Autor", "Licenciamiento Tecnológico"],
    education: "Abogada Universidad de Medellín, LL.M. en PI - UC Berkeley",
    experience: "8 años de experiencia",
  },
]

const featured = document.getElementById("featured-testimonial")
const testimonialNav = document.getElementById("testimonial-nav")
const teamGrid = document.getElementById("team-grid")
const modal = document.getElementById("team-modal")
const modalImage = document.getElementById("team-modal-image")
const modalRole = document.getElementById("team-modal-role")
const modalName = document.getElementById("team-modal-name")
const modalDescription = document.getElementById("team-modal-description")
const modalSpecialties = document.getElementById("team-modal-specialties")
const modalEducation = document.getElementById("team-modal-education")
const modalExperience = document.getElementById("team-modal-experience")

let activeTestimonial = 0

function renderStars(rating) {
  return "★".repeat(rating)
}

function renderFeaturedTestimonial(index) {
  const item = clientTestimonials[index]
  featured.replaceChildren()

  const avatar = document.createElement("img")
  avatar.src = item.avatar
  avatar.alt = item.name

  const wrapper = document.createElement("div")
  const stars = document.createElement("div")
  stars.className = "stars"
  stars.textContent = renderStars(item.rating)

  const quote = document.createElement("p")
  quote.className = "quote"
  quote.textContent = `"${item.comment}"`

  const person = document.createElement("div")
  person.className = "person"

  const name = document.createElement("strong")
  name.textContent = item.name

  const role = document.createElement("span")
  role.textContent = item.role

  const company = document.createElement("em")
  company.textContent = item.company

  person.append(name, role, company)
  wrapper.append(stars, quote, person)
  featured.append(avatar, wrapper)
}

function renderTestimonialButtons() {
  testimonialNav.innerHTML = ""
  clientTestimonials.forEach((item, index) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = `testimonial-btn ${index === activeTestimonial ? "active" : ""}`
    const title = document.createElement("strong")
    title.textContent = item.name
    const company = document.createElement("small")
    company.textContent = item.company
    const stars = document.createElement("div")
    stars.className = "stars"
    stars.textContent = renderStars(item.rating)
    button.append(title, company, stars)
    button.addEventListener("click", () => {
      activeTestimonial = index
      renderFeaturedTestimonial(activeTestimonial)
      renderTestimonialButtons()
    })
    testimonialNav.appendChild(button)
  })
}

function openTeamModal(member) {
  modalImage.src = member.image
  modalImage.alt = member.name
  modalRole.textContent = member.role
  modalName.textContent = member.name
  modalDescription.textContent = member.description
  modalSpecialties.replaceChildren(
    ...member.specialties.map((specialty) => {
      const tag = document.createElement("span")
      tag.textContent = specialty
      return tag
    }),
  )
  modalEducation.textContent = member.education
  modalExperience.textContent = member.experience
  modal.setAttribute("aria-hidden", "false")
  document.body.style.overflow = "hidden"
}

function closeTeamModal() {
  modal.setAttribute("aria-hidden", "true")
  document.body.style.overflow = ""
}

function renderTeamGrid() {
  teamGrid.innerHTML = ""
  teamMembers.forEach((member) => {
    const card = document.createElement("button")
    card.type = "button"
    card.className = "team-card"
    const image = document.createElement("img")
    image.src = member.image
    image.alt = member.name

    const name = document.createElement("h3")
    name.textContent = member.name

    const role = document.createElement("p")
    role.textContent = member.role

    card.append(image, name, role)
    card.addEventListener("click", () => openTeamModal(member))
    teamGrid.appendChild(card)
  })
}

document.querySelectorAll("[data-close='true']").forEach((element) => {
  element.addEventListener("click", closeTeamModal)
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTeamModal()
})

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault()
  alert("Gracias por tu solicitud. Te contactaremos pronto.")
  event.target.reset()
})

renderFeaturedTestimonial(activeTestimonial)
renderTestimonialButtons()
renderTeamGrid()
