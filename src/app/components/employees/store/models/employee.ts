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
