# ships-simulation-frontend

## React JS application for battleship simulation

Simple React UI application designed to present result of battleship simulation.

The game is designed following rules from https://en.wikipedia.org/wiki/Battleship_(game).

### Simulation

There are two boards with empty fields by default. To perform the simulation press `Simulate` button, it will send a POST request to the server and after that the response will be processed. After the response is processed, board are filled with proper squares and icons representing fired positions.

Ships are represented by gray squares. When a ship is hit, the square is marked with red cross. Sinking ship icon represents ship that is sunk. Blue wave means that te position was a missed shot.

After the simulation is performed there are additional results on the screen between the boards.

To perform the simulation again, press the `Reset` button and then start simulation as previous.

### Run conditions

Application runs at `localhost:3000` and sends request by axios to `localhost:7035/game/simulate`, the server has enabled CORS.

To run the application in development mode simply open command line and use `npm start`.
