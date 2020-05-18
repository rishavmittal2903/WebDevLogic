import { UPDATE_LANGUAGE } from "../../ActionTypes/Intl/IntlActionType";

export const updateLanguage = ( locale) => ({
    type: UPDATE_LANGUAGE,
    payload:  locale,
  })