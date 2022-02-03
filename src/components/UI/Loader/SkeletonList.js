import React from 'react';
import useMatchMedia from 'use-match-media-hook'
import SkeletonUiCard from './SkeletonUiCard';


const queries = [
    '(max-width: 480px)'
]

const SkeletonList = () => {

    const [mobile] = useMatchMedia(queries)

    return (!mobile ?
            (
                <>
                    <SkeletonUiCard/>
                    <SkeletonUiCard/>
                    <SkeletonUiCard/>
                    <SkeletonUiCard/>
                    <SkeletonUiCard/>
                    <SkeletonUiCard/>
                </>
            ) :
            (
                <>
                    <SkeletonUiCard/>
                </>
            )
    );
};

export default SkeletonList;