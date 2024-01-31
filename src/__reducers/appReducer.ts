import { AppState } from "Types/appTypes";
import { ReducerAction } from "react";

const initialState: AppState = {
}

export enum AppReducerActionTypes {
}

export const appReducer = (state = initialState, { type, payload }: ReducerAction<any>) => {

	switch (type) {
		default: {
			return state;
		}
	}
}