import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useRootStore from "../../Hooks/useRootStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

interface Props {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

const PhoneInputComp: React.FC<Props> = ({ value, onChange, error }) => {
    const { t } = useTranslation();
    const { setCountryData, countryData } = useRootStore().userStore;

    useEffect(() => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setCountryData(data.ip, "ip");
                setCountryData(data.country, "countryName");
                setCountryData(data.country_calling_code, "countryCode");
                setCountryData(data.city, "city");
                setCountryData(data.timezone, "timezone");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <PhoneInput
            placeholder={t("enter_phone_number")}
            value={value}
            international={true}
            defaultCountry={countryData.countryName as never}
            onChange={onChange}
            error={error}
        />
    );
};

export default observer(PhoneInputComp);
