import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
const { t, i18n } = useTranslation();

    return(
        <h1>{t('Welcome')}</h1>
    )
}
export default Home;