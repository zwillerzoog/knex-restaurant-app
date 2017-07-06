const express = require('express');
const bodyParser = require('body-parser');

const { DATABASE, PORT } = require('./config');
const Treeize = require('treeize');
const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());

app.get('/restaurants', (req, res) => {

  knex.select('id', 'name', 'cuisine', 'borough')
    .from('restaurants')
    .limit(10)
    .then(results => res.json(results));
});

app.get('/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  // knex.first('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
  //   .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
  //   .from('restaurants')
  //   .where('restaurants.id', 'req.params.id')
  //   .innerJoin('grades', 'restaurants.id','grades.restaurant_id')    
  //   .orderBy('date', 'desc')
  //   .limit(1)
  //   .then(results => res.json(results));

  knex.first('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'gra\de', 'date as inspectionDate', 'score')
    .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
    .from('restaurants')
    .where('restaurants.id', req.params.id)
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
    .orderBy('date', 'desc')
    .then(results => res.json(results));
});

app.listen(PORT);
