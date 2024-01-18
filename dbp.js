(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Nama || client.Nama.indexOf(filter.Nama) > -1)
                    && (filter.Jabatan === undefined || client.Jabatan === filter.Jabatan)
                    && (!filter.Tempat_Lahir || client.Tempat_Lahir.indexOf(filter.Tempat_Lahir) > -1)
                    && (!filter.Tanggal || client.Tanggal === filter.Tanggal)
                    && (filter.Aktif === undefined || client.Aktif === filter.Aktif);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.clients = [
        {
            "Nama": "Budi Dharmawan",
            "Jabatan": "Direktur",
            "Tanggal": "2023-11-10",
            "Jam mulai": "17:00",
            "Jam akhir": "20:00",
            "Disetujui": true
        },
        {
            "Nama": "Annisa Amalia",
            "Jabatan": "Manajer",
            "Tanggal": "2023-11-10",
            "Jam mulai": "17:00",
            "Jam akhir": "21:00",
            "Disetujui": true
        },
        {
            "Nama": "Eddy Pardiman",
            "Jabatan": "Staff",
            "Tanggal": "2023-11-10",
            "Jam mulai": "17:00",
            "Jam akhir": "22:00",
            "Disetujui": false
        },
        {
            "Nama": "Nurul Hidayah",
            "Jabatan": "Staff",
            "Tanggal": "2023-11-10",
            "Jam mulai": "17:00",
            "Jam akhir": "20:00",
            "Disetujui": true
        },
    ];

}());