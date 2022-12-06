import React,{useState} from 'react';
import { ChordsTypeApi, CircleApi, MajorCircleApi, MinorCircleApi } from '../../library/chords-api';
import { EChordsType, EMajorCircleChords } from '../../library/chords.models';
import Select from '../../shared/input/select-input/select-input.component';

function ChordGenerator() {
    const [chordTypeChoosen, setChordTypeChoosen] = useState<EChordsType>(EChordsType.Major)
    const [chordChoosen, setChordChoosen] = useState<EMajorCircleChords>()
    const [chordsFromScale, setChordsFromScale] = useState<CircleApi[]>([])
    
    const ajustChords = (chordIdChoosen: EMajorCircleChords) => {
        if(chordIdChoosen == null) {
            return;
        }
        const majorOrMinorChords: CircleApi[] = chordTypeChoosen == EChordsType.Major? MajorCircleApi : MinorCircleApi;
        let chordsForScale: CircleApi[] = []
        const grausNumber = 7
       
        for (let chordsCount = 0; chordsCount < grausNumber; chordsCount++) {
            if(chordsCount == 0) {
                // get Left Chord
                let firstChord = majorOrMinorChords.find(x => x.id ==  chordIdChoosen - 1)
                const lastChord = majorOrMinorChords[majorOrMinorChords.length - 1];
                firstChord = firstChord? firstChord : lastChord;
                chordsForScale.push(firstChord)
                continue
             
            }
            if( chordsCount == 1) {
                const nextChord = majorOrMinorChords.find(chord => chord.id == chordIdChoosen)
                chordsForScale.push(nextChord);
                continue
            }
            let nextChordId = chordIdChoosen + chordsCount - 1
            const isCountGreaterThenArray = nextChordId > (majorOrMinorChords.length - 1)
            nextChordId = isCountGreaterThenArray? ((majorOrMinorChords.length  - nextChordId) * -1) : nextChordId
            const nextChord = majorOrMinorChords.find(chord => chord.id == nextChordId)
            if(nextChord) {
                chordsForScale.push(nextChord);
            }
        }
        const leftThreeChords = chordsForScale.splice(0,3)
        let rightThreeChords = [...leftThreeChords]
        if(chordTypeChoosen == EChordsType.Major) {
            rightThreeChords = rightThreeChords.map(chord => MinorCircleApi.find(minorChord => minorChord.id == chord.id))
        } else {
            rightThreeChords = rightThreeChords.map(chord => MajorCircleApi.find(majorChords => majorChords.id == chord.id))
        }
        const sevenChord = chordsForScale.splice(3,1)
        chordsForScale = [...leftThreeChords,...rightThreeChords,...sevenChord]
        setChordsFromScale([])
        setChordsFromScale(chordsForScale)

    }
    return (
      <div>
        <Select value={chordChoosen} 
        onChange={(e) => setChordChoosen(Number.parseInt(e.target.value))} 
        bindLabel={'chordName'}
        bindValue={'id'}
        options={MajorCircleApi}
        label={"Chord"}
        
        
         />
          <Select value={chordTypeChoosen} 
        onChange={(e) => setChordTypeChoosen(Number.parseInt(e.target.value))} 
        bindLabel={'description'}
        bindValue={'id'}
        options={ChordsTypeApi}
        label={"Chord type"}
        
        
         />
        <button onClick={() => ajustChords(chordChoosen )}>Sort</button>
        <hr></hr>
        <p>Circle</p>
        {MajorCircleApi.map((chords,index) => <div key={index}>{chords.chordName} - {chords.id} </div>)}
        <hr></hr>
        {chordsFromScale.map((chords,index) => <div key={index}>{chords.chordName}</div>)}
      
      </div>
    );
  }
  
  export default ChordGenerator;
  