import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery() {
    console.log(characterData);

    return  (
<div>
{ characterData.map(
    (character) => <Character
    key={character.id}
    name={character.name}
    img={character.imgUrl}
    birth={character.birth}
    death={character.death}
    race={character.race}
    realm={character.realm}
    spouce={character.spouse}
    />
)}
</div>

    )
}

export default CharacterGallery;