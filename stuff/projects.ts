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
        size: 'size 77㎡',
        location: 'location: Bucharest',
        status: 'concept 2023'
    },
    {
        
        name: 'Ototo Office',
        images: ['/projects/ototo/1.png','/projects/ototo/2.png','/projects/ototo/3.png','/projects/ototo/4.png','/projects/ototo/5.png','/projects/ototo/6.png','/projects/ototo/7.png','/projects/ototo/8.png','/projects/ototo/9.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: ``,
        type:  'type: comercial',
        size: 'size 72㎡',
        location: 'location: Bucharest',
        status: 'completed 2023'

    },
    {
        name: 'AV-L',
        images: ['/projects/avl/1.png','/projects/avl/2.png','/projects/avl/3.png','/projects/avl/4.png','/projects/avl/5.png','/projects/avl/6.png','/projects/avl/7.png','/projects/avl/8.png','/projects/avl/9.png'],
        description: `The concept of this apartment started from the idea of maximizing the space through design and capitalizing on the light that enters through the large windows of the house.  The brick wall has the role of breaking the minimalist aesthetic and creating a play of light, ensuring the welcoming atmosphere of the house.
        The skeleton of the concept is represented by the use of wooden elements associated with raw brick and travertine, wishing to integrate the idea of the exterior into a welcoming interior.`,
        type:  'type: residential',
        size: 'size: 58㎡',
        location: 'location: Bucharest',
        status: 'concept 2023'
    },
    {
        name: 'Sfintii Voievozi II',
        images: ['/projects/sf2/1.png','/projects/sf2/2.png','/projects/sf2/3.png','/projects/sf2/4.png','/projects/sf2/5.png','/projects/sf2/6.png','/projects/sf2/7.png','/projects/sf2/8.png','/projects/sf2/9.png','/projects/sf2/10.png','/projects/sf2/11.png','/projects/sf2/12.png','/projects/sf2/13.png','/projects/sf2/14.png','/projects/sf2/15.png','/projects/sf2/16.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: `With the help of light, materials and color palette, mood alterations can be seen throughout this home.Tall, but peacefully balanced by lines and windows from which natural light gains the invitation to penetrate the deep-end of the building, this enlightenment contributes to the creation of an interior that grasps the essence of living, thus promoting a perpetuity of tense movement when faced with gravity-obeying elements.`,
        pj: `Project team: Iulia Oniciuc | Camina Zerva`,
        ph: `Photography: IOKA DESIGN`,
        type:  'type: residential',
        size: 'size 150㎡ ',
        location: 'location: Bucharest',
        status: 'completed 2022'  
    },
    {
        name: 'SAPTESPREZECE',
        images: ['/projects/17/1.png','/projects/17/2.png','/projects/17/3.png','/projects/17/4.png','/projects/17/5.png','/projects/17/6.png','/projects/17/7.png','/projects/17/8.png','/projects/17/9.png','/projects/17/10.png','/projects/17/11.png','/projects/17/12.png','/projects/17/13.png','/projects/17/14.png','/projects/17/15.png','/projects/17/16.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: `The apartment is a duplex located on a quiet street in the center of Bucharest, designed to achieve a perpetual essentialism in harmony with the distinct characteristics of the building in which it is located. One of the main ideas of the layout was to create a space that can detach you from the characteristic urban chaos of the central areas of the cities.  As the house becomes more democratic and freer, it stops dissolving into the mundane daily affairs and stops work in one direction just for the sake of doing so. Here, home is a place that encompasses life, entertainment, social interaction, spiritual fulfillment, introspection, observation of the world, and expression of values, in addition to being a place for satisfying basic needs. The walls are painted white, serving as a background for the shadows coming from outside, keeping the industrial line of the building's design through the exposed concrete of the ceiling and microcement on the floor.`,
        pj: `Project team: Iulia Oniciuc | Camina Zerva`,
        ph: `Photography: IOKA DESIGN`,
        type:  'type: residential',
        size: 'size 120㎡ ',
        location: 'location: Bucharest',
        status: 'completed 2021'  
    },
    {
        name: 'III',
        images: ['/projects/3/1.png','/projects/3/2.png','/projects/3/3.png','/projects/3/4.png','/projects/3/5.png','/projects/3/6.png','/projects/3/7.png','/projects/3/8.png','/projects/3/9.png','/projects/3/10.png','/projects/3/11.png','/projects/3/12.png','/projects/3/13.png','/projects/3/14.png','/projects/3/15.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: `III is an apartment located on the outskirts of the city, in an area secluded from the hustle, bustle and urban noise. The aim was to design a modern family home that is rooted in a sense of place and reflects the local vernacular. Softness and color are added through the use of natural and tactile materials, aiming to improve the play of light, shadows and textures in the home.
        Aluminum kitchen finishes create an ethereal background that reflects the household activities that take place around a large, monolithic work area, as well as the light.  This apartment is a luxurious yet rugged retreat, with furniture chosen for its durability, comfort, and ability to enhance the peaceful atmosphere of the home.`,
        pj: `Project team: Iulia Oniciuc | Camina Zerva`,
        ph: `Photography: IOKA DESIGN`,
        type:  'type: residential',
        size: 'size 120㎡ ',
        location: 'location: Bucharest',
        status: 'completed 2021'  
    },
    {
        name: 'AM',
        images: ['/projects/am/1.png','/projects/am/2.png','/projects/am/3.png','/projects/am/4.png','/projects/am/5.png','/projects/am/6.png','/projects/am/7.png','/projects/am/8.png','/projects/am/9.png'].map((img)=>img.split('.')[0]+'.jpg'),
        description: `AM is an apartment located in Bucharest, close to the outskirts of the city. Having a limited space, we took advantage of the location of a pillar of resistance to plate it and its position in the continuation of the dining table, exploiting the available space to the maximum.
        Adhering to the minimalistic style in its layout, the space is deconstructed and rearranged through the use of color blocks and materials, creating different visual spaces and maximizing the connection between the space and an ideal lifestyle.
        The design of the position of light entry allows it to reflect the beauty of the space’s transitions. The arrangement of warm and cold colors, in the wood tones and black, forms a warm perception of the “home” space under the introduction of light.`,
        pj: `Project team: Iulia Oniciuc | Camina Zerva`,
        ph: `Photography: IOKA DESIGN`,
        type:  'type: residential',
        size: 'size 65㎡ ',
        location: 'location: Bucharest',
        status: 'completed 2021'  
    },
   ]