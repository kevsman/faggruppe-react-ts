import React, { useContext, useEffect, useState } from 'react'
import { AppStoreContext } from '../../context/AppStoreContext';
import { HomeWrapper } from './Home.style';

type Prop = {
    message: 'hei' | 'velkommen';
    myName?: string
}
const Home: React.FC<Prop> = ({ message, myName }) => {
    const { userProfiles, setSelectedProfile, selectedProfile } = useContext(AppStoreContext);

    const onSelectedProfileChange = (event: any) => {
        const selectValue = event.target.value;
        const profileId = +selectValue;
        const profile = userProfiles.find(profile => profile.id === profileId);
        setSelectedProfile(profile);
    }

    return (
        <>
            <HomeWrapper>
                <h2>{message}</h2>
                <div>
                    Velg bruker:
                    <select onChange={onSelectedProfileChange} value={selectedProfile?.id}>
                        <option value={0}></option>
                        {userProfiles.map(userProfile => <option key={userProfile.id} value={userProfile.id}>{userProfile.name}</option>)}
                    </select>
                </div>
            </HomeWrapper>
        </>
    );
}

export default Home;