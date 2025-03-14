
interface ICountryTranslation {
    locale: string;
    name: string;
}

export interface ICountryResponse {
    id: string;
    name: string;
    imageUrl: string;
    routeCount: number;
    translation: ICountryTranslation[];
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
    translations: { name: string; }
}

export interface ICityByCountryResponse {
    countryName: string;
    data: ICityData;
}

interface IRouteTranslation {
    id: string;
    routeId: string;
    locale: string;
    inRoute: string;
    toRoute: string;
    description: string;
}

export interface IPopularRouteResponse {
    id: string;
    inRoute: string;
    toRoute: string;
    price: number;
    routeTranslation: IRouteTranslation;
}

export interface ITransferCars {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
    TransferCarsTranslation: { name: string }[]
}

