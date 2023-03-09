import { HttpClient } from '@angular/common/http';
import { FrameWorkList } from '../modals/list.modal';
import { Observable } from 'rxjs/internal/Observable';
import * as i0 from "@angular/core";
export declare class GetListService {
    private http;
    configUrl: string;
    constructor(http: HttpClient);
    getTechnologyList(): Observable<FrameWorkList[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GetListService>;
}
