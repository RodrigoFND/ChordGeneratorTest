import React,{useState} from 'react';
// import { ChordsTypeApi, CircleApi, CircleApiScale, Grau, MajorCircleApi, MinorCircleApi } from '../../library/chords-api';
// import { EChordsType, EMajorCircleChords } from '../../library/chords.models';
// import Select from '../../shared/input/select-input/select-input.component';

// function ChordGenerator() {
//     const [chordTypeChoosen, setChordTypeChoosen] = useState<EChordsType>(EChordsType.Major)
//     const [chordChoosen, setChordChoosen] = useState<EMajorCircleChords>()
//     const [circleChordScale, setChordsFromScale] = useState<CircleApiScale[]>([])

//     const applyGrausForChords = (circleChordsScale: CircleApi[]) : CircleApiScale[]  => {
//             const chordsWithGrau: CircleApiScale[] = circleChordsScale.map((chord,index) => {
//                 if(index == 0) {
//                     return {...chord,grau:  Grau.IV }
//                 }
//                 if(index == 1) {
//                     return {...chord,grau: Grau.I }
//                 }
//                 if(index == 2) {
//                     return {...chord,grau: Grau.V }
//                 }
//                 if(index == 3) {
//                     return {...chord,grau: chordTypeChoosen == EChordsType.Major? Grau.II : Grau.VI}
//                 }
//                 if(index == 4) {
//                     return {...chord,grau: chordTypeChoosen == EChordsType.Major? Grau.VI : Grau.III}
//                 }
//                 if(index == 5) {
//                     return {...chord,grau: chordTypeChoosen == EChordsType.Major? Grau.III : Grau.VII}
//                 }
//                 if(index == 6) {
//                     return {...chord,grau: chordTypeChoosen == EChordsType.Major? Grau.VII : Grau.II}
//                 }
//             })
//             const scale = chordsWithGrau.sort((a,b) => a.grau - b.grau)
//             return  scale

//     }
    
//     const generateChords = (chordIdChoosen: EMajorCircleChords) => {
//         if(chordIdChoosen == null) {
//             return;
//         }
//         const majorOrMinorChords: CircleApi[] = chordTypeChoosen == EChordsType.Major? MajorCircleApi : MinorCircleApi;
//         let chordsForScale: CircleApi[] = []
//         const grausNumber = 7
       
//         for (let chordsCount = 0; chordsCount < grausNumber; chordsCount++) {
//             if(chordsCount == 0) {
//                 // get Left Chord
//                 let firstChord = majorOrMinorChords.find(x => x.id ==  chordIdChoosen - 1)
//                 const lastChord = majorOrMinorChords[majorOrMinorChords.length - 1];
//                 firstChord = firstChord? firstChord : lastChord;
//                 chordsForScale.push(firstChord)
//                 continue
             
//             }
//             if( chordsCount == 1) {
//                 const nextChord = majorOrMinorChords.find(chord => chord.id == chordIdChoosen)
//                 chordsForScale.push(nextChord);
//                 continue
//             }
//             let nextChordId = chordIdChoosen + chordsCount - 1
//             const isCountGreaterThenArray = nextChordId > (majorOrMinorChords.length - 1)
//             nextChordId = isCountGreaterThenArray? ((majorOrMinorChords.length  - nextChordId) * -1) : nextChordId
//             const nextChord = majorOrMinorChords.find(chord => chord.id == nextChordId)
//             if(nextChord) {
//                 chordsForScale.push(nextChord);
//             }
//         }
//         const leftThreeChords = chordsForScale.splice(0,3)
//         let rightThreeChords = [...leftThreeChords]
//         let sevenChord = chordsForScale.splice(3,1)
//         if(chordTypeChoosen == EChordsType.Major) {
//             rightThreeChords = rightThreeChords.map(chord => MinorCircleApi.find(minorChord => minorChord.id == chord.id))
//         } else {
//             rightThreeChords = rightThreeChords.map(chord => MajorCircleApi.find(majorChords => majorChords.id == chord.id))
//             sevenChord = sevenChord.map(chord => {
//                const sevenChord = MajorCircleApi.find(x => x.id == chord.id)
//                 return {...sevenChord}
//             } )
//         }
        
//         chordsForScale = [...leftThreeChords,...rightThreeChords,...sevenChord]
//         const chordWithGraus: CircleApiScale[] = applyGrausForChords(chordsForScale)
//         setChordsFromScale(chordWithGraus)

//     }
//     return (
//       <div>
//         <Select value={chordChoosen} 
//         onChange={(e) => setChordChoosen(Number.parseInt(e.target.value))} 
//         bindLabel={'chordName'}
//         bindValue={'id'}
//         options={MajorCircleApi}
//         label={"Chord"}
        
        
//          />
//           <Select value={chordTypeChoosen} 
//         onChange={(e) => setChordTypeChoosen(Number.parseInt(e.target.value))} 
//         bindLabel={'description'}
//         bindValue={'id'}
//         options={ChordsTypeApi}
//         label={"Chord type"}
        
        
//          />
//         <button onClick={() => generateChords(chordChoosen )}>Sort</button>
//         <hr></hr>
//         <p>Circle</p>
//         {MajorCircleApi.map((chords,index) => <div key={index}>{chords.chordName} - {chords.id} </div>)}
//         <hr></hr>
//         {circleChordScale.map((chords) => <div key={chords.grau}>{chords.chordName} = {chords.grau + 1}</div>)}
      
//       </div>
//     );
//   }
  
//   export default ChordGenerator;
  
function ChordGenerator() {
    return (
              <div>  </div>)
 }

 export default ChordGenerator;