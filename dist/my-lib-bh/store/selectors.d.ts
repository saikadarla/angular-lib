import { AppStateInterface } from "projects/my-lib-bh/src/lib";
export declare const selectFeature: (state: AppStateInterface) => import("../modals/list.modal").listStateInterface;
export declare const isLoadingSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const listSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, import("projects/my-lib-bh/src/lib").FrameWorkList[], import("@ngrx/store").DefaultProjectorFn<import("projects/my-lib-bh/src/lib").FrameWorkList[]>>;
export declare const errorSelector: import("@ngrx/store").MemoizedSelector<AppStateInterface, string | null, import("@ngrx/store").DefaultProjectorFn<string | null>>;
