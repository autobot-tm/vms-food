'use client';
import ButtonApp from '@/components/atoms/ButtonApp';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
export function GateForm({
    onSubmit,
}: {
    onSubmit: (v: { name: string; room: string }) => void;
}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className='space-y-3'>
            <div>
                <Label htmlFor='name'>Tên</Label>
                <Input
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <Label>Phòng</Label>
                <Select onValueChange={setRoom}>
                    <SelectTrigger>
                        <SelectValue placeholder='Chọn phòng' />
                    </SelectTrigger>
                    <SelectContent>
                        {['A101', 'A102', 'B201'].map(r => (
                            <SelectItem key={r} value={r}>
                                {r}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <ButtonApp
                className='w-full'
                disabled={!name.trim() || !room}
                onClick={() => onSubmit({ name, room })}
            >
                Vào đặt món
            </ButtonApp>
        </div>
    );
}
