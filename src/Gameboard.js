
import {useState} from 'react';
function Gameboard(props) {
    const tileCount =24;
    const [tiles, setTiles] = useState([]);
    const [lastFilpped, setLastFlipped] = useState(null);
    const [clicks, setClicks]= useState(0);

    const resetTiles =() => {
        let tiles =[];
        let number =0;
        for (let i=0; i<tileCount; i+=2){
            number++;
            let tile1= {flipped: true, matched: false, number};
            let tile2= {flipped: true, matched:false, number};
            tiles=[...tiles, tile1, tile2];
        }

        for(let i =0; i<tiles.length; i++){
            const swap = Math.floor(Math.random() * tiles.length);
            [tiles[i], tiles[swap]]= [tiles[swap], tiles[i]];
        }

        setTiles(tiles);
        setClicks(0);
    }

    const renderTile = (tile,index) => {
        let classes = ['Tile'];
        if(tile.flipped){
            classes = [...classes, 'flipped']
        }
        if(tile.matched){
            classes = [...classes, 'matched']
        }
        return (
            <div key={`tile-${index}`} className={classes.join(" ")} onClick={() => tile.flipped=!tile.flipped}>
                {tile.number}
            </div>
        )
    }

    const flipTile = (index) => {
        //alert(1);
        let tile = tiles[index];
        tile.flipped = !tile.flipped;
        tiles[index]= tile;
        //setTiles(tiles);
    }
    return (
        <div>
           <h1> Memory Game</h1>
           <strong> Clicks: {clicks}</strong>
           <button className="reset" onClick={resetTiles}>New Game</button>
           <hr/>
           {tiles.map((tile, index) => renderTile(tile,index))}
        </div>
    )
}
export default Gameboard;