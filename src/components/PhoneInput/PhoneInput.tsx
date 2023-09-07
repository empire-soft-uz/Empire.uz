import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

const PhoneInputComp: React.FC<Props> = ({ value, onChange, error }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: "",
    });
    useEffect(() => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setState({
                    ...state,
                    ip: data.ip,
                    countryName: data.country,
                    countryCode: data.country_calling_code,
                    city: data.city,
                    timezone: data.timezone,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <PhoneInput
            placeholder={t("enter_phone_number")}
            value={value}
            defaultCountry={state.countryName as never}
            onChange={onChange}
            error={error}
        />
    );
};

export default PhoneInputComp;
