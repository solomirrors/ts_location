interface Mappable {
    location: {
        lat: number,
        lng: number
    };

    markerContent(): string
}

export default class CustomMap {
    private googleMap: google.maps.Map

    constructor(mapDivId: string) {
        this.googleMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: {
                lat: 4,
                lng: 3
            },
            zoom: 3
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}