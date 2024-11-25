import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import Link from 'next/link';
import { Phone, ShoppingBasket } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
    return (
        <header className="bg-white">
            <nav className="container py-5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                   <h1 className='font-[950]'> Haroon Pizza</h1>
                    <Select>
                        <SelectTrigger className="w-[180px] focus:ring-0">
                            <SelectValue placeholder="Select Restaurant" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
                            <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
                            <SelectItem value="kids-corner">Kids corner</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center gap-x-4">
                    <ul className="flex items-center font-medium space-x-4">
                        <li>
                            <Link className="hover:text-primary" href={'/'}>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" href={'/'}>
                                Orders
                            </Link>
                        </li>
                    </ul>
                    <div className="relative">
                        <Link href="/cart">
                            <ShoppingBasket className="hover:text-primary" />
                        </Link>
                        <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white">
                            3
                        </span>
                    </div>
                    <div className="flex items-center ml-12">
                        <Phone />
                        <span>+92 9800 098 998</span>
                    </div>
                    <Button size={'sm'}>Logout</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
