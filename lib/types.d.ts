
export interface ICountryResponse {
    id: string;
    name: string;
    imageUrl: string;
    routeCount: number;
}

export interface ICityAdminPanelResponse {
    id: string;
    name: string;
    imageUrl: string | null;
    countryId: string;
}

export interface ICityRoute {
    id: string;
    inRoute: string;
    toRoute: string;
}

export interface ICityData {
    id: string;
    name: string;
    imageUrl: string;
    countryId: string;
    routeCount: number;
    routes: ICityRoute[];
}

export interface ICityByCountryResponse {
    countryName: string;
    data: ICityData;
}