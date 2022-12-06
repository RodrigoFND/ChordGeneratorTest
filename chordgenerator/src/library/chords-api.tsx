import { EMajorCircleChords, EChordsType, EMinorCircleChords } from "./chords.models";

export interface CircleApi {
    id: EMajorCircleChords | EMinorCircleChords,
    chordName: string;
    variations: {
        name: string;
    }

}

export const ChordsTypeApi = [
    {
        id:  EChordsType.Major,
        description: 'Major',
    },
    {
        id:  EChordsType.Minor,
        description: 'Minor',
    },

]

export const MajorCircleApi: CircleApi[] = [
    {
        id:  EMajorCircleChords.F,
        chordName: 'F',
        variations: {
            name: 'F'
        }
    },
    {
    id:  EMajorCircleChords.C,
    chordName: 'C',
    variations: {
        name: 'C'
    }
},
{
    id:  EMajorCircleChords.G,
    chordName: 'G',
    variations: {
        name: 'G'
    }
},
{
    id:  EMajorCircleChords.D,
    chordName: 'D',
    variations: {
        name: 'D'
    }
},
{
    id:  EMajorCircleChords.A,
    chordName: 'A',
    variations: {
        name: 'A'
    }
},
{
    id:  EMajorCircleChords.E,
    chordName: 'E',
    variations: {
        name: 'E'
    }
},
{
    id:  EMajorCircleChords.B,
    chordName: 'B',
    variations: {
        name: 'B'
    }
},
{
    id:  EMajorCircleChords.FSHARP,
    chordName: 'F#',
    variations: {
        name: 'F#'
    }
},
{
    id:  EMajorCircleChords.DBEMOL,
    chordName: 'Db',
    variations: {
        name: 'Db'
    }
},
{
    id:  EMajorCircleChords.ABEMOL,
    chordName: 'Ab',
    variations: {
        name: 'Ab'
    }
},
{
    id:  EMajorCircleChords.EBEMOL,
    chordName: 'Eb',
    variations: {
        name: 'Eb'
    }
},

{
    id:  EMajorCircleChords.BBEMOL,
    chordName: 'Bb',
    variations: {
        name: 'Bb'
    }
},

]

export const MinorCircleApi: CircleApi[] = [
    {
        id:  EMinorCircleChords.DM,
        chordName: 'Dm',
        variations: {
            name: 'Dm'
        }
    },
    {
        id:  EMinorCircleChords.AM,
        chordName: 'Am',
        variations: {
            name: 'Am'
        }
    },
    {
        id:  EMinorCircleChords.EM,
        chordName: 'Em',
        variations: {
            name: 'Em'
        }
    },
    {
        id:  EMinorCircleChords.BM,
        chordName: 'Bm',
        variations: {
            name: 'Bm'
        }
    },
    {
        id:  EMinorCircleChords.FSHARPM,
        chordName: 'F#m',
        variations: {
            name: 'F#m'
        }
    },
    {
        id:  EMinorCircleChords.CSHARPM,
        chordName: 'C#m',
        variations: {
            name: 'C#m'
        }
    },
    {
        id:  EMinorCircleChords.GSHARPM,
        chordName: 'G#m',
        variations: {
            name: 'G#m'
        }
    },
    {
        id:  EMinorCircleChords.EBEMOLM,
        chordName: 'Ebm',
        variations: {
            name: 'Ebm'
        }
    },
    {
        id:  EMinorCircleChords.BBEMOLM,
        chordName: 'Bbm',
        variations: {
            name: 'Bbm'
        }
    },
    {
        id:  EMinorCircleChords.FM,
        chordName: 'Fm',
        variations: {
            name: 'Fm'
        }
    },
    {
        id:  EMinorCircleChords.CM,
        chordName: 'Cm',
        variations: {
            name: 'Cm'
        }
    },
    {
        id:  EMinorCircleChords.GM,
        chordName: 'Gm',
        variations: {
            name: 'Gm'
        }
    },
]