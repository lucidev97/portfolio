/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

// const ButtonPrimary = ({
//   href,
//   target = '_self',
//   label,
//   icon,
//   classes = '',
// }) => {
//   if (href) {
//     return (
//       <a href={href}
//        target={target} className={"btn btn-primary " + classes}>
//         {label}
//         {icon ? (
//           <span className="material-symbols-rounded" aria-hidden="true">
//             {icon}
//           </span>
//         ) : undefined} {/* Pas besoin de ": undefined" ici */}
//       </a>
//     );
//   } else {
//     return (
//       <button className={"btn btn-primary " + classes}>
//         {label}

//         {icon ? (
//           <span className="material-symbols-rounded" aria-hidden="true">
//             {icon}
//           </span>
//         ) : undefined}
//       </button>
//     );
//   }
// };

// ButtonPrimary.propTypes = {
//   label: PropTypes.string.isRequired,
//   href: PropTypes.string,
//   target: PropTypes.string,
//   icon: PropTypes.string,
//   classes: PropTypes.string,
// };



// const ButtonOutline = ({
//     href,
//     target = '_self',
//     label,
//     icon,
//     classes = '',
//   }) => {
//     if (href) {
//       return (
//         <a href={href}
//          target={target} className={"btn btn-outline " + classes}>
//           {label}
//           {icon ? (
//             <span className="material-symbols-rounded" aria-hidden="true">
//               {icon}
//             </span>
//           ) : undefined} {/* Pas besoin de ": undefined" ici */}
//         </a>
//       );
//     } else {
//       return (
//         <button className={"btn btn-outline " + classes}>
//           {label}
  
//           {icon ? (
//             <span className="material-symbols-rounded" aria-hidden="true">
//               {icon}
//             </span>
//           ) : undefined}
//         </button>
//       );
//     }
//   };
  
//   ButtonOutline.propTypes = {
//     label: PropTypes.string.isRequired,
//     href: PropTypes.string,
//     target: PropTypes.string,
//     icon: PropTypes.string,
//     classes: PropTypes.string,
//   };


const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false, // Ajout de la propriété download
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
        download={download ? true : undefined} // Si download est vrai, on ajoute l'attribut download
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool, // Propriété pour le téléchargement
};

// export { ButtonPrimary };
// import PropTypes from "prop-types";

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false, // Ajout de la propriété download
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
        download={download ? true : undefined} // Si download est vrai, on ajoute l'attribut download
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool, // Propriété pour le téléchargement
};

// export { ButtonOutline };


export { ButtonPrimary,ButtonOutline};
