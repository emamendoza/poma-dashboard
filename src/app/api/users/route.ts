import { NextResponse } from 'next/server';

let users = [
    { id: 1, name: 'Juan Perez', email: 'juan@example.com' },
    { id: 2, name: 'Maria Garcia', email: 'maria@example.com' },
];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newUser = {
            id: users.length + 1,
            ...body,
        };
        users.push(newUser);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear usuario' }, { status: 400 });
    }
}
