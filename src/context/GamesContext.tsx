import React, { ReactNode, createContext, useState } from 'react';
import axios from 'axios';

// Interface for NBA Score
export interface Game {
	// Define the structure of score data...
}

interface GamesContextState {
	games: Game[] | null;
	lastFetched: Date | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	fetchGames: () => void; // Function to fetch games
}

// Creating the context with a default state for better type inference
const defaultState: GamesContextState = {
	games: null,
	lastFetched: null,
	status: 'idle',
	fetchGames: () => { }, 
};

const GamesContext = createContext<GamesContextState>(defaultState);

interface GamesProviderProps {
	children: ReactNode;
}

// Provider in your app
export const GamesProvider: React.FC<GamesProviderProps> = ({ children }) => {
	const [games, setGames] = useState<Game[] | null>(defaultState.games);
	const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>(defaultState.status);
	const [lastFetched, setLastFetched] = useState<Date | null>(defaultState.lastFetched);

	const fetchGames = async () => {
		setStatus('loading');
		try {
			const response = await axios.get<any>('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard', {
				// Optional: Add API headers / authentication details here.
			});
			
			if (!response?.data?.events) {
				throw new Error("Failed to fetch games");
			}

			setGames(response.data.events);
			setStatus('succeeded');
		} catch (error) {
			console.error("Failed to fetch games:", error);
			setStatus('failed');
		} finally {
			setLastFetched(new Date());
		}
	};

	// The value that will be available to other components via this context
	const value = { games, status, lastFetched, fetchGames };

	// The Provider component that wraps the part of your app where the context is used
	return (
		<GamesContext.Provider value={value}>
			{children}
		</GamesContext.Provider>
	);
};

export default GamesContext;