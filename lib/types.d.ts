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
    imageUrl: string | null;
    countryId: string;
    routeCount: number;
    routes: ICityRoute[];
}

export interface ICityByCountryResponse {
    countryName: string;
    data: ICityData;
}

export interface IPopularRouteResponse {
    id: string;
    inRoute: string;
    toRoute: string;
    price: number;
}

export interface ITransferCars {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

