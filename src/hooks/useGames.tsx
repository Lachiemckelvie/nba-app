// src/hooks/useGames.ts
import { useContext } from 'react';
import GamesContext from '../context/GamesContext';

export const useGames = () => {
    const context = useContext(GamesContext);
    if (context === undefined) {
        throw new Error('useGames must be used within a GamesContext');
    }
    return context;
};