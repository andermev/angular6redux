export interface Employee {
    id: string;
    name: string;
    jobTitle: string;
    age: number;
    username: string;
    hireDate: Date;
    dateOfBirth: Date;
    country: string;
    status: boolean;
    area: Area;
    tipRate: number;
}

export enum Area {
    Services = 'SERVICES',
    Kitchen = 'KITCHEN'
}

export function generateMockEmployee(): Employee {
    return {
        id: '1',
        name: 'Giacomo Guillizoni',
        jobTitle: 'Founder & CEO',
        age: 40,
        username: 'Peldi',
        hireDate: new Date('2017/10/01'),
        dateOfBirth: new Date('1975/06/15'),
        country: 'Italy',
        status: true,
        area: Area.Services,
        tipRate: 0.5
    };
}

export function generateMockEmployees(): Employee[] {
    return [
        {
            id: '1',
            name: 'Giacomo Guillizoni',
            jobTitle: 'Founder & CEO',
            age: 40,
            username: 'Peldi',
            hireDate: new Date('2017/10/01'),
            dateOfBirth: new Date('1978/06/15'),
            country: 'Italy',
            status: true,
            area: Area.Services,
            tipRate: 0.5
        },
        {
            id: '2',
            name: 'Marco Botton',
            jobTitle: 'Tuttofare',
            age: 38,
            username: 'Marcopolo',
            hireDate: new Date('2001/01/10'),
            dateOfBirth: new Date('1985/03/26'),
            country: 'French',
            status: true,
            area: Area.Services,
            tipRate: 0.5
        },
        {
            id: '3',
            name: 'Mariah Maclachlan',
            jobTitle: 'Better Half',
            age: 41,
            username: 'Patata',
            hireDate: new Date('2016/02/01'),
            dateOfBirth: new Date('1990/07/05'),
            country: 'USA',
            status: true,
            area: Area.Services,
            tipRate: 0.5
        },
        {
            id: '4',
            name: 'Valery Liberty',
            jobTitle: 'Head Chef',
            age: 30,
            username: 'Val',
            hireDate: new Date('2018/03/02'),
            dateOfBirth: new Date('1988/08/23'),
            country: 'Colombia',
            status: true,
            area: Area.Kitchen,
            tipRate: 0.5
        }
    ];
}
