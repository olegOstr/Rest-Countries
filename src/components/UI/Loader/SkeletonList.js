import React from 'react';
import SkeletonUiCard from './SkeletonUiCard';

const SkeletonList = () => {
    return (
        <>
            <SkeletonUiCard/>
            <SkeletonUiCard/>
            <SkeletonUiCard/>
            <SkeletonUiCard/>
            <SkeletonUiCard/>
            <SkeletonUiCard/>
        </>
    );
};

export default SkeletonList;