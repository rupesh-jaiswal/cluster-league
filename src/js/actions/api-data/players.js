const players = [
    {
        "id": 5,
        "name": "Abhishek Prathapan",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/-bVxnZnPj1VCGpCjt-vFGgmgJfDC8zF0.jpeg",
        "is_manager": true
    },
    {
        "id": 54,
        "name": "Akshay Gadgil",
        "age": 1,
        "position": "GKP",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/C8Lm8CGPkG2xhw0hRTPjjQmh7VC1gv-1.jpeg",
        "is_manager": false
    },
    {
        "id": 52,
        "name": "Akshay Pariani",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 24,
        "name": "Amey Gadre",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/tq--JFsQFllrPm95QJ0nDWjjlhfR7W2h.jpeg",
        "is_manager": false
    },
    {
        "id": 48,
        "name": "Aniket Varankar",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/34k-cKKM4tTcnxlfS251TV8RM1t6f8H-.jpeg",
        "is_manager": false
    },
    {
        "id": 28,
        "name": "Anup Pandit",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 50,
        "name": "Anup Sivasankaran",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/lJpZHnc01Q8XHhSkL0SR9NXffB8Bq99J.jpeg",
        "is_manager": false
    },
    {
        "id": 51,
        "name": "Arbans D'Cruz",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/BmTP5XCpp0NjN1qSSBBm051vhlqrnZ2W.jpeg",
        "is_manager": false
    },
    {
        "id": 13,
        "name": "Ashish Khandelwal",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/D6WN6LggXmVfW27Gb03L5KVKFSFxShWj.jpeg",
        "is_manager": false
    },
    {
        "id": 56,
        "name": "Ashley Rodrigues",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/QSXw4jdN6cPbGwpCx2gXTFzcLj1fC9X-.jpeg",
        "is_manager": false
    },
    {
        "id": 3,
        "name": "Austin Thompson",
        "age": 1,
        "position": "DEF",
        "is_manager": false
    },
    {
        "id": 53,
        "name": "Bhagyesh Rane",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/59jr02znkK2kbqL9rT7BMd1PL7MTTKWR.jpeg",
        "is_manager": false
    },
    {
        "id": 29,
        "name": "Bhaskar Bandyopadhyay",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 30,
        "name": "Bhawesh Joshi",
        "age": 1,
        "position": "MID",
        "is_manager": false
    },
    {
        "id": 46,
        "name": "Bruce Wilson",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/-bK4MnxtW-4QlSHnqDNhGZ1Pz3FRp7kR.jpeg",
        "is_manager": false
    },
    {
        "id": 44,
        "name": "Francis Henriques",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/WBXPdHqQC8gbd8DfClhSF5Z8SG12ZNZv.jpeg",
        "is_manager": false
    },
    {
        "id": 16,
        "name": "Gopesh Gopalakrishnan",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/sSF8mWKBxHxpVzNZNRbkBtHgKHVsP8fq.jpeg",
        "is_manager": false
    },
    {
        "id": 20,
        "name": "Gunjan Bafna",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/zTt4x95JW4lVJtJpHwPjD2pZBGQ-gMVk.jpeg",
        "is_manager": false
    },
    {
        "id": 47,
        "name": "Hemant Kanade",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/nL29w7tnJ98BFJMnTmmqG87dhmsTdmwF.jpeg",
        "is_manager": false
    },
    {
        "id": 9,
        "name": "Julian Gonsalves",
        "age": 1,
        "position": "FWD",
        "is_manager": false
    },
    {
        "id": 59,
        "name": "Karan Jumwal",
        "age": 1,
        "position": "MID",
        "is_manager": false
    },
    {
        "id": 21,
        "name": "Kishor Sharma",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/2X7W0DjKkb0DCM8kKvVP9sd5kzMvNn7b.jpeg",
        "is_manager": false
    },
    {
        "id": 7,
        "name": "Lionell Misquitta",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/2lpJpQsB7FSRPPnB9fG18qQQ9rszq5X1.jpeg",
        "is_manager": true
    },
    {
        "id": 2,
        "name": "Minti Anirudh Mishra",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/TnT8GzHW8nr60zBXdtQnN37m1FMrlWkC.jpeg",
        "is_manager": true
    },
    {
        "id": 25,
        "name": "Mohan Tiwari",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/scvZWS6lc3Tk3nVtVz38BRcqPLxj51dM.jpeg",
        "is_manager": false
    },
    {
        "id": 18,
        "name": "Mukul Sharma",
        "age": 1,
        "position": "",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/3FsJNTvZ9ZbghNTz3Q3DXRjxNxMSQPcP.jpeg",
        "is_manager": false
    },
    {
        "id": 36,
        "name": "Nevin Kuriakose",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 8,
        "name": "Nilesh Patel",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/turfcats/rrm1q-gvvk5xmdcjLVtxHKrMVRrfS6BV.jpeg",
        "is_manager": true
    },
    {
        "id": 55,
        "name": "Onkar Waman",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/w3rmh2J46hwFkbp5k72D36XbbHLLF9RQ.jpeg",
        "is_manager": false
    },
    {
        "id": 39,
        "name": "Praful Ajgekar",
        "age": 1,
        "position": "GKP",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/turfcats/4HRTDkvh56z0x-WgJmD4CjNwvQXXn9Wb.jpeg",
        "is_manager": false
    },
    {
        "id": 37,
        "name": "Prasad Ghuge",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 14,
        "name": "Pratik Sawant",
        "age": 1,
        "position": "FWD",
        "is_manager": false
    },
    {
        "id": 42,
        "name": "Pronit Agrawal",
        "age": 1,
        "position": "DEF",
        "is_manager": false
    },
    {
        "id": 23,
        "name": "Rahul Bhadre",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/N2sGvdzpbXDcjchZLmBdpPNB8mpVQhjW.jpeg",
        "is_manager": false
    },
    {
        "id": 38,
        "name": "Rahul Raina",
        "age": 1,
        "position": "FWD",
        "is_manager": false
    },
    {
        "id": 22,
        "name": "Ravi Shankar",
        "age": 1,
        "position": "",
        "is_manager": false
    },
    {
        "id": 60,
        "name": "Ravi Velar",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/BLkgP9JgGtN2KNSFNptHz3ZbXgF9NNxb.jpeg",
        "is_manager": false
    },
    {
        "id": 43,
        "name": "Rizwan Khan",
        "age": 1,
        "position": "",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/turfcats/hdNVPCDQ9z4XlNj3Gp2M36m6tk1t-Krj.jpeg",
        "is_manager": false
    },
    {
        "id": 17,
        "name": "Rohit Nair",
        "age": 1,
        "position": "GKP",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/QvHsRSlWsmDhJ2SW8VBnRqK3b3NZRPQG.jpeg",
        "is_manager": false
    },
    {
        "id": 45,
        "name": "Rohit Sawardekar",
        "age": 1,
        "position": "GKP",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/W1dfkrdc8RCZ-9-9R42S95jX5CjDStF2.jpeg",
        "is_manager": false
    },
    {
        "id": 27,
        "name": "Ronald Kotian",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/BMBc8ZNGXfRkcDPzV4gzVzw6gRdJfhG-.jpeg",
        "is_manager": false
    },
    {
        "id": 10,
        "name": "Rushabh Shah",
        "age": 1,
        "position": "",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/bnMMvZLVMJzvXZJ9m2XcKzZn5l338hD9.jpeg",
        "is_manager": false
    },
    {
        "id": 49,
        "name": "Sagnik Mukherjee",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/lionhearts/HBP6vh1Wh1QDCvf7dk8rQq7gLJ3wk7tk.jpeg",
        "is_manager": false
    },
    {
        "id": 26,
        "name": "Sahil Patil",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/VJTpMcLS0S6DTlkj3hz-WZ00WklbwnQR.jpeg",
        "is_manager": false
    },
    {
        "id": 1,
        "name": "Sandeep Saini",
        "age": 28,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/m0h89-8zjLc6-jpW05zWKMT3pskZZX0K.jpeg",
        "is_manager": false
    },
    {
        "id": 61,
        "name": "Saurabh Prabhu",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/hpBNfQqx-fKWkR2TB3vPgqqPp5xr0QB8.jpeg",
        "is_manager": false
    },
    {
        "id": 4,
        "name": "Saurabh Vijan",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/QzN-Gzg09XZj1l3Hj1Z5G5lsKQgdLd-J.jpeg",
        "is_manager": true
    },
    {
        "id": 15,
        "name": "Shailesh Nair",
        "age": 1,
        "position": "FWD",
        "is_manager": false
    },
    {
        "id": 40,
        "name": "Shivendra Sharma",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/turfcats/w1Vf-RZZCCQrRCFJ-J7fwTCDgBFRjkg8.jpeg",
        "is_manager": false
    },
    {
        "id": 11,
        "name": "Sijo Xavier",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/pQ98WJq6bzkszRfc0hGsqQXqmXLfhGGN.png",
        "is_manager": false
    },
    {
        "id": 19,
        "name": "Snedden D'mello",
        "age": 1,
        "position": "MID",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/gladiators/W5bMJNcnN3djt699cN0MZ4QRR2fSBHWx.jpeg",
        "is_manager": false
    },
    {
        "id": 6,
        "name": "Sumit Bhardwaj",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/6n3-l8bkWxqrP9nBSh83dnMC0zBcktDF.jpeg",
        "is_manager": false
    },
    {
        "id": 57,
        "name": "Tavish Bhagat",
        "age": 1,
        "position": "FWD",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/scouts/JVjsBgSH059MC-Gq7rcfk2DlTH-wZLkM.jpeg",
        "is_manager": false
    },
    {
        "id": 41,
        "name": "Vaibhav Rai",
        "age": 1,
        "position": "",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/turfcats/p70-43SmRnNXbwd-8p-9tPBD4JcjvnJK.jpeg",
        "is_manager": false
    },
    {
        "id": 12,
        "name": "Vishal Chavan",
        "age": 1,
        "position": "DEF",
        "photo_url": "https://storage.googleapis.com/asia.artifacts.cluster-league.appspot.com/cluster-league/photos/wolfpack/NWsX2wbWGHM2WH4LXxmvG2djqPXdvT58.jpeg",
        "is_manager": false
    }
];

export default players;