import React from 'react';
import Image from 'next/image';

export default [
    {
        name: 'AD 03',
        images: ['/projects/ad03/1.png','/projects/ad03/2.png','/projects/ad03/3.png','/projects/ad03/4.png','/projects/ad03/5.png','/projects/ad03/6.png','/projects/ad03/7.png','/projects/ad03/8.png','/projects/ad03/9.png','/projects/ad03/10.png','/projects/ad03/11.png','/projects/ad03/12.png'],
        description: `the AD 03  is an apartment located in the Northern area of Bucharest, in a quiet and clean neighborhood that inspired this concept.
        To keep the air simple and fresh, we chose to use the kitchen island as a dining area as well, increasing efficiency.  The open space formed by the living room and kitchen area was formed based on the idea of closeness between people, communication being possible from any corner of the room.
        The minimalist line was also preserved in the bedroom and the bathroom, these being the areas of retreat in the shadow of the daily hustle and bustle. `,
        type:  'type: residential',
        size: 'size 77',
        location: 'location: Bucharest',
        status: 'concept 2023'

    },
    {
        name: 'Ototo Office',
        images: ['/projects/ototo/1.png','/projects/ototo/2.png','/projects/ototo/3.png','/projects/ototo/4.png','/projects/ototo/5.png','/projects/ototo/6.png','/projects/ototo/7.png','/projects/ototo/8.png','/projects/ototo/9.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: ``,
        type:  'type: comercial',
        size: 'size 72',
        location: 'location: Bucharest',
        status: 'completed 2023'

    }
]