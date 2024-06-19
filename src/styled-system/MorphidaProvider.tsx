import React from "react";

import './styles.css';

/**
 * Base provider for application.
 */
const MorphidaProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   return <>{children}</>;
};

export default MorphidaProvider;
