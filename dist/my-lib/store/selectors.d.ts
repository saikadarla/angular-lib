import { AppStateInterface } from "projects/my-lib/src/modals/list.modal";
export declare const selectFeature: (state: AppStateInterface) => import("projects/my-lib/src/modals/list.modal").listStateInterface;
export declare const isLoadingSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const listSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, import("projects/my-lib/src/modals/list.modal").FrameWorkList[], import("@ngrx/store").DefaultProjectorFn<import("projects/my-lib/src/modals/list.modal").FrameWorkList[]>>;
export declare const errorSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, string | null, import("@ngrx/store").DefaultProjectorFn<string | null>>;
