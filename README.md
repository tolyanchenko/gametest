## Installation

$ docker-compose up


## URL

http://localhost:3000/


## API endpoints

/publishers - POST - create a publisher (please make sure to create one before creating a game)

/publishers - GET - get all publishers 

/publishers/:id - GET - get a publisher 

/publishers/:id - DELETE - delete a game

/publishers/:id - PUT - update a game


/games - POST - create a game

/games - GET - get all games 

/games/:id - GET - get a game

/games/:id - DELETE - delete a game

/games/:id - PUT - update a game


/games/:id/publisher - GET - get publisher by game's id

/games/discount - POST - get all games considering release date
