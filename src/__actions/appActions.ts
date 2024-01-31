import { AppReducerActionTypes } from 'Reducers/appReducer';

export const setNameFilter = (name: string) => ({
	type: AppReducerActionTypes.SetNameFilter,
	payload: name,
})