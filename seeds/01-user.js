exports.seed = function(knex, Promise) {
    return knex("user").del().then(() => {
        return knex("user").insert([{
            id: 1,
            name: "Kyle"
        },{
            id: 2,
            name: "CJ"
        },{
            id: 3,
            name: "Brooks"
        }]);
    }).then(() => {
        knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 4;");
    });
};
