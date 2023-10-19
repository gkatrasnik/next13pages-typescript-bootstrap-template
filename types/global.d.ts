//rentItems

declare interface Bike {
    title: string;
    imageSrc: string;
    bullets: string[];
    price: string;
}

declare interface Other {
    title: string;
    imageSrc: string;
    bullets: string[];
    price: string;
}

declare interface RentItems {
    eBikes: Bike[];
    regularBikes: Bike[];
    other: Other[];
}

//rent sups

declare interface Sup {
    title: string;
    imageSrc: string;
    price: string;
}

declare interface RentSups {
    sups: Sup[];
}

//bike services 

declare type BikeService = {
    name: string;
    price: string | null;
};

declare type BikeServicesObject = {
    services: BikeService[];
};
