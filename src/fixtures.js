const fixtures = [
    {
        "id": 1,
        "time": "2018-09-07 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 1,
            "title": "Gameweek 1",
            "date": "2018-09-07 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 2,
        "time": "2018-09-07 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 1,
            "title": "Gameweek 1",
            "date": "2018-09-07 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 3,
        "time": "2018-09-07 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "round": {
            "id": 1,
            "title": "Gameweek 1",
            "date": "2018-09-07 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 4,
        "time": "2018-09-21 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 2,
            "title": "Gameweek 2",
            "date": "2018-09-21 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 5,
        "time": "2018-09-21 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 2,
            "title": "Gameweek 2",
            "date": "2018-09-21 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 6,
        "time": "2018-09-21 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 2,
            "title": "Gameweek 2",
            "date": "2018-09-21 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 7,
        "time": "2018-09-28 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 3,
            "title": "Gameweek 3",
            "date": "2018-09-28 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 8,
        "time": "2018-09-28 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 3,
            "title": "Gameweek 3",
            "date": "2018-09-28 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 9,
        "time": "2018-09-28 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 3,
            "title": "Gameweek 3",
            "date": "2018-09-28 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 10,
        "time": "2018-10-05 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 4,
            "title": "Gameweek 4",
            "date": "2018-10-05 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 11,
        "time": "2018-10-05 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 4,
            "title": "Gameweek 4",
            "date": "2018-10-05 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 12,
        "time": "2018-10-05 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 4,
            "title": "Gameweek 4",
            "date": "2018-10-05 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 13,
        "time": "2018-10-12 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "round": {
            "id": 5,
            "title": "Gameweek 5",
            "date": "2018-10-12 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 14,
        "time": "2018-10-12 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 5,
            "title": "Gameweek 5",
            "date": "2018-10-12 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 15,
        "time": "2018-10-12 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 5,
            "title": "Gameweek 5",
            "date": "2018-10-12 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 16,
        "time": "2018-10-26 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 6,
            "title": "Gameweek 6",
            "date": "2018-10-26 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 17,
        "time": "2018-10-26 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 6,
            "title": "Gameweek 6",
            "date": "2018-10-26 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 18,
        "time": "2018-10-26 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "round": {
            "id": 6,
            "title": "Gameweek 6",
            "date": "2018-10-26 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 19,
        "time": "2018-11-02 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 7,
            "title": "Gameweek 7",
            "date": "2018-11-02 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 20,
        "time": "2018-11-02 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 7,
            "title": "Gameweek 7",
            "date": "2018-11-02 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 21,
        "time": "2018-11-02 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 7,
            "title": "Gameweek 7",
            "date": "2018-11-02 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 22,
        "time": "2018-11-16 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 8,
            "title": "Gameweek 8",
            "date": "2018-11-16 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 23,
        "time": "2018-11-16 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 8,
            "title": "Gameweek 8",
            "date": "2018-11-16 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 24,
        "time": "2018-11-16 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 8,
            "title": "Gameweek 8",
            "date": "2018-11-16 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 25,
        "time": "2018-11-23 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 9,
            "title": "Gameweek 9",
            "date": "2018-11-23 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 26,
        "time": "2018-11-23 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "team2": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "round": {
            "id": 9,
            "title": "Gameweek 9",
            "date": "2018-11-23 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 27,
        "time": "2018-11-23 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "team2": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "round": {
            "id": 9,
            "title": "Gameweek 9",
            "date": "2018-11-23 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 28,
        "time": "2018-11-30 08:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 2,
            "name": "Lion Hearts",
            "manager": "LIonell Misquitta",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/lionhearts.jpg"
        },
        "round": {
            "id": 10,
            "title": "Gameweek 10",
            "date": "2018-11-30 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 29,
        "time": "2018-11-30 08:30:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 1,
            "name": "Scouts",
            "manager": "Minti Anirudh Mishra",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/scouts.jpg"
        },
        "team2": {
            "id": 3,
            "name": "Gladiators",
            "manager": "Abhishek Prathapan"
        },
        "round": {
            "id": 10,
            "title": "Gameweek 10",
            "date": "2018-11-30 00:00:00.0"
        },
        "is_draw": false
    },
    {
        "id": 30,
        "time": "2018-11-30 09:00:00.0",
        "score1": 0,
        "score2": 0,
        "status": 0,
        "team1": {
            "id": 4,
            "name": "Wolfpack",
            "manager": "Saurabh Vijan",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/wolfpack.png"
        },
        "team2": {
            "id": 5,
            "name": "Turfcats",
            "manager": "Nilesh Patel",
            "logo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/logos/turfcats.png"
        },
        "round": {
            "id": 10,
            "title": "Gameweek 10",
            "date": "2018-11-30 00:00:00.0"
        },
        "is_draw": false
    }
];
export default fixtures;