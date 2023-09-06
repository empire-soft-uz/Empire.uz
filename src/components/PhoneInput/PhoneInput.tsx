import { message } from "antd";
import React, { useState } from "react";
import PhoneInput, {
    formatPhoneNumber,
    formatPhoneNumberIntl,
    isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
}

const PhoneInputComp: React.FC<Props> = ({
    value,
    onChange,
    error,
    placeholder,
}) => {
    return (
        <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={onChange}
            error={error}
        />
    );
};

export default PhoneInputComp;
