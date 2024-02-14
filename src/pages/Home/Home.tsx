import { useEffect } from "react";
import { useGames } from "../../hooks/useGames";
import classes from "./Home.module.scss";

export const Home = () => {
    const { games, status, fetchGames } = useGames();
    
    useEffect(() => {
        fetchGames();
    }, []);
    

    if (status == "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={classes.home}>
            
        </div>
    );
};