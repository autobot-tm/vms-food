'use client';
import ButtonApp from '@/components/atoms/ButtonApp';
import { GateForm } from '@/components/molecules/GateForm';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
export default function OrderBoard() {
    const [user, setUser] = useState<{ name: string; room: string } | null>(
        null
    );
    const [food, setFood] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [items, setItems] = useState<{ name: string; price: number }[]>([]);
    if (!user) return <GateForm onSubmit={setUser} />;
    const subtotal = items.reduce((t, i) => t + i.price, 0);
    return (
        <div className='space-y-4'>
            <div>
                Xin chào {user.name} — Phòng {user.room}
            </div>
            <div className='flex gap-2'>
                <Input
                    placeholder='Tên món'
                    value={food}
                    onChange={e => setFood(e.target.value)}
                />
                <Input
                    type='number'
                    placeholder='Giá'
                    value={price}
                    onChange={e => setPrice(+e.target.value)}
                />
                <ButtonApp
                    onClick={() =>
                        food &&
                        price > 0 &&
                        setItems([{ name: food, price }, ...items])
                    }
                >
                    Thêm
                </ButtonApp>
            </div>
            <div>
                Tổng tiền: <b>{subtotal.toLocaleString()} đ</b>
            </div>
        </div>
    );
}
