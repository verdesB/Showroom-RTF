

export interface PaintingData {
    id: number;
    url: string;
    positionX: number,
    positionY:number,
    positionZ: number,
    scaleX: number,
    scaleY: number,
    scaleZ: number,
    rotationX: number,
}

export interface Gallery {
    id: number;
    name: string;
    img: string;

    paintings: PaintingData[];
}

export const galleries: Gallery[] = [
    {
        id: 1,
        name: 'GALERIE 1',
        img: '/paintings/dog2.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/tableau_test.png",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/penseur.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/Nathalie.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/LOR.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/knight.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/got.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/dog.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/dog2.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/hogwarts.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/wolf2.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/woman.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ],
    },
    {
        id: 2,
        name: 'GALERIE 2',
        img: '/paintings/got.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/got.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/got.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/got.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/got.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/got.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/got.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/got.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/got.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/got.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/got.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/got.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/got.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/got.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/got.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    },
    {
        id: 3,
        name: 'GALERIE 3',
        img: '/paintings/knight.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/knight.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/knight.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/knight.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/knight.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/knight.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/knight.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/knight.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/knight.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/knight.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/knight.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/knight.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/knight.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/knight.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/knight.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    },
    {
        id: 4,
        name: 'GALERIE 4',
        img: '/paintings/LOR2.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/LOR2.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/LOR2.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/LOR2.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/LOR2.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/LOR2.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/LOR2.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/LOR2.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/LOR2.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/LOR2.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/LOR2.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/LOR2.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/LOR2.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/LOR2.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/LOR2.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    },
    {
        id: 5,
        name: 'GALERIE 5',
        img: '/paintings/wolf.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/wolf.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/wolf.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/wolf.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/wolf.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/wolf.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/wolf.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/wolf.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/wolf.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/wolf.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/wolf.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    },
    {
        id: 6,
        name: 'GALERIE 6',
        img: '/paintings/marin.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/marin.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/marin.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/marin.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/marin.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/marin.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/marin.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/marin.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/marin.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/marin.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/marin.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    },
    {
        id: 7,
        name: 'GALERIE 7',
        img: '/paintings/malinois.jpg',
        paintings: [
            {
                id: 1,
                url: "./paintings/malinois.jpg",
                positionX:2.3,
                positionY:4,
                positionZ:-8.5,
                scaleX:0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 2,
                url: "./paintings/malinois.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: -8.3,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 3,
                url: "./paintings/malinois.jpg",
                positionX: 2.8,
                positionY: 3.8,
                positionZ: -42,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 4,
                url: "./paintings/malinois.jpg",
                positionX: 2.8,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 270,
            },
            {
                id: 5,
                url: "./paintings/malinois.jpg",
                positionX: 2.2,
                positionY: 4,
                positionZ: 24.5,
                scaleX: 0.55,
                scaleY: 0.55,
                scaleZ: 0.55,
                rotationX: 270,
            },
            {
                id: 6,
                url: "./paintings/malinois.jpg",
                positionX: 2.3,
                positionY: 4,
                positionZ: -40.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 270,
            },
            {
                id: 7,
                url: "./paintings/malinois.jpg",
                positionX: -10.5,
                positionY: 6.5,
                positionZ: -49.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 8,
                url: "./paintings/malinois.jpg",
                positionX: -10.5,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 9,
                url: "./paintings/malinois.jpg",
                positionX: 10,
                positionY: 5.5,
                positionZ: 48.9,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 0,
            },
            {
                id: 10,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 41,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
            {
                id: 11,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 24,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 12,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: 8,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 13,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 5.5,
                positionZ: -8.5,
                scaleX: 0.7,
                scaleY: 0.7,
                scaleZ: 0.7,
                rotationX: 90,
            },
            {
                id: 14,
                url: "./paintings/malinois.jpg",
                positionX: 18,
                positionY: 6,
                positionZ: -24.5,
                scaleX: 0.6,
                scaleY: 0.6,
                scaleZ: 0.6,
                rotationX: 90,
            },
        ]
    }

];
