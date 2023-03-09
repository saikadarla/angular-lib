import { FrameWorkList } from '../modals/list.modal';
export declare const getList: import("@ngrx/store").ActionCreator<"[list] Get List", () => import("@ngrx/store/src/models").TypedAction<"[list] Get List">>;
export declare const getListSuccess: import("@ngrx/store").ActionCreator<"[list] Get List Success", (props: {
    list: FrameWorkList[];
}) => {
    list: FrameWorkList[];
} & import("@ngrx/store/src/models").TypedAction<"[list] Get List Success">>;
export declare const getListFailure: import("@ngrx/store").ActionCreator<"[list] Get List Failure", (props: {
    error: string | null;
}) => {
    error: string | null;
} & import("@ngrx/store/src/models").TypedAction<"[list] Get List Failure">>;
