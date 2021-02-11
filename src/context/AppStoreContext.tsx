import React, { useState } from 'react'
import { Stock, UserProfile } from '../types/ModelTypes'

const stocksInitial: Stock[] = [
    { id: 1, name: 'UC', value: 7, previousValue: 10 },
    { id: 2, name: 'GME', value: 2000, previousValue: 5 },
    { id: 3, name: 'Odfjell', value: 20, previousValue: 15 },
    { id: 4, name: 'SPV', value: 36, previousValue: 50 },
    { id: 5, name: 'Evry', value: 2, previousValue: 13 },
]

const userProfilesInitial: UserProfile[] = [
    { id: 1, name: 'Huseklepp', stocks: [stocksInitial[0], stocksInitial[2]] },
    { id: 2, name: 'Solberg', stocks: [stocksInitial[4], stocksInitial[1], stocksInitial[0]] },
    { id: 3, name: 'Bø', stocks: [stocksInitial[0], stocksInitial[3]] },
    { id: 4, name: 'Nakstad', stocks: [stocksInitial[3], stocksInitial[2]] }
]


type AppStoreContextType = {
    selectedProfile: UserProfile | undefined,
    userProfiles: UserProfile[],
    stocks: Stock[],
    setSelectedProfile: (userProfile: UserProfile | undefined) => void
    setUserProfiles: (userProfiles: UserProfile[]) => void
    setStocks: (stocks: Stock[]) => void
}

type ContextProps = {
    children: React.ReactNode
};

export const AppStoreContext = React.createContext<AppStoreContextType>(undefined!);

export const AppStoreProvider = ({ children }: ContextProps) => {
    const [selectedProfile, setSelectedProfile] = useState<UserProfile | undefined>();
    const [userProfiles, setUserProfiles] = useState<UserProfile[]>(userProfilesInitial);
    const [stocks, setStocks] = useState<Stock[]>(stocksInitial);

    return <AppStoreContext.Provider value={{
        selectedProfile,
        setSelectedProfile,
        userProfiles,
        setUserProfiles,
        stocks,
        setStocks,
    }}>
        {children}
    </AppStoreContext.Provider>
}