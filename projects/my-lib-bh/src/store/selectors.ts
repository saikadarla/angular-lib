import { createSelector } from "@ngrx/store";
// import { AppStateInterface } from "projects/my-lib-bh/src/modals/list.modal";
import { AppStateInterface } from "projects/my-lib-bh/src/lib";

export const selectFeature = (state: AppStateInterface) => { 
    return state.list
};

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const listSelector = createSelector(selectFeature, (state) => state.list);
export const errorSelector = createSelector(selectFeature, (state) => state.error);