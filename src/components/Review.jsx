import { ReviewCard } from "./ReviewCard";

const experiences = [
  {
    content: "Formation d’élèves en Python au lycée Seydina Limamou Laye.",
    name: "FORCE-N",
    company: "Assistant formateur en programmation Python (2024 - 6 mois)"
  },
  {
    content: "Création d'une plateforme de distribution agricole. Frontend : React.js | Backend : Django Rest. Missions : Interconnexion des API, CRUD.",
    name: "SANKOFA",
    company: "Stagiaire en développement web (2023 - 3 mois)"
  },
  {
    content: "Création de logos, flyers avec Canva. Développement d’un site e-commerce avec WordPress.",
    name: "GRAPHLUX",
    company: "Stagiaire en design (2021 - 1 mois)"
  },
  {
    content: "Maintenance et configuration de systèmes. Installation de caméras de surveillance.",
    name: "INFOCOM",
    company: "Stagiaire en réseaux (2021 - 1 mois)"
  }
];

const formations = [
  {
    content: "Certification Bootcamp Développement Web JavaScript. Projets : application de gestion de budget, API de blog (Express.js), e-commerce avec React et Next.js.",
    name: "XARALA ACADEMY",
    company: "2024-2025"
  },
  {
    content: "Licence en Génie Informatique.",
    name: "Univers Professionnel (UNIPRO, VDN)",
    company: "2020 – 2022"
  },
  {
    content: "Études secondaires.",
    name: "Lycée Seydina Limamou Laye",
    company: "2015 – 2018"
  }
];

export const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mon Parcours</h2>
        
        <h3 className="text-xl text-white mb-4">Expériences Professionnelles</h3>
        <div className="flex items-stretch gap-3 w-fit">
          {experiences.map(({ content, name, company }, key) => (
            <ReviewCard key={key} name={name} company={company} content={content} />
          ))}
        </div>

        <h3 className="text-xl text-white mt-12 mb-4">Formations & Certifications</h3>
        <div className="flex items-stretch gap-3 w-fit">
          {formations.map(({ content, name, company }, key) => (
            <ReviewCard key={key} name={name} company={company} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};
