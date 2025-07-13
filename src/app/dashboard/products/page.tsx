import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import { EllipsisVertical, Plus, Search } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import ProductTable from '@/components/ProductTable'

const ProductPage = () => {
    return (
        <div className='w-full h-auto flex'>
            <SideBar />
            <div className='flex w-full h-auto'>
                <div className='min-w-xs h-auto'></div>
                <div className='w-full h-auto p-3 flex flex-col gap-3'>
                    <header className='w-full h-auto flex justify-between items-center'>
                        <div className='flex flex-col gap-1 p-2'>
                            <DropdownMenu>
                                <DropdownMenuTrigger>Products</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Product</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>All Product</DropdownMenuItem>
                                    <DropdownMenuItem>Top Selling</DropdownMenuItem>
                                    <DropdownMenuItem>Least Selling</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className='flex h-auto w-auto p-2 gap-2 relative'>
                            <Button className='bg-primary text-xs text-primary-foreground'><Plus size={14} /> Add Product</Button>
                            {/* <Input type='search' id="search" name='search' placeholder="Search" className='min-w-[230px] pl-8' />
                            <Search className='absolute w-4 h-4 top-4.5 left-4 text-lg text-primary/50' />
                            <Button className='bg-primary text-primary-foreground'><CloudDownload /> Export</Button> */}
                        </div>
                    </header>

                    <Card>
                        <CardHeader className='flex flex-col gap-1 w-full h-auto'>
                            <div className='flex justify-between items-center w-full h-auto' >
                                <CardTitle className='text-xl'>Products</CardTitle>
                                <EllipsisVertical size={20} className='text-primary/50' />
                            </div>
                            {/* <div className='w-full h-auto flex justify-between relative items-center'>
                                <Input type='search' id="search" name='search' placeholder="Search" className='w-xs pl-8' />
                                <Search className='absolute w-4 h-4 top-2 left-2 text-lg text-primary/50' />
                                <DropdownMenu>
                                    <DropdownMenuTrigger>Filter</DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Product</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>All Product</DropdownMenuItem>
                                        <DropdownMenuItem>Top Selling</DropdownMenuItem>
                                        <DropdownMenuItem>Least Selling</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div> */}
                        </CardHeader>
                        <CardContent className='w-full'>
                            <ProductTable/>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default ProductPage
