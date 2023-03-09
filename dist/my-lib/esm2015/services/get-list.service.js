import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GetListService {
    constructor(http) {
        this.http = http;
        this.configUrl = 'https://testapi.io/api/Saikrishnakadarla/';
    }
    getTechnologyList() {
        return this.http.get(this.configUrl + 'list').pipe(map(d => d));
    }
}
GetListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GetListService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
GetListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GetListService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GetListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWxpc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvc2VydmljZXMvZ2V0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBUyxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTVDLE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUYxQixjQUFTLEdBQUcsMkNBQTJDLENBQUM7SUFHcEQsQ0FBQztJQUVFLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixJQUFJLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1osQ0FBQztJQUNKLENBQUM7OzRHQVhVLGNBQWM7Z0hBQWQsY0FBYyxjQUZiLE1BQU07NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRnJhbWVXb3JrTGlzdCB9IGZyb20gJy4uL21vZGFscy9saXN0Lm1vZGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZGVsYXksIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdldExpc3RTZXJ2aWNlIHtcblxuICBjb25maWdVcmwgPSAnaHR0cHM6Ly90ZXN0YXBpLmlvL2FwaS9TYWlrcmlzaG5ha2FkYXJsYS8nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0VGVjaG5vbG9neUxpc3QoKTogT2JzZXJ2YWJsZTxGcmFtZVdvcmtMaXN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmFtZVdvcmtMaXN0W10+KHRoaXMuY29uZmlnVXJsKydsaXN0JykucGlwZShcbiAgICAgIG1hcChkID0+IGQpXG4gICAgKTtcbiAgfVxufVxuIl19