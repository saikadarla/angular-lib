import { Actions } from '@ngrx/effects';
import { GetListService } from '../services/get-list.service';
import * as i0 from "@angular/core";
export declare class listEffects {
    private actions$;
    private getListService;
    getList$: import("rxjs").Observable<({
        list: import("../modals/list.modal").FrameWorkList[];
    } & import("@ngrx/store/src/models").TypedAction<"[list] Get List Success">) | ({
        error: string | null;
    } & import("@ngrx/store/src/models").TypedAction<"[list] Get List Failure">)> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, getListService: GetListService);
    static ɵfac: i0.ɵɵFactoryDeclaration<listEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<listEffects>;
}
