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

