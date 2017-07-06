const knex = require('knex')({
  client: 'pg',
  connection: {
    //database: 'dev-restaurants-app'
    database: 'dev-restaurants-app',
    user: 'dev',
    password: 'anschel1'
  },
});

const { DATABASE, PORT } = require('./config');
// const knex = require('knex')({
//   client: 'pg',
//   connection: '	postgres://tdqonxzs:cAAs-TOvQBFiExdgFaZRKQJiCXF1o2QC@stampy.db.elephantsql.com:5432/tdqonxzs'
// });

// clear the console before each run
process.stdout.write('\033c');

// //1. Get All Restaurants
// knex.select()
//   .table('restaurants')
//   .limit(4)
//   .then(results => console.log('Get All Restaurants w/ limit 4: ', results));

// // 2. Get Italian restaurants
// knex.select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(4)
//   .then(results => console.log('Get Italian restaurants /w limit 4: ', results));

// // 3. Get 10 Italian restaurants, subset of fields
// knex.select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log('Get 10 Italian restaurants, subset of fields: ', results));

// // 4. Count of Thai restaurants
// knex.count('id')
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .then(results => console.log('Count of Thai restaurants: ', results));

// // 5. Count of restaurants

// knex.count('id')
//   .from('restaurants')
//   .then(results => console.log('Count of restaurants: ', results));

// // 6. Count of Thai restaurants in zip code

// knex.count()
//   .from('restaurants')
//   .where({'cuisine': 'Thai', 'address_zipcode': '11372'})
//   .then(results => console.log('Count of Thai restaurants in zip code 11372: ', results));

// 7. Italian restaurants in one of several zip codes

// knex.select('id', 'name')
//   .from('restaurants')
//   // .where('cuisine', 'Italian')
//   // .whereIn('address_zipcode', ['11372', '11380', '10014'])
//   .where({cuisine : 'Italian', address_zipcode: 11372})
//   .orWhere({cuisine : 'Italian', address_zipcode: 11380})  
//   .orderBy('name')
//   .limit(5)
//   .then(results => console.log('Italian restaurants in one of several zip codes: ', results));

// // 8. Create a restaurant

// knex
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .into('restaurants')
//   .returning(['name', 'borough', 'cuisine'])
//   .then(results => console.log('Create a restaurant: ', results));

// // 9. Create a restaurant and return id and name

// knex
//   .insert({
//     name: 'Bat Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(results => console.log('Create a restaurant and return id and name: ', results));

//   // 10. Create three restaurants and return id and name

//   knex
//     .insert([{
//     name: 'Donut Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Brooklyn Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Bagel Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   }])
// .into('restaurants')
// .returning(['id', 'name'])
// .then(results => console.log('Create three restaurants and return id and name: ', results));

// 11. Update a record 

// knex('restaurants')
//   .where({nyc_restaurant_id: '30191841'})
//   .update({name: 'DJ Reynolds Pub and Restaurant'})
//   .returning(['id', 'name'])
//   .then(results => console.log('Update a record: ', results));
 // returned => []
// knex
//   .select()
//   .from('restaurants')
//   .where({nyc_restaurant_id: '30191841'})
//   .then(results => console.log('exist? ', results))


//12. Delete by id
// knex
//   .from('grades')
//   .where('id', '22')
//   .del()
//   .then(results => console.log('Delete by id: ', results));

// could not check because i deleted the table 'grades'


// 13. A blocked delete
// knex
//   .del()
//   .from('restaurants')
//   .where('id', 32)
//   .returning(['name', 'id'])
//   .then(results => console.log(results));

// able to delete without error :/

// Adding Knex to the endpoints








// // Older Drills (see https://courses.thinkful.com/node-sql-001v1/project/1.1.3)
// //14: Create a table
// // knex.schema.createTable('inspectors', function(table) {
// //   table.text('first_name').notNullable();
// //   table.text('last_name').notNullable();
// //   table.specificType('borough', 'borough_options');
// // }) 
// // .then(res => console.log(JSON.stringify(res, null, 2)));

// //15: Update grades table
// // knex.schema.table('grades', function(table) {
// //   table.text('notes');
// // });

// //16: Drop the table 
// // knex.schema
// //   .dropTable('inspectors')
// //   .then(res => console.log(res));

// // HYDRATE drill
// // const hydrated = {};
// // restaurants.forEach(row => {
// //   if (!(row.id in hydrated)) {
// //     hydrated[row.id] = {
// //       name: row.name,
// //       cuisine: row.cuisine,
// //       borough: row.borough,
// //       grades: []
// //     }
// //   }
// //   hydrated[row.id].grades.push({
// //     gradeId: row.gradeId,
// //     grade: row.grade,
// //     score: row.score
// //   });
// // });
// // console.log(JSON.stringify(hydrated, null, 2))

// // Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })