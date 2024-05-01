export interface product {
    "_id": string,
    "title": string,
    "slug": string,
    "desc": string,
    "price": number,
    "image": string,
    "galleryImages": GalleryImages[]
}

export interface GalleryImages {    
        "_id": string,
        "filename": string      
}