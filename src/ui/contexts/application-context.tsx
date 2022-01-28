import React, { createContext, useMemo, useState } from "react";

export type ApplicationState = {
    example?: string;
};

export const ApplicationContext: React.Context<ApplicationState> =
    createContext({} as ApplicationState);

export const ApplicationProvider: React.FC<ApplicationState> = ({
    children,
}) => {
    const [example, setExample] = useState<string>();

    const value = useMemo(
        () => ({ example, setExample }),
        [example, setExample]
    );

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    );
};
