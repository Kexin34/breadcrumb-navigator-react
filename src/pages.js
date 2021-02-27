import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Breadcrumb } from './components';
/**
 * These are root pages
 */
const Home = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Home</h1>
      <Breadcrumb locationPath={location.pathname} />
    </div>
  );
};

const Myname = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
      <h1 className="py-3">Myname</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
    </div>
  );
};

const Electronics = ({ route, location }) => {
  // Provide a function as props into <Breadcrumb /> to modify breadcrumb
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />

      {renderRoutes(route.routes)}
    </div>
  );
};

// const Electronics = ({ route, location }) => {
//   let matchedRoutes = matchRoutes(routes, location.pathname);
//   console.log('matchedRoutes in Electronics', matchedRoutes);

//    // Customize breadcrumb through modifying matchRoutes array
//    matchedRoutes = [
//     {
//       route: {
//         path: '/',
//         breadcrumbName: 'Home'
//       }
//     },
//     ...matchedRoutes
//   ];

//   return (
//     <div>
//       <h1 className="py-3">Electronics</h1>

//       {/* Breadcrumb */}
//       <nav>
//     <ol className="breadcrumb">
//       {matchedRoutes.map((matchRoute, i) => {
//         const { path, breadcrumbName } = matchRoute.route;

//         // check whether the the path is the Page path user currently at
//         const isActive = path === location.pathname;

//         // if the Page path is user currently at, then do not show <Link />
//         return isActive ? (
//           <li key={i} className="breadcrumb-item active">
//             {breadcrumbName}
//           </li>
//         ) : (
//           <li key={i} className="breadcrumb-item">
//             <Link to={path}>{breadcrumbName} </Link>
//           </li>
//         );
//       })}
//     </ol>
//   </nav>;

//       {renderRoutes(route.routes)}
//     </div>
//   );
// };
/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Myname, Electronics, Mobile, Desktop, Laptop };