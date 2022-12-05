import { Session } from "../dist/index.js";
import { config } from "dotenv";
config();
new Session({
	hostName: "IVAAN!",
	worldName: "Hello World",
	version: "1.2.54",
	protocol: 544,
	connectedPlayers: 0,
	maxConnectedPlayers: 69,
	ip: process.env.IP,
	port: process.env.PORT,
	log: true,
	joinability: "joinable_by_friends",
	connectionType: 6,
	autoFriending: true,
	tokenPath: "./auth",
	pingServerForInfo:true,
	accounts: [process.env.EMAIL, process.env.EMAIL2],
	constants: {
		//gamemode: true,
		//worldName: true,
		//hostName: true,
		//maxConnectedPlayers: true,
		//protocol: true,
		//version: true,
		//connectedPlayers: true,
	},
});
