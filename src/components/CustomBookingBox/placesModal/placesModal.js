import './placesModal.css';
import Chip from '../../chip/chip';
import placesData from '../../../utils/dummyData';
import { useState } from 'react';
import ModalOutline from '../ModalOutline/ModalOutline';
const PlacesModal = () => {
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <ModalOutline title={"Select the places"}>
            <div className="places-modal-search-bar">
                <input
                    type="text"
                    name="placesSearchInput"
                    id="placesSearchInput"
                    placeholder='search places'
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                />
            </div>
            <div className="placesContainer">
                <div className="selectedChipsContainer">
                    <h3>Selected places</h3>
                    <div className='chips'>
                        {
                            placesData.map((place) => {
                                if (selectedPlaces.includes(place)) {
                                    return <Chip
                                        name={place.name}
                                        isSelected={true}
                                        action={
                                            () => {
                                                setSelectedPlaces(selectedPlaces.filter((selectedPlace) => selectedPlace !== place));
                                            }
                                        }
                                    />

                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
                <div className="allChipsContainer">
                    <h3>{searchQuery === '' ? "All Places" : "Results for " + searchQuery}</h3>
                    <div className='chips'>
                        {
                            searchQuery === '' ?
                                placesData.map((place) => {
                                    if (!selectedPlaces.includes(place)) {
                                        return <Chip
                                            name={place.name}
                                            isSelected={false}
                                            action={
                                                () => {
                                                    setSelectedPlaces([...selectedPlaces, place]);
                                                }
                                            } />
                                    } else {
                                        return null;
                                    }
                                })
                                :
                                placesData.filter(
                                    (place) => place.name.toLowerCase().includes(searchQuery.toLowerCase())
                                ).map(
                                    (place) => {
                                        if (!selectedPlaces.includes(place)) {
                                            return <Chip
                                                name={place.name}
                                                isSelected={false}
                                                action={
                                                    () => {
                                                        setSelectedPlaces([...selectedPlaces, place]);
                                                    }
                                                } />
                                        } else {
                                            return null;
                                        }
                                    }
                                )
                        }
                    </div>
                </div>
            </div>
        </ModalOutline>
    );
}

export default PlacesModal;