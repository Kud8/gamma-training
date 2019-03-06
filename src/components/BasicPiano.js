import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import SoundfontProvider from './SoundfontProvider';
import DimensionsProvider from "./DimensionsProvider";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f5'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export default function BasicPiano() {
    return (
        <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
                <DimensionsProvider>
                    {({ containerWidth }) => (
                        <Piano
                            noteRange={noteRange}
                            width={containerWidth}
                            height={300}
                            playNote={playNote}
                            stopNote={stopNote}
                            disabled={isLoading}
                            keyboardShortcuts={keyboardShortcuts}
                        />
                    )}
                </DimensionsProvider>
            )}
        />
    );
}
