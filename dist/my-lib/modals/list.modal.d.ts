export interface FrameWorkList {
    id: number;
    name: string;
}
export interface listStateInterface {
    isLoading: boolean;
    list: FrameWorkList[];
    error: string | null;
}
export interface AppStateInterface {
    list: listStateInterface;
}
