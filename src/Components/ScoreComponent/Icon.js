import React from 'react';
import { ReactComponent as ReactionIcon } from '../../assets/images/icon-reaction.svg';
import { ReactComponent as MemoryIcon } from '../../assets/images/icon-memory.svg';
import { ReactComponent as VerbalIcon } from '../../assets/images/icon-verbal.svg';
import { ReactComponent as VisualIcon } from '../../assets/images/icon-visual.svg';

function Icon({ category }) {
    switch (category) {
        case "Reaction":
            return <ReactionIcon />
        case "Memory":
            return <MemoryIcon />
        case "Verbal":
            return <VerbalIcon />
        case "Visual":
            return <VisualIcon />
        default:
            return null;
    }
}

export default Icon;