
export interface NoteScale {
    codigo: number;
    chordName: string;
    chordType: CromaticScale
    isMinor: boolean;
    scaleChords : ScaleChords[]

}
export interface ScaleChords {
    chordName: string;
    chordType: CromaticScale;
    isMinor: boolean;
    grau: Grau;
    pianoChordsVariation: []
    guitarChordsVariation: []
    isPlaying: boolean
}

export interface ImageAudioChord {
    image : string,
    audioFile: string
}

// export enum EMajorCircleChords {
//     F,
//     C,
//     G,
//     D,
//     A,
//     E,
//     B,
//     FSHARP,
//     DBEMOL,
//     ABEMOL,
//     EBEMOL,
//     BBEMOL,
// }

// export enum EMinorCircleChords {
//     DM,
//     AM,
//     EM,
//     BM,
//     FSHARPM,
//     CSHARPM,
//     GSHARPM,
//     EBEMOLM,
//     BBEMOLM,
//     FM,
//     CM,
//     GM,
// }

export enum CromaticScale {
    C,
    CSHARP,
    D,
    DSHARP,
    E,
    F,
    FSHARP,
    G,
    GSHARP,
    A,
    ASHARP,
    B
}

export enum EChordType {
    Minor,
    Major
}

export enum Grau {
    I,
    II,
    III,
    IV,
    V,
    VI,
    VII
}

