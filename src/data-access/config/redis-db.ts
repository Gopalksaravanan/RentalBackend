// import Redis from "ioredis";
// import gradient from "gradient-string";



// let redis: Redis;

// function errorLogger(message: string, error: any) {
//     console.error(message, error);
// }

// export function connectToRedisDB() {
//     try {
//         const redisPort = parseInt(process.env.REDIS_PORT);

//         redis = new Redis(redisPort, process.env.REDIS_DNS);
//         redis.on("connect", function () {
//             console.log("Redis connected successfully")
//         });
//         redis.on("error", function (error) {
//             console.error("Error On Redis", error)
//         });
//     } catch (error) {
//         console.log(
//             gradient(
//                 "blue",
//                 "red",
//             )(
//                 `Redis Host: ${process.env.REDIS_DNS} Redis Port: ${process.env.REDIS_PORT}`,
//             ),
//         );
//         errorLogger("Error connecting to Redis:", error);
//     }
// }
// export { redis };
