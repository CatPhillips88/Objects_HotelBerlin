let hotel = {
    name: 'Hotel Berlin',
    rooms: 60,
    booked: 15,
    gym: true,
    gymCount: 2,
    checkAvailability: function() {
        return this.rooms - this.booked;
    },
    facilities: ['Wifi', ' Flat Screen TV', ' Air Conditioning', ' Car Parking']
};

let hotelName = document.getElementById('name');

hotelName.textContent = `${hotel.name}`

let showRooms = document.getElementById('rooms');

showRooms.textContent = `${hotel.rooms} Rooms`

let gymsAvailable = document.getElementById('gym');

gymsAvailable.textContent = `${hotel.gymCount} Gyms`;

let roomAvailability = document.getElementById('roomsAvailable');

roomAvailability.textContent = `${hotel['checkAvailability']()} Rooms Available`;

let availableFacilities = document.getElementById('facilities');

availableFacilities.textContent = `Facilities Include: ${hotel.facilities}`;


