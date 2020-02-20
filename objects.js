let hotel = {
    name: 'Hotel Berlin',
    rooms: 60,
    booked: 15,
    gym: true,
    gymCount: 2,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

let showRooms = document.getElementById('rooms')

showRooms.textContent = hotel.rooms + ' Rooms'
