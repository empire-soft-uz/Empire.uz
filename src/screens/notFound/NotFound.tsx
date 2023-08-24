import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import i18n from "../../translations";
import styles from "./NotFound.module.css";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1>Page Not Found</h1>
            <p>The requested page could not be found.</p>
            <Button
                margin="15px 0 0 0"
                title={"Open site"}
                btnType={"outline"}
                onPress={() => navigate(`${i18n.language}`)}
            />
        </div>
    );
};

export default NotFound;
